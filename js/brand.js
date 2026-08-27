/* ============================================================
   BRAND / WHITE-LABEL — dipakai bersama index.html & admin.html
   Konfigurasi disimpan di localStorage (per perangkat/browser).
============================================================ */
const BRAND_KEY = "petualangan-arab-brand";

const TEMA = [
  { id:"malam", nama:"Malam 1001", emoji:"🌙" },
  { id:"hutan", nama:"Hutan Hijau", emoji:"🌳" },
  { id:"laut",  nama:"Laut Biru",   emoji:"🌊" },
  { id:"gurun", nama:"Gurun Emas",  emoji:"🏜️" }
];

const IKON_APLIKASI = "icon-192.png";   /* dipakai bila emoji ikon tab dikosongkan */

const BRAND_DEFAULT = {
  nama:        "Bhs Arabic",
  tagline:     "Pilih gerbang petualanganmu:",
  logoEmoji:   "🌙",
  faviconEmoji:"",        /* kosong = pakai logo aplikasi */
  tema:        "malam",
  passcode:    "admin123",
  bukaSemua:   false      /* true = semua gerbang terbuka, tanpa syarat bintang */
};

function bacaBrand(){
  try{
    const raw = JSON.parse(localStorage.getItem(BRAND_KEY) || "{}");
    const cfg = Object.assign({}, BRAND_DEFAULT, raw && typeof raw==="object" ? raw : {});
    if(!TEMA.some(t=>t.id===cfg.tema)) cfg.tema = "malam";
    cfg.bukaSemua = cfg.bukaSemua === true;
    return cfg;
  }catch(e){ return { ...BRAND_DEFAULT }; }
}
function simpanBrand(cfg){
  try{ localStorage.setItem(BRAND_KEY, JSON.stringify(cfg)); return true; }
  catch(e){ return false; }
}
function resetBrand(){
  try{ localStorage.removeItem(BRAND_KEY); }catch(e){}
}

function faviconSVG(emoji){
  return "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`);
}

/* Terapkan konfigurasi ke halaman yang sedang tampil. Aman dipanggil di index & admin. */
function terapkanBrand(cfg){
  cfg = cfg || bacaBrand();
  document.documentElement.dataset.tema = cfg.tema;

  if(document.title !== undefined) document.title = cfg.nama;

  const logo = document.querySelector(".logo");
  if(logo) logo.textContent = cfg.logoEmoji + " " + cfg.nama;   /* pseudo ✦ tidak terpengaruh */

  const fav = document.querySelector("link[rel~='icon']");
  if(fav) fav.href = cfg.faviconEmoji ? faviconSVG(cfg.faviconEmoji) : IKON_APLIKASI;

  const themeMeta = document.querySelector("meta[name='theme-color']");
  if(themeMeta){
    const c = getComputedStyle(document.documentElement).getPropertyValue("--night").trim();
    if(c) themeMeta.setAttribute("content", c);
  }

  const tl = document.getElementById("brandTagline");
  if(tl) tl.textContent = cfg.tagline;

  return cfg;
}
