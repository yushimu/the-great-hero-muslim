/* ============================================================
   SISTEM PENDAMPING — pangkat, misi harian, hari beruntun.
   Dimuat SEBELUM js/app.js.
============================================================ */

const META_KOSONG = () => ({
  runtun: 0,
  hariTerakhir: "",
  tanggal: "",
  hitung: {},
  misiSelesai: [],
  dimainkan: [],
  // Fondasi state untuk The Great Hero Voyage
  voyage: {
    currentDestination: "makkah_awal",
    unlockedDestinations: ["makkah_awal"],
    completedDestinations: [],
    shipLevel: 1,
    heroXP: 0,
    completedHeroes: [], // Migrasi dari answeredQuizzes di app.js
    completedMissions: [], // ID hero yang misinya sudah diselesaikan (Tahap 4)
    journeyLogs: [] // { date, heroId, text } (Tahap 4)
  }
});
let meta = META_KOSONG();

const tanggalKini = () => new Date().toLocaleDateString("sv-SE");
function selisihHari(a, b){
  const ms = new Date(b + "T00:00:00") - new Date(a + "T00:00:00");
  return Math.round(ms / 86400000);
}

function muatMeta(data){
  const m = META_KOSONG();
  const s = data && typeof data.meta === "object" && data.meta ? data.meta : {};
  m.runtun       = Number(s.runtun) || 0;
  m.hariTerakhir = typeof s.hariTerakhir === "string" ? s.hariTerakhir : "";
  m.tanggal      = typeof s.tanggal === "string" ? s.tanggal : "";
  m.hitung       = s.hitung && typeof s.hitung === "object" ? s.hitung : {};
  m.misiSelesai  = Array.isArray(s.misiSelesai) ? s.misiSelesai : [];
  m.dimainkan    = Array.isArray(s.dimainkan) ? s.dimainkan : [];
  
  // Backward compatibility: jika s.voyage ada, gunakan; jika tidak, default META_KOSONG akan tetap terpakai
  if(s.voyage && typeof s.voyage === "object"){
    m.voyage.currentDestination = s.voyage.currentDestination || m.voyage.currentDestination;
    m.voyage.unlockedDestinations = Array.isArray(s.voyage.unlockedDestinations) ? s.voyage.unlockedDestinations : m.voyage.unlockedDestinations;
    m.voyage.completedDestinations = Array.isArray(s.voyage.completedDestinations) ? s.voyage.completedDestinations : m.voyage.completedDestinations;
    m.voyage.shipLevel = Number(s.voyage.shipLevel) || m.voyage.shipLevel;
    m.voyage.heroXP = Number(s.voyage.heroXP) || 0;
    m.voyage.completedHeroes = Array.isArray(s.voyage.completedHeroes) ? s.voyage.completedHeroes : [];
    m.voyage.completedMissions = Array.isArray(s.voyage.completedMissions) ? s.voyage.completedMissions : [];
    m.voyage.journeyLogs = Array.isArray(s.voyage.journeyLogs) ? s.voyage.journeyLogs : [];
  }
  
  // Migrasi khusus: jika data.answered ada (format lama dari app.js), gabungkan ke voyage.completedHeroes
  if(data && Array.isArray(data.answered)){
    data.answered.forEach(h => {
      if(!m.voyage.completedHeroes.includes(h)) m.voyage.completedHeroes.push(h);
    });
  }

  meta = m;
  gantiHariBila();
}

function gantiHariBila(){
  const kini = tanggalKini();
  if(meta.tanggal !== kini){
    meta.tanggal = kini;
    meta.hitung = {};
    meta.misiSelesai = [];
  }
}

function pangkatKini(bintang){
  let hasil = PANGKAT[0];
  for(const p of PANGKAT) if(bintang >= p.min) hasil = p;
  return hasil;
}
function pangkatBerikut(bintang){
  return PANGKAT.find(p => bintang < p.min) || null;
}

function acakTerpola(benih){
  let h = 2166136261;
  for(const c of String(benih)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); return ((h >>> 0) % 1000) / 1000; };
}

function misiHariIni(){
  gantiHariBila();
  const rnd = acakTerpola(meta.tanggal);
  
  // 1. Tentukan kategori pahlawan yang sudah bisa diakses pemain
  const unlockedDests = typeof DESTINATIONS !== 'undefined' ? DESTINATIONS.filter(d => meta.voyage.unlockedDestinations.includes(d.id)) : [];
  const availableHeroIds = unlockedDests.flatMap(d => d.heroes);
  const availableCategories = new Set();
  if (typeof HEROES !== 'undefined') {
    availableHeroIds.forEach(hId => {
      const h = HEROES.find(x => x.id === hId);
      if(h) availableCategories.add(h.kategori);
    });
  }
  
  // 2. Filter misi yang relevan
  const allowedKeys = ["baca_semua", "kuis_sempurna"];
  availableCategories.forEach(c => allowedKeys.push("baca_" + c));
  
  const sisa = MISI.filter(m => allowedKeys.includes(m.kunci)).map(m => {
    const nm = {...m};
    if(nm.kunci === "baca_semua") {
      // Acak target 1 atau 2 kisah untuk misi membaca acak
      nm.target = Math.floor(rnd() * 2) + 1;
      nm.desc = `Baca ${nm.target} kisah pahlawan apa saja`;
    }
    return nm;
  });

  const pilih = [];
  while(pilih.length < 3 && sisa.length) pilih.push(sisa.splice(Math.floor(rnd() * sisa.length), 1)[0]);
  return pilih;
}

const nilaiMisi = m => Math.min(m.target, Number(meta.hitung[m.kunci]) || 0);
const misiTuntas = m => nilaiMisi(m) >= m.target;

function catatHitung(kunci, tambah = 1){
  gantiHariBila();
  const lama = Number(meta.hitung[kunci]) || 0;
  meta.hitung[kunci] = lama + tambah;
  return periksaMisi();
}

function periksaMisi(){
  let bonus = 0;
  misiHariIni().forEach(m => {
    if(misiTuntas(m) && !meta.misiSelesai.includes(m.kunci)){
      meta.misiSelesai.push(m.kunci);
      bonus += 5; // Bonus 5 bintang tiap misi
    }
  });
  return bonus;
}

function catatHariMain(){
  const kini = tanggalKini();
  if(meta.hariTerakhir === kini) return false;
  meta.runtun = (meta.hariTerakhir && selisihHari(meta.hariTerakhir, kini) === 1) ? meta.runtun + 1 : 1;
  meta.hariTerakhir = kini;
  return true;
}

if(typeof module !== 'undefined') module.exports = { muatMeta, pangkatKini, pangkatBerikut, misiHariIni, catatHitung, catatHariMain, meta };
