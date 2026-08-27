/* ============================================================
   SISTEM PENDAMPING — pangkat, misi harian, hari beruntun,
   kunci gerbang, koleksi (lencana & stiker), dan panel aplikasi.

   Dimuat SEBELUM js/app.js. Semua fungsi di sini dipanggil dari
   js/app.js; data disimpan bersama progres di kunci localStorage
   yang sama (lihat SIMPANAN di js/app.js).
============================================================ */

/* ------------------------------------------------------------
   CATATAN HARIAN
------------------------------------------------------------ */
const META_KOSONG = () => ({
  runtun: 0,          /* berapa hari berturut-turut bermain  */
  hariTerakhir: "",   /* "YYYY-MM-DD" terakhir bermain       */
  tanggal: "",        /* tanggal penghitung harian di bawah  */
  hitung: {},         /* penghitung misi hari ini            */
  kategoriHariIni: [],/* id grup yang sudah dimainkan hari ini */
  misiSelesai: [],    /* id misi yang bonusnya sudah dibayar  */
  dimainkan: [],      /* id gerbang yang pernah dimainkan     */
  tampilan: "peta"    /* "peta" atau "daftar"                 */
});
let meta = META_KOSONG();

const tanggalKini = () => new Date().toLocaleDateString("sv-SE");   /* YYYY-MM-DD lokal */
function selisihHari(a, b){
  const ms = new Date(b + "T00:00:00") - new Date(a + "T00:00:00");
  return Math.round(ms / 86400000);
}

/* Ambil meta dari simpanan lama (tahan banting bila datanya rusak/kosong) */
function muatMeta(data){
  const m = META_KOSONG();
  const s = data && typeof data.meta === "object" && data.meta ? data.meta : {};
  m.runtun       = Number(s.runtun) || 0;
  m.hariTerakhir = typeof s.hariTerakhir === "string" ? s.hariTerakhir : "";
  m.tanggal      = typeof s.tanggal === "string" ? s.tanggal : "";
  m.hitung       = s.hitung && typeof s.hitung === "object" ? s.hitung : {};
  m.kategoriHariIni = Array.isArray(s.kategoriHariIni) ? s.kategoriHariIni : [];
  m.misiSelesai  = Array.isArray(s.misiSelesai) ? s.misiSelesai : [];
  m.dimainkan    = Array.isArray(s.dimainkan) ? s.dimainkan : [];
  m.tampilan     = s.tampilan === "daftar" ? "daftar" : "peta";
  meta = m;
  gantiHariBila();
}

/* Penghitung misi hanya berlaku untuk hari ini — bersihkan bila tanggal berganti */
function gantiHariBila(){
  const kini = tanggalKini();
  if(meta.tanggal !== kini){
    meta.tanggal = kini;
    meta.hitung = {};
    meta.kategoriHariIni = [];
    meta.misiSelesai = [];
  }
}

/* ------------------------------------------------------------
   PANGKAT
------------------------------------------------------------ */
function pangkatKini(bintang){
  let hasil = PANGKAT[0];
  for(const p of PANGKAT) if(bintang >= p.min) hasil = p;
  return hasil;
}
function pangkatBerikut(bintang){
  return PANGKAT.find(p => bintang < p.min) || null;
}

/* ------------------------------------------------------------
   MISI HARIAN — 3 misi diundi dari tanggal, jadi tetap sama
   sepanjang hari itu walau halaman dimuat ulang.
------------------------------------------------------------ */
function acakTerpola(benih){
  let h = 2166136261;
  for(const c of String(benih)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); return ((h >>> 0) % 1000) / 1000; };
}
function misiHariIni(){
  gantiHariBila();
  const rnd = acakTerpola(meta.tanggal);
  const sisa = [...MISI];
  const pilih = [];
  while(pilih.length < 3 && sisa.length) pilih.push(sisa.splice(Math.floor(rnd() * sisa.length), 1)[0]);
  return pilih;
}
const nilaiMisi = m => Math.min(m.target, Number(meta.hitung[m.kunci]) || 0);
const misiTuntas = m => nilaiMisi(m) >= m.target;

/* Tambah penghitung harian, lalu bayar bonus untuk misi yang baru tuntas. */
function catatHitung(kunci, tambah = 1, mode = "tambah"){
  gantiHariBila();
  const lama = Number(meta.hitung[kunci]) || 0;
  meta.hitung[kunci] = mode === "maks" ? Math.max(lama, tambah) : lama + tambah;
  return periksaMisi();
}
/* Mengembalikan jumlah bintang bonus yang baru saja didapat */
function periksaMisi(){
  let bonus = 0;
  misiHariIni().forEach(m => {
    if(misiTuntas(m) && !meta.misiSelesai.includes(m.id)){
      meta.misiSelesai.push(m.id);
      bonus += MISI_BONUS;
    }
  });
  return bonus;
}

/* ------------------------------------------------------------
   HARI BERUNTUN — dihitung sekali tiap hari saat ronde selesai
------------------------------------------------------------ */
function catatHariMain(){
  const kini = tanggalKini();
  if(meta.hariTerakhir === kini) return false;
  meta.runtun = (meta.hariTerakhir && selisihHari(meta.hariTerakhir, kini) === 1) ? meta.runtun + 1 : 1;
  meta.hariTerakhir = kini;
  return true;                       /* true = hari beruntun bertambah */
}

/* ------------------------------------------------------------
   KUNCI GERBANG
------------------------------------------------------------ */
/* Guru bisa mematikan sistem kunci dari halaman admin (dibaca sekali, lalu disimpan) */
let bukaSemuaGerbang = false;
function segarkanKunci(cfg){
  bukaSemuaGerbang = !!(cfg || bacaBrand()).bukaSemua;
}

/* Daftar rata semua gerbang. Dihitung sekali — dipakai puluhan kali tiap render. */
let _rata = null;
const semuaGerbang = () => _rata ||
  (_rata = GERBANG.flatMap(g => g.items.map(i => ({...i, grup:g.id, grupNama:g.grup}))));
function urutanGerbang(id){
  return semuaGerbang().findIndex(g => g.id === id);
}
function syaratGerbang(id){
  const i = urutanGerbang(id);
  return i < 0 ? 0 : syaratBintang(i);
}
function gerbangTerbuka(id, bintang){
  return bukaSemuaGerbang || bintang >= syaratGerbang(id);
}

/* ------------------------------------------------------------
   KOLEKSI — lencana per kategori & album stiker
------------------------------------------------------------ */
function lencana(best){
  return GERBANG.map(g => {
    const punya = g.items.filter(i => (best[i.id] || 0) >= 3).length;
    return { id:g.id, nama:"Ahli " + g.grup, punya, total:g.items.length, dapat: punya >= g.items.length };
  });
}
const stikerTerbuka = bintang => Math.min(STIKER.length, Math.floor(bintang / STIKER_PER_BINTANG));
const stikerBerikut = bintang => {
  if(stikerTerbuka(bintang) >= STIKER.length) return 0;
  return STIKER_PER_BINTANG - (bintang % STIKER_PER_BINTANG);
};

/* ============================================================
   TAMPILAN
============================================================ */
function elemen(id){ return document.getElementById(id); }

function renderPangkat(nama, bintang){
  const kotak = elemen("pangkatBox");
  if(!kotak) return;
  const p    = pangkatKini(bintang);
  const next = pangkatBerikut(bintang);
  const dasar = p.min;
  const pct  = next ? Math.round((bintang - dasar) / (next.min - dasar) * 100) : 100;
  elemen("pangkatAvatar").textContent = p.emoji;
  elemen("greetName").textContent = nama || "musafir";
  elemen("pangkatNama").textContent = p.nama;
  elemen("pangkatSisa").textContent = next
    ? `⭐ ${next.min - bintang} lagi menuju ${next.nama}`
    : "Pangkat tertinggi tercapai! 🎉";
  elemen("pangkatBar").style.width = Math.max(3, Math.min(100, pct)) + "%";
}

function renderChips(infoLevel, infoFokus, keLangkahFn){
  const kotak = elemen("chipRingkas");
  if(!kotak) return;
  kotak.innerHTML =
    `<button class="chip2" data-ke="2">Level: <b>${infoLevel}</b> ✎</button>` +
    `<button class="chip2" data-ke="3">Fokus: <b>${infoFokus}</b> ✎</button>`;
  kotak.querySelectorAll("[data-ke]").forEach(b => b.onclick = () => keLangkahFn(Number(b.dataset.ke)));
}

function renderMisi(){
  const kotak = elemen("misiList");
  if(!kotak) return;
  elemen("misiRuntun").innerHTML = `🔥 ${meta.runtun} hari beruntun`;
  kotak.innerHTML = misiHariIni().map(m => {
    const n = nilaiMisi(m), tuntas = n >= m.target;
    return `<div class="misi ${tuntas ? "done" : ""}">
      <span class="ik">${tuntas ? "✅" : m.ikon}</span>
      <span class="tx">${esc(m.teks)}
        <span class="bar"><i style="width:${Math.round(n / m.target * 100)}%"></i></span>
      </span>
      <span class="ct">${n}/${m.target}</span>
    </div>`;
  }).join("");
}

function renderStatistik(bintang){
  const kotak = elemen("statBox");
  if(!kotak) return;
  const jml = semuaGerbang().length;
  const terbuka = semuaGerbang().filter(g => gerbangTerbuka(g.id, bintang)).length;
  kotak.innerHTML = [
    [terbuka + " / " + jml, "Gerbang terbuka"],
    [bintang,               "Bintangmu"],
    [stikerTerbuka(bintang),"Stiker"],
    [meta.runtun,           "Hari beruntun"]
  ].map(([v, k]) => `<div class="statkecil"><b>${esc(v)}</b><span>${esc(k)}</span></div>`).join("");
}

function renderKoleksi(bintang, best){
  const kotak = elemen("koleksiBox");
  if(!kotak) return;
  const lc = lencana(best);
  const buka = stikerTerbuka(bintang);
  const sisa = stikerBerikut(bintang);
  kotak.innerHTML = `
    <div class="ksub">🎖️ Lencana Ahli</div>
    <div class="lencana">${lc.map(l => `
      <span class="lc ${l.dapat ? "on" : ""}">${l.dapat ? "🏅" : "🎖️"} ${esc(l.nama)}
        <b>${l.punya}/${l.total}</b></span>`).join("")}</div>
    <div class="ksub">🎨 Album Stiker</div>
    <div class="album">${STIKER.map((s, i) => `
      <span class="stk ${i < buka ? "on" : ""}">${i < buka ? s : "?"}</span>`).join("")}</div>
    <p class="kket">${buka} dari ${STIKER.length} stiker${sisa ? ` · ⭐ ${sisa} lagi menuju stiker berikutnya` : " · lengkap! 🎉"}</p>`;
}

/* Peta bergaya jalur: gerbang berbaris zig-zag mengikuti jalan setapak.
   `daftar` boleh diisi hasil saringan fokus; bila kosong, semua gerbang tampil. */
function renderPeta(bintang, best, mulai, daftar){
  const kotak = elemen("gerbangList");
  if(!kotak) return;
  daftar = daftar && daftar.length ? daftar : semuaGerbang();
  kotak.innerHTML = `<div class="peta">` + daftar.map((g, i) => {
    const terbuka = gerbangTerbuka(g.id, bintang);
    const syarat  = syaratGerbang(g.id);
    const bintangGerbang = best[g.id] || 0;
    return `<div class="simpul s${i % 4}">
      <button class="node ${g.warna} ${terbuka ? "" : "kunci"}" data-game="${g.id}"
        title="${esc(g.judul)}">${terbuka ? g.emoji : "🔒"}</button>
      <div class="ket">
        <b>${esc(g.judul)}</b>
        <small>${terbuka ? esc(g.sub) : `Butuh ⭐ ${syarat} (kurang ${syarat - bintang})`}</small>
        <span class="bintangKecil">${bintangGerbang ? "⭐".repeat(bintangGerbang) : (terbuka ? "belum dimainkan" : "")}</span>
      </div>
    </div>`;
  }).join("") + `</div>`;
  kotak.querySelectorAll("[data-game]").forEach(b => b.onclick = () => mulai(b.dataset.game));
}

/* ------------------------------------------------------------
   PANEL APLIKASI — pasang (PWA), siap offline, lindungi progres
------------------------------------------------------------ */
let promptPasang = null;
let siapOffline  = false;

function baris(ikon, judul, teks, tombol){
  return `<div class="approw">
    <span class="ai">${ikon}</span>
    <span class="at"><b>${esc(judul)}</b><small>${esc(teks)}</small></span>
    ${tombol || ""}
  </div>`;
}
function terpasang(){
  return window.matchMedia("(display-mode: standalone)").matches
      || window.matchMedia("(display-mode: minimal-ui)").matches
      || navigator.standalone === true;
}

/* ------------------------------------------------------------
   POPUP PASANG — ajakan ramah, muncul saat anak sedang senang
   (setelah selesai bermain) dan tidak mengganggu bila ditolak.
------------------------------------------------------------ */
const KUNCI_PASANG = "petualangan-arab-pasang-v1";
const HARI_MS      = 86400000;
const MAKS_TAMPIL  = 3;          /* tawaran otomatis maksimal 3 kali */

let popTerbuka   = false;
let fokusSebelum = null;
let jadwalPop    = null;

function bacaPasang(){
  try{
    const d = JSON.parse(localStorage.getItem(KUNCI_PASANG) || "{}");
    return {
      tunda:  Number(d.tunda)  || 0,      /* tampil lagi setelah waktu ini */
      tampil: Number(d.tampil) || 0,      /* berapa kali tawaran otomatis  */
      tolak:  d.tolak  === true,          /* "jangan tampilkan lagi"       */
      sudah:  d.sudah  === true           /* pernah berhasil dipasang      */
    };
  }catch(e){ return { tunda:0, tampil:0, tolak:false, sudah:false }; }
}
function simpanPasang(ubah){
  try{ localStorage.setItem(KUNCI_PASANG, JSON.stringify(Object.assign(bacaPasang(), ubah))); }
  catch(e){ /* mode privat — cukup abaikan */ }
}

/* iOS/iPadOS Safari tidak punya beforeinstallprompt → perlu panduan manual */
function iosSafari(){
  const ua  = navigator.userAgent || "";
  const ios = /iPad|iPhone|iPod/.test(ua) ||
              (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return ios && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);   /* browser lain di iOS tak bisa pasang */
}
function bisaPasang(){ return !terpasang() && (!!promptPasang || iosSafari()); }

/* boleh muncul otomatis? (tombol manual selalu boleh) */
function bolehTawarkan(){
  const s = bacaPasang();
  return bisaPasang() && !popTerbuka && !s.tolak && !s.sudah &&
         s.tampil < MAKS_TAMPIL && Date.now() > s.tunda;
}
/* jangan pernah memotong permainan yang sedang berlangsung */
function sedangMain(){
  const g = elemen("game");
  return !!g && !g.classList.contains("hidden");
}

function isiPop(){
  const nama  = (typeof bacaBrand === "function" ? bacaBrand().nama : "") || "Aplikasi ini";
  const ios   = !promptPasang && iosSafari();
  const badan = ios
    ? `<ol class="poplangkah">
         <li><span class="lt"><span class="ikonshare">⬆️</span> Ketuk tombol <b>Bagikan</b> di bilah bawah Safari.</span></li>
         <li><span class="lt">Gulir ke bawah, pilih <b>“Tambahkan ke Layar Utama”</b>.</span></li>
         <li><span class="lt">Ketuk <b>Tambah</b> — ikonnya langsung muncul di layar utama.</span></li>
       </ol>`
    : `<div class="popplus">
         <div><span class="pe">✈️</span><b>Tanpa internet</b><small>Semua soal tersimpan</small></div>
         <div><span class="pe">⚡</span><b>Buka cepat</b><small>Satu ketuk dari layar utama</small></div>
         <div><span class="pe">⭐</span><b>Bintang aman</b><small>Progres tetap tersimpan</small></div>
       </div>`;

  return `<div class="popcard">
    <div class="pegangan"></div>
    <button class="poptutup" id="popTutup" aria-label="Tutup">✕</button>
    <div class="pophead">
      <img src="icon-192.png" alt="" width="58" height="58">
      <div class="pt">
        <h3 id="popJudul">Pasang ${esc(nama)} di layar utama</h3>
        <p>${ios ? "Cuma tiga langkah, lalu bisa dimainkan seperti aplikasi biasa."
                 : "Main langsung dari ikon, tanpa buka browser — gratis dan tanpa iklan."}</p>
        <span class="popbadge">Gratis · tanpa iklan · ± 1 MB</span>
      </div>
    </div>
    ${badan}
    <div class="popaksi">
      ${ios ? `<button class="bigbtn" id="popOke">Oke, mengerti 👍</button>`
            : `<button class="bigbtn" id="popPasang">📥 Pasang sekarang</button>
               <button class="mini" id="popNanti">Nanti saja</button>`}
      <button class="poplewat" id="popJangan">Jangan tampilkan lagi</button>
    </div>
  </div>`;
}

function bukaPasang(otomatis){
  const kotak = elemen("pasangPop");
  if(!kotak || popTerbuka || !bisaPasang()) return false;

  popTerbuka   = true;
  fokusSebelum = document.activeElement;
  kotak.innerHTML = isiPop();
  kotak.classList.remove("hidden", "tutup");
  kotak.hidden = false;
  if(otomatis) simpanPasang({ tampil: bacaPasang().tampil + 1 });

  const utama = elemen("popPasang") || elemen("popOke");
  if(utama) setTimeout(()=>utama.focus(), 60);

  kotak.onclick = e => { if(e.target === kotak) tutupPasang(1); };   /* ketuk latar = nanti */
  const tutup = elemen("popTutup"); if(tutup) tutup.onclick = ()=> tutupPasang(1);
  const nanti = elemen("popNanti"); if(nanti) nanti.onclick = ()=> tutupPasang(3);
  const oke   = elemen("popOke");   if(oke)   oke.onclick   = ()=> tutupPasang(7);
  const jangan= elemen("popJangan");
  if(jangan) jangan.onclick = ()=>{ simpanPasang({tolak:true}); tutupPasang(0); segarkanPasang(); };
  const pasang= elemen("popPasang");
  if(pasang) pasang.onclick = async ()=>{
    pasang.disabled = true;
    pasang.textContent = "Menyiapkan…";
    const ok = await jalankanPasang();
    tutupPasang(ok ? 0 : 1);
  };
  return true;
}

/* tundaHari 0 = tidak menunda (ditolak permanen / sudah dipasang) */
function tutupPasang(tundaHari){
  const kotak = elemen("pasangPop");
  if(!kotak || !popTerbuka) return;
  popTerbuka = false;
  if(tundaHari > 0) simpanPasang({ tunda: Date.now() + tundaHari * HARI_MS });
  kotak.classList.add("tutup");
  setTimeout(()=>{
    kotak.classList.add("hidden");
    kotak.hidden = true;
    kotak.classList.remove("tutup");
    kotak.innerHTML = "";
  }, 260);
  if(fokusSebelum && fokusSebelum.focus) { try{ fokusSebelum.focus(); }catch(e){} }
  fokusSebelum = null;
}

async function jalankanPasang(){
  if(!promptPasang) return false;
  const p = promptPasang;
  promptPasang = null;                       /* satu event hanya boleh dipakai sekali */
  let hasil = null;
  try{ p.prompt(); hasil = await p.userChoice; }catch(e){}
  const ok = !!hasil && hasil.outcome === "accepted";
  if(ok) simpanPasang({sudah:true});
  segarkanPasang();
  return ok;
}

/* dipanggil app.js pada saat yang pas (mis. selesai bermain) */
function pemicuPasang(jeda){
  clearTimeout(jadwalPop);
  jadwalPop = setTimeout(()=>{
    if(document.visibilityState !== "visible" || sedangMain()){
      if(bolehTawarkan()) pemicuPasang(45000);   /* coba lagi nanti, jangan menyela */
      return;
    }
    if(bolehTawarkan()) bukaPasang(true);
  }, Math.max(0, jeda || 0));
}

/* chip di header + panel aplikasi selalu ikut keadaan terbaru */
function segarkanPasang(){
  const chip = elemen("pasangChip");
  if(chip){
    const tampil = bisaPasang() && !bacaPasang().tolak;
    chip.classList.toggle("hidden", !tampil);
  }
  renderAplikasi();
}
async function renderAplikasi(){
  const kotak = elemen("appBox");
  if(!kotak) return;
  let awet = false;
  try{ awet = navigator.storage && navigator.storage.persisted ? await navigator.storage.persisted() : false; }catch(e){}

  kotak.innerHTML =
    (terpasang()
      ? baris("📱", "Sudah dipasang", "Aplikasi berjalan dari layar utama perangkat ini.", "")
      : bisaPasang()
        ? baris("📥", "Belum dipasang",
                promptPasang ? "Pasang supaya ikon muncul di layar utama."
                             : "Lihat cara menambahkannya ke layar utama.",
                `<button class="mini prim" id="btnPasang">${promptPasang ? "Pasang" : "Cara pasang"}</button>`)
        : baris("📥", "Pasang lewat menu browser",
                "Buka menu browser → “Tambahkan ke Layar Utama”.", "")) +
    (siapOffline
      ? baris("✅", "Siap dimainkan tanpa internet", "Semua soal sudah tersimpan di perangkat ini.", "")
      : baris("🌐", "Menyiapkan mode tanpa internet", "Biarkan halaman terbuka sebentar.", "")) +
    (awet
      ? baris("🛡️", "Progres terlindungi", "Browser tidak akan menghapus bintangmu otomatis.", "")
      : baris("⚠️", "Progres belum terlindungi", "Browser boleh menghapus penyimpanan saat ruang menipis.",
              `<button class="mini" id="btnLindungi">Lindungi</button>`)) +
    `<p class="kket">Ada yang aneh? <button class="tautan" id="btnMuatUlang">Muat ulang &amp; segarkan</button></p>`;

  const pasang = elemen("btnPasang");
  if(pasang) pasang.onclick = ()=> bukaPasang(false);   /* lewat panel: popup penuh penjelasan */
  const lindungi = elemen("btnLindungi");
  if(lindungi) lindungi.onclick = async ()=>{
    try{
      const ok = navigator.storage && navigator.storage.persist ? await navigator.storage.persist() : false;
      toast(ok ? "Progres kini terlindungi 🛡️" : "Browser menolak — progres tetap tersimpan biasa",
            {ikon: ok ? "🛡️" : "⚠️", baik: ok});
    }catch(e){}
    renderAplikasi();
  };
  const ulang = elemen("btnMuatUlang");
  if(ulang) ulang.onclick = async ()=>{
    try{
      if("caches" in window) (await caches.keys()).forEach(k => caches.delete(k));
      if("serviceWorker" in navigator){
        const daftar = await navigator.serviceWorker.getRegistrations();
        await Promise.all(daftar.map(r => r.unregister()));
      }
    }catch(e){}
    location.reload();
  };
}

function siapkanPWA(){
  window.addEventListener("beforeinstallprompt", e=>{
    e.preventDefault();
    promptPasang = e;
    segarkanPasang();
    pemicuPasang(30000);       /* beri waktu bermain dulu, baru menawarkan */
  });
  window.addEventListener("appinstalled", ()=>{
    promptPasang = null;
    simpanPasang({sudah:true});
    clearTimeout(jadwalPop);
    if(popTerbuka) tutupPasang(0);
    segarkanPasang();
    if(typeof confetti === "function") confetti();
    toast("Aplikasi terpasang! Cari ikonnya di layar utama 🎉", {ikon:"📱"});
  });

  /* tombol pasang di header */
  const chip = elemen("pasangChip");
  if(chip) chip.onclick = ()=> bukaPasang(false);

  /* Esc menutup, Tab tetap berputar di dalam popup */
  document.addEventListener("keydown", e=>{
    if(!popTerbuka) return;
    e.stopPropagation();                       /* tombol permainan tidak ikut bereaksi */
    if(e.key === "Escape"){ tutupPasang(1); return; }
    if(e.key !== "Tab") return;
    const kotak = elemen("pasangPop");
    const isi = kotak ? kotak.querySelectorAll("button:not([disabled])") : [];
    if(!isi.length) return;
    const awal = isi[0], akhir = isi[isi.length - 1];
    if(e.shiftKey && document.activeElement === awal){ e.preventDefault(); akhir.focus(); }
    else if(!e.shiftKey && document.activeElement === akhir){ e.preventDefault(); awal.focus(); }
  }, true);

  /* dipasang/dilepas saat aplikasi berjalan → tampilan ikut menyesuaikan */
  const mode = window.matchMedia("(display-mode: standalone)");
  if(mode.addEventListener) mode.addEventListener("change", segarkanPasang);

  /* iOS tidak punya beforeinstallprompt: tawarkan panduan setelah anak sempat mencoba */
  if(iosSafari()) pemicuPasang(60000);
  segarkanPasang();

  if("serviceWorker" in navigator && location.protocol !== "file:"){
    /* ready menunggu sampai benar-benar ada pekerja aktif — juga saat pemuatan pertama */
    navigator.serviceWorker.register("/sw.js")
      .then(()=> navigator.serviceWorker.ready)
      .then(()=>{ siapOffline = true; renderAplikasi(); })
      .catch(()=>{ siapOffline = false; renderAplikasi(); });
    navigator.serviceWorker.addEventListener("controllerchange", ()=>{
      siapOffline = true; renderAplikasi();
    });
  }
}
