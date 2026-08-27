/* ============================================================
   SERVICE WORKER — agar game bisa dimainkan tanpa internet.
   Naikkan VERSI setiap kali file di daftar ISI berubah.
============================================================ */
const VERSI = "petualangan-arab-v3";
const ISI = [
  "/", "/index.html", "/admin.html",
  "/css/style.css",
  "/js/brand.js", "/js/data.js", "/js/sistem.js", "/js/app.js",
  "/manifest.webmanifest", "/icon.svg",
  "/icon-192.png", "/icon-512.png", "/icon-maskable-512.png", "/apple-touch-icon.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(VERSI)
      /* addAll gagal total bila satu berkas meleset — simpan satu per satu */
      .then(c => Promise.all(ISI.map(u => c.add(u).catch(()=>{}))))
      .then(()=> self.skipWaiting())
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== VERSI).map(n => caches.delete(n))))
      .then(()=> self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;

  /* Halaman: coba jaringan dulu supaya pembaruan cepat terlihat,
     jatuh ke simpanan bila sedang offline. */
  if(req.mode === "navigate"){
    e.respondWith(
      fetch(req).then(res=>{
        const salinan = res.clone();
        caches.open(VERSI).then(c => c.put(req, salinan)).catch(()=>{});
        return res;
      }).catch(()=> caches.match(req).then(r => r || caches.match("/index.html")))
    );
    return;
  }

  /* Aset: pakai simpanan dulu, sambil menyegarkan di latar. */
  e.respondWith(
    caches.match(req).then(simpan=>{
      const jaringan = fetch(req).then(res=>{
        if(res && (res.ok || res.type === "opaque")){
          const salinan = res.clone();
          caches.open(VERSI).then(c => c.put(req, salinan)).catch(()=>{});
        }
        return res;
      }).catch(()=> simpan);
      return simpan || jaringan;
    })
  );
});
