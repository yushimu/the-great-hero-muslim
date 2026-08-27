/* ============================================================
   MESIN GAME — Petualangan Bahasa Arab
============================================================ */
const UJIAN_Q = 30;
const UJIAN_NYAWA = 5;
const KILAT_DETIK = 45;
const BALON_DETIK = 40;
const SIMPANAN = "petualangan-arab-v3";
const KUNCI_PAPAN = kode => "petualangan-arab-papan-" + kode;

/* gerbang yang bisa dipakai sebagai soal pilihan ganda */
const POOL_KILAT = ["huruf","harakat","kata","angka","bunyi","raqm","fiil",
                    "mihnah","cuaca","waktu","alam","amr"];
const POOL_UJIAN = ["huruf","harakat","kata","angka","bunyi","kembar","sambung","raqm",
                    "lawan","fiil","hari","cakap","hadza","dhamir","tempat",
                    "syamsi","jamak","mihnah","cuaca","waktu","alam","tanya","amr"];

let state = {};
let totalStars = 0;
let best = {};
let soundOn = true;
let timers = [];
let pemain = "";
let level = "musafir";
let fokus = "semua";
let room = "";

const $ = id => document.getElementById(id);
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const pick = (arr,n) => shuffle([...arr]).slice(0,n);
const acak = arr => arr[Math.floor(Math.random()*arr.length)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/* buang harakat agar panjang kata bisa diukur adil */
const polos = s => String(s).replace(/[ً-ْٰٓ-ٕ]/g,"");

const levelInfo = () => LEVELS.find(l=>l.id===level) || LEVELS[0];
const opsi      = () => levelInfo().opsi;
const namaGerbang = id => {
  for(const g of GERBANG){ const it = g.items.find(i=>i.id===id); if(it) return it.judul; }
  return "Gerbang";
};
const namaFokus = () => fokus==="semua" ? "Semua" : (GERBANG.find(g=>g.id===fokus)||{}).grup || "Semua";

/* ============================================================
   BANK SOAL SESUAI LEVEL
============================================================ */
function bank(nama){
  const L = level;
  switch(nama){
    case "KATA":
      return L==="musafir"    ? BANK.KATA.filter(k=>k[2].length<=7)
           : L==="pengembara" ? BANK.KATA.filter(k=>k[2].length<=10)
           : BANK.KATA;
    case "ANGKA":
      return L==="musafir" ? BANK.ANGKA.filter(a=>a[0]<=5) : BANK.ANGKA;
    case "RAQM":
      return L==="musafir"    ? BANK.RAQM.filter(r=>r[0]<=5)
           : L==="pengembara" ? BANK.RAQM.filter(r=>r[0]<=10)
           : BANK.RAQM;
    /* kosakata bergambar: sama bentuknya, disaring lewat panjang transliterasi */
    case "MIHNAH": case "CUACA": case "WAKTU": case "ALAM": case "FIIL":
      return L==="musafir"    ? BANK[nama].filter(k=>k[2].length<=8)
           : L==="pengembara" ? BANK[nama].filter(k=>k[2].length<=12)
           : BANK[nama];
    case "JAMAK":
      return L==="musafir"    ? BANK.JAMAK.filter(j=>j[1].length<=8)
           : L==="pengembara" ? BANK.JAMAK.filter(j=>j[1].length<=11)
           : BANK.JAMAK;
    case "HARAKAT":
      return L==="musafir"    ? BANK.HARAKAT.filter(h=>Array.from(h[0]).length<=2)
           : L==="pengembara" ? BANK.HARAKAT.filter(h=>Array.from(h[0]).length<=3)
           : BANK.HARAKAT;
    case "KALIMAT":
      return L==="musafir"    ? BANK.KALIMAT.filter(k=>k[0].length<=2)
           : L==="pengembara" ? BANK.KALIMAT.filter(k=>k[0].length<=3)
           : BANK.KALIMAT;
    case "EJA":
      return L==="musafir"    ? BANK.EJA.filter(e=>Array.from(e[1]).length<=3)
           : L==="pengembara" ? BANK.EJA.filter(e=>Array.from(e[1]).length<=4)
           : BANK.EJA;
    case "DOA": {
      const urut = [...BANK.DOA].sort((a,b)=>polos(a[1]).length - polos(b[1]).length);
      return L==="musafir" ? urut.slice(0,6) : L==="pengembara" ? urut.slice(0,8) : urut;
    }
    default:
      return BANK[nama];
  }
}

/* ============================================================
   SIMPANAN PROGRES (localStorage)
============================================================ */
function muatProgres(){
  try{
    const data = JSON.parse(localStorage.getItem(SIMPANAN) || "{}");
    totalStars = Number(data.totalStars) || 0;
    best   = data.best && typeof data.best === "object" ? data.best : {};
    pemain = typeof data.pemain === "string" ? data.pemain : "";
    room   = typeof data.room   === "string" ? data.room   : "";
    if(LEVELS.some(l=>l.id===data.level)) level = data.level;
    if(data.fokus==="semua" || GERBANG.some(g=>g.id===data.fokus)) fokus = data.fokus;
    if(typeof data.soundOn === "boolean") soundOn = data.soundOn;
    muatMeta(data);
  }catch(e){ /* simpanan rusak — mulai dari nol */ muatMeta({}); }
}
function simpanProgres(){
  try{
    localStorage.setItem(SIMPANAN, JSON.stringify({totalStars, best, soundOn, pemain, level, fokus, room, meta}));
  }catch(e){ /* mode privat / kuota penuh — game tetap jalan */ }
}
function resetProgres(){
  if(!confirm("Hapus semua bintang, stiker, dan misi lalu mulai petualangan dari awal?")) return;
  totalStars = 0; best = {};
  muatMeta({});
  simpanProgres();
  renderMenu();
  $("starCount").textContent = 0;
  toast("Petualangan dimulai dari awal 🐫", {ikon:"🔄"});
}

/* ============================================================
   PAPAN BINTANG (lokal per room)
============================================================ */
function bacaPapan(kode){
  try{
    const arr = JSON.parse(localStorage.getItem(KUNCI_PAPAN(kode)) || "[]");
    return Array.isArray(arr) ? arr : [];
  }catch(e){ return []; }
}
function catatPapan(stars, benar){
  if(!room || !pemain) return;
  const papan = bacaPapan(room);
  let e = papan.find(p => p.nama === pemain);
  if(!e){ e = {nama:pemain, bintang:0}; papan.push(e); }
  e.bintang += stars;
  e.gerbang  = namaGerbang(state.game);
  e.level    = levelInfo().nama;
  e.benar    = benar;
  e.waktu    = Date.now();
  try{ localStorage.setItem(KUNCI_PAPAN(room), JSON.stringify(papan)); }catch(err){}
}
function renderPapan(){
  const kotak = $("papanList");
  if(!room){
    $("papanTitle").textContent = "Belum ada room";
    $("papanDesc").textContent  = "Buat room dulu, lalu ajak temanmu masuk dengan kodenya.";
    kotak.innerHTML = "";
    return;
  }
  $("papanTitle").innerHTML = `Room <b>${esc(room)}</b> <span class="ket">(lokal)</span>`;
  $("papanDesc").textContent = `Teman bisa masuk dengan kode ${room} atau lewat link undangan.`;
  const papan = bacaPapan(room).sort((a,b)=>b.bintang-a.bintang);
  if(!papan.length){
    kotak.innerHTML = `<p class="desc" style="margin-top:10px">Belum ada yang main di room ini. Jadilah yang pertama! 🐫</p>`;
    return;
  }
  const medali = ["🥇","🥈","🥉"];
  kotak.innerHTML = papan.map((p,i)=>`
    <div class="lbrow ${p.nama===pemain?'me':''}">
      <span style="font-size:18px">${medali[i] || "✦"}</span>
      <span class="nm">${esc(p.nama)}
        <span class="sub">${esc(p.gerbang||"—")} · ${esc(p.level||"—")} · ${esc(p.benar||"—")}</span>
      </span>
      <span class="st">⭐ ${p.bintang}</span>
    </div>`).join("");
}

/* ============================================================
   ROOM
============================================================ */
function kodeBaru(){
  const huruf = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; /* tanpa I,O,0,1 agar tak tertukar */
  return Array.from({length:6}, ()=>acak(huruf.split(""))).join("");
}
function linkRoom(){
  return location.origin + location.pathname + "?room=" + room;
}
function pesanRoom(teks, baik=true){
  toast(teks, {baik, ikon: baik ? "🏮" : "⚠️"});
}
function renderRoom(){
  $("roomTitle").textContent = room ? "Room " + room : "Belum masuk room";
  $("kodeVal").textContent   = room || "—";
  $("kodeLevel").textContent = levelInfo().emoji + " " + levelInfo().nama;
  ["salinKode","salinLink","bagikan","keluarRoom"].forEach(id=> $(id).disabled = !room);
  renderPapan();
}
async function salin(teks, pesan){
  try{
    await navigator.clipboard.writeText(teks);
    pesanRoom(pesan);
  }catch(e){
    /* clipboard diblokir (mis. bukan HTTPS) — tampilkan agar bisa disalin manual */
    pesanRoom("Salin manual: " + teks, false);
  }
}

/* ============================================================
   LATAR: BINTANG & METEOR
============================================================ */
(function makeStars(){
  const box = $("stars");
  for(let i=0;i<46;i++){
    const s=document.createElement("div");
    s.className="tw";
    const size=(1+Math.random()*2.6).toFixed(1);
    s.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}vw;top:${Math.random()*55}vh;
      animation-duration:${(1.6+Math.random()*2.8).toFixed(1)}s;animation-delay:${(Math.random()*3).toFixed(1)}s;`;
    box.appendChild(s);
  }
})();
setInterval(()=>{
  if(document.hidden) return;
  const s=document.createElement("div");
  s.className="shoot"; s.style.top=(4+Math.random()*22)+"%";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),1800);
}, 5200);

/* ============================================================
   SUARA
============================================================ */
let actx = null;
function beep(freqs, dur=0.12, type="sine"){
  if(!soundOn) return;
  try{
    actx = actx || new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach((f,i)=>{
      const o=actx.createOscillator(), g=actx.createGain();
      o.type=type; o.frequency.value=f;
      g.gain.setValueAtTime(.18,actx.currentTime);
      g.gain.exponentialRampToValueAtTime(.001,actx.currentTime+dur);
      o.connect(g); g.connect(actx.destination);
      o.start(actx.currentTime+i*dur); o.stop(actx.currentTime+i*dur+dur);
    });
  }catch(e){}
}
const dingBenar   = ()=>beep([523,659,784],0.14);
const dingSalah   = ()=>beep([220,180],0.18,"square");
const dingSelesai = ()=>beep([523,659,784,1047],0.16);
const tick        = ()=>beep([880],0.05);
const pop         = ()=>beep([700,1000],0.06);

/* pelafalan Arab — dipakai bila browser punya suara bahasa Arab */
function speak(teks){
  if(!("speechSynthesis" in window)) return;
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(teks);
    const suara = speechSynthesis.getVoices().find(v=>/^ar/i.test(v.lang));
    if(suara) u.voice = suara;
    u.lang = "ar-SA"; u.rate = .75;
    speechSynthesis.speak(u);
  }catch(e){}
}
if("speechSynthesis" in window) speechSynthesis.getVoices();

function confetti(){
  const em = ["🌙","⭐","✨","🌟","🏮"];
  for(let i=0;i<16;i++){
    const s=document.createElement("div");
    s.className="confetti"; s.textContent=em[Math.floor(Math.random()*em.length)];
    s.style.left=(Math.random()*100)+"vw";
    s.style.animationDuration=(1.6+Math.random()*1.5)+"s";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),3300);
  }
}

/* notifikasi melayang */
function toast(pesan, {ikon="✨", baik=true, lama=2600}={}){
  const box = $("toasts");
  if(!box) return;
  const t = document.createElement("div");
  t.className = "toast" + (baik ? "" : " bad");
  t.innerHTML = `<span class="ic">${ikon}</span><span>${esc(pesan)}</span>`;
  box.appendChild(t);
  setTimeout(()=>{ t.classList.add("out"); setTimeout(()=>t.remove(), 320); }, lama);
}

/* angka bintang naik pelan agar terasa sebagai hadiah */
function setStars(target, animate=false){
  const el = $("starCount");
  if(!el) return;
  const dari = Number(el.textContent) || 0;
  if(!animate || dari===target){ el.textContent = target; return; }
  const langkah = Math.max(1, Math.round((target-dari)/14));
  let n = dari;
  const iv = setInterval(()=>{
    n += langkah;
    if(n>=target){ n=target; clearInterval(iv); }
    el.textContent = n;
  }, 40);
}

/* ============================================================
   TAMPILAN & HUD
============================================================ */
function show(id){
  ["nameScreen","menu","game","result"].forEach(s=>$(s).classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
}
function stopTimers(){
  timers.forEach(t=>clearInterval(t));
  timers = [];
  document.querySelectorAll(".balloon").forEach(b=>b.remove());
  if("speechSynthesis" in window) speechSynthesis.cancel();
}
function setProgress(pct){
  $("pbar").style.width = pct+"%";
  $("pcamel").style.left = Math.max(4, Math.min(96, pct))+"%";
}
function totalSoal(){ return state.game==="ujian" ? UJIAN_Q : levelInfo().soal; }
function totalNyawa(){ return state.game==="ujian" ? UJIAN_NYAWA : (levelInfo().nyawa || 3); }
function updateHUD(){
  setProgress(state.qIndex/totalSoal()*100);
  const maks = state.maxLives || totalNyawa();
  $("lives").textContent = "❤️".repeat(state.lives)+"🤍".repeat(Math.max(0,maks-state.lives));
  $("starCount").textContent = totalStars;
}

/* ============================================================
   MENU
============================================================ */
function renderLevel(){
  $("levelList").innerHTML = LEVELS.map(l=>`
    <button class="opt ${l.id===level?'on':''}" data-level="${l.id}">
      ${l.emoji} ${esc(l.nama)}<small>${esc(l.sub)}</small>
    </button>`).join("");
  $("levelList").querySelectorAll("[data-level]").forEach(b=>{
    b.onclick = ()=>{ level = b.dataset.level; simpanProgres(); renderLevel(); renderRoom(); tick(); };
  });
}
function renderFokus(){
  const daftar = [{id:"semua", emoji:"✨", grup:"Semua", desc:"Semua gerbang",
                   jml: GERBANG.reduce((n,g)=>n+g.items.length,0)}]
    .concat(GERBANG.map(g=>({id:g.id, emoji:g.items[0].emoji, grup:g.grup, desc:g.desc, jml:g.items.length})));
  $("fokusList").innerHTML = daftar.map(f=>`
    <button class="opt ${f.id===fokus?'on2':''}" data-fokus="${f.id}">
      ${esc(f.grup)}<small>${f.jml} gerbang</small>
    </button>`).join("");
  const aktif = daftar.find(f=>f.id===fokus) || daftar[0];
  $("fokusTitle").textContent = aktif.grup;
  $("fokusDesc").textContent  = aktif.desc;
  $("fokusList").querySelectorAll("[data-fokus]").forEach(b=>{
    b.onclick = ()=>{ fokus = b.dataset.fokus; simpanProgres(); renderFokus(); renderGerbang(); tick(); };
  });
}
/* gerbang terkunci hanya bisa dibuka dengan bintang */
function cobaMulai(id){
  if(gerbangTerbuka(id, totalStars)) return startGame(id);
  const kurang = syaratGerbang(id) - totalStars;
  dingSalah();
  toast(`Gerbang masih terkunci — kumpulkan ⭐ ${kurang} lagi`, {ikon:"🔒", baik:false});
}
function renderTabTampilan(){
  ["tabPeta","tabDaftar"].forEach(id=>{
    const b = $(id);
    if(b) b.classList.toggle("on", meta.tampilan === (id==="tabPeta" ? "peta" : "daftar"));
  });
}
function renderGerbang(){
  renderTabTampilan();
  const tampil = GERBANG.filter(g => fokus==="semua" || g.id===fokus);
  if(meta.tampilan === "peta"){
    const ikut = new Set(tampil.flatMap(g => g.items.map(i => i.id)));
    return renderPeta(totalStars, best, cobaMulai, semuaGerbang().filter(g => ikut.has(g.id)));
  }
  $("gerbangList").innerHTML = tampil.map(grup=>`
    <div class="grup">${esc(grup.grup)}</div>
    <div class="islands">
      ${grup.items.map(g=>{
        const buka   = gerbangTerbuka(g.id, totalStars);
        const syarat = syaratGerbang(g.id);
        return `
        <button class="island ${g.warna} ${buka?"":"terkunci"}" data-game="${g.id}">
          <div class="gate">
            <span class="big">${buka ? g.emoji : "🔒"}</span>${esc(g.judul)}
            <small>${buka ? esc(g.sub) : `Butuh ⭐ ${syarat}`}</small>
            <span class="best">${buka
              ? (best[g.id] ? "⭐".repeat(best[g.id]) : "Belum main")
              : `kurang ${syarat - totalStars}`}</span>
          </div>
        </button>`;}).join("")}
    </div>`).join("");
  $("gerbangList").querySelectorAll(".island").forEach(b=> b.onclick = ()=>cobaMulai(b.dataset.game));
}
function renderMenu(){
  renderPangkat(pemain, totalStars);
  renderChips(levelInfo().emoji + " " + levelInfo().nama, namaFokus(), keLangkah);
  renderMisi();
  renderStatistik(totalStars);
  renderLevel(); renderFokus(); renderGerbang(); renderRoom();
  renderKoleksi(totalStars, best);
  renderStepper();
}

/* ============================================================
   LANGKAH / WIZARD MENU
============================================================ */
const LANGKAH = [
  { n:1, label:"Room"  },
  { n:2, label:"Level" },
  { n:3, label:"Fokus" },
  { n:4, label:"Main"  }
];
const LANGKAH_AKHIR = LANGKAH.length;
let langkah = 1;

function renderStepper(){
  const box = $("stepper");
  if(!box) return;
  box.innerHTML = LANGKAH.map(s=>`
    <button type="button" class="stepchip ${s.n===langkah?'on':''} ${s.n<langkah?'done':''}" data-step="${s.n}">
      <b>${s.n<langkah ? "✓" : s.n}</b><span>${esc(s.label)}</span>
    </button>`).join("");
  box.querySelectorAll("[data-step]").forEach(b=>{
    b.onclick = ()=> keLangkah(Number(b.dataset.step));
  });
}
function keLangkah(n){
  langkah = Math.max(1, Math.min(LANGKAH_AKHIR, n));
  document.querySelectorAll("#menu .step").forEach(el=>{
    el.classList.toggle("on", Number(el.dataset.step) === langkah);
  });
  renderStepper();
  $("prevStep").disabled = (langkah === 1);
  $("nextStep").classList.toggle("hidden", langkah === LANGKAH_AKHIR);
  window.scrollTo({ top:0, behavior:"smooth" });
}

/* ============================================================
   HOOK MISI HARIAN — dipanggil dari mesin soal
============================================================ */
let beruntun = 0;
function bonusMisi(bonus){
  if(!bonus) return;
  totalStars += bonus;
  simpanProgres();
  setStars(totalStars, true);
  toast(`Misi harian selesai! +${bonus} bintang 🎯`, {ikon:"🎯"});
  confetti();
}
function catatBenar(){
  beruntun++;
  bonusMisi(catatHitung("beruntun", beruntun, "maks"));
  bonusMisi(catatHitung("benar", 1));
}
function catatSalah(){ beruntun = 0; }

/* ============================================================
   DISPATCHER
============================================================ */
function startGame(g){
  stopTimers();
  if(g==="memori") return startMemori();
  if(g==="kilat")  return startKilat();
  if(g==="balon")  return startBalon();
  const nyawa = g==="ujian" ? UJIAN_NYAWA : (levelInfo().nyawa || 3);
  state = {game:g, qIndex:0, correct:0, lives:nyawa, maxLives:nyawa, locked:false, mode:"quiz"};
  terakhirJawab = null;
  show("game");
  nextQuestion();
}
function nextQuestion(){
  state.locked = false;
  updateHUD();
  if(state.qIndex >= totalSoal() || state.lives<=0) return endQuiz();
  if(state.game==="kalimat") return qKalimat();
  if(state.game==="eja")     return qEja();
  const g = state.game==="ujian" ? acak(POOL_UJIAN) : state.game;
  soalBervariasi(g, q => renderMC(q, ()=>{ state.qIndex++; nextQuestion(); }));
}

/* Hindari jawaban benar yang sama muncul dua kali berturut-turut —
   penting karena satu ronde kini 30 soal. */
let terakhirJawab = null;
function soalBervariasi(g, cb){
  let q = null;
  for(let t=0; t<6; t++){
    let cand = null;
    makeQuestion(g, x => cand = x);
    q = cand;
    if(!q || q.correct !== terakhirJawab) break;
  }
  if(q) terakhirJawab = q.correct;
  cb(q);
}

/* ============================================================
   PEMBUAT SOAL PILIHAN GANDA
============================================================ */
/* kosakata bergambar [emoji, arab, translit, arti] — dipakai banyak gerbang */
function soalKosakata(namaBank, tanya, n, cb){
  const [item,...rest] = pick(bank(namaBank), n);
  if(Math.random()<0.5){
    cb({promptHTML:`<p class="prompt">${tanya}</p><div class="bigEmoji">${item[0]}</div><p class="prompt">(${esc(item[3])})</p>`,
        options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], arabicButtons:true, ucap:item[1],
        tip:`${item[1]} (${item[2]}) = ${item[3]}`});
  }else{
    cb({promptHTML:`<p class="prompt">Apa artinya?</p><div class="midArab ar">${item[1]}</div><p class="prompt"><i>${esc(item[2])}</i></p>`,
        options: shuffle([item[3], ...rest.map(r=>r[3])]), correct:item[3], ucap:item[1]});
  }
}

function makeQuestion(g, cb){
  const n = opsi();
  if(g==="huruf"){
    const [item,...rest] = pick(bank("HURUF"), n);
    cb({promptHTML:`<p class="prompt">Apa nama huruf ini?</p><div class="bigArab ar">${item[0]}</div>`,
        options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], ucap:item[0]});
  }
  else if(g==="harakat"){
    const [item,...rest] = pick(bank("HARAKAT"), n);
    cb({promptHTML:`<p class="prompt">Bagaimana cara membacanya?</p><div class="bigArab ar">${item[0]}</div>`,
        options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], ucap:item[0]});
  }
  else if(g==="bunyi"){
    const [item,...rest] = pick(bank("HURUF"), n);
    cb({promptHTML:`<p class="prompt">Yang mana huruf yang berbunyi…</p><div class="bigEmoji" style="font-size:40px;">🔊 “${item[1]}”</div>`,
        options: shuffle([item[0], ...rest.map(r=>r[0])]), correct:item[0], arabicBig:true, ucap:item[0]});
  }
  else if(g==="kembar"){
    const [huruf, nama, ciri, mirip] = pick(bank("KEMBAR"),1)[0];
    cb({promptHTML:`<p class="prompt">Huruf kembar! Yang mana huruf <b>${esc(nama)}</b>?</p><p class="hintline">Petunjuk: ${esc(ciri)}</p>`,
        options: shuffle([huruf, ...pick(mirip, n-1)]), correct:huruf, arabicBig:true});
  }
  else if(g==="sambung"){
    const bisa = bank("SAMBUNG").filter(s=>s[5]);
    const posisi = acak([[2,"awal"],[3,"tengah"],[4,"akhir"]]);
    const [item,...rest] = pick(bisa, n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Huruf apa ini saat berada di <b>${posisi[1]}</b> kata?</p><div class="bigArab ar">${item[posisi[0]]}</div>`,
          options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1],
          tip:`Ini huruf ${item[1]} — bentuk tunggalnya ${item[0]}`});
    }else{
      cb({promptHTML:`<p class="prompt">Mana bentuk huruf <b>${esc(item[1])}</b> ( ${item[0]} ) di <b>${posisi[1]}</b> kata?</p>`,
          options: shuffle([item[posisi[0]], ...rest.map(r=>r[posisi[0]])]), correct:item[posisi[0]], arabicBig:true});
    }
  }
  else if(g==="kata"){
    const [item,...rest] = pick(bank("KATA"), n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Apa bahasa Arabnya?</p><div class="bigEmoji">${item[0]}</div><p class="prompt">(${esc(item[3])})</p>`,
          options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], arabicButtons:true, ucap:item[1]});
    }else{
      cb({promptHTML:`<p class="prompt">Apa artinya?</p><div class="midArab ar">${item[1]}</div><p class="prompt"><i>${esc(item[2])}</i></p>`,
          options: shuffle([item[3], ...rest.map(r=>r[3])]), correct:item[3], ucap:item[1]});
    }
  }
  else if(g==="angka"){
    const [item,...rest] = pick(bank("ANGKA"), n);
    const emoji = acak(EMOJI_HITUNG);
    cb({promptHTML:`<p class="prompt">Hitung, lalu pilih angka Arabnya!</p><div class="bigEmoji">${emoji.repeat(item[0])}</div>`,
        options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], arabicButtons:true, ucap:item[1]});
  }
  else if(g==="raqm"){
    const [item,...rest] = pick(bank("RAQM"), n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Angka Arab ini bacanya berapa?</p><div class="bigArab">${item[1]}</div>`,
          options: shuffle([String(item[0]), ...rest.map(r=>String(r[0]))]), correct:String(item[0]),
          tip:`${item[1]} = ${item[0]} (${item[3]})`});
    }else{
      cb({promptHTML:`<p class="prompt">Mana angka Arab untuk <b>${item[0]}</b>?</p><div class="bigEmoji">🔢</div>`,
          options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], arabicBig:true,
          tip:`${item[0]} ditulis ${item[1]} dan dibaca ${item[3]}`});
    }
  }
  else if(g==="cakap"){
    const [situasi, ucapan, benar, ...salah] = pick(bank("CAKAP"),1)[0];
    const isEmoji = ucapan.length<=4 && !/[؀-ۿ]/.test(ucapan);
    cb({promptHTML:`<p class="prompt">${esc(situasi)}</p><div class="${isEmoji?'bigEmoji':'midArab ar'}">${ucapan}</div><p class="prompt">Apa jawaban/ucapan yang tepat?</p>`,
        options: shuffle([benar, ...pick(salah, n-1)]), correct:benar, arabicButtons:true, ucap:isEmoji?null:ucapan});
  }
  else if(g==="hadza"){
    const [kata, arti, jenis] = pick(bank("HADZA"),1)[0];
    const benar = jenis==="M" ? "هٰذَا" : "هٰذِهِ";
    cb({promptHTML:`<p class="prompt">Kata tunjuk mana yang tepat untuk…</p><div class="midArab ar">${kata}</div><p class="prompt">(${esc(arti)})</p>`,
        options: ["هٰذَا","هٰذِهِ"], correct:benar, arabicButtons:true, two:true, ucap:kata,
        tip: jenis==="F" ? "Ingat: kata berakhiran ة biasanya muannats → هٰذِهِ" : "Tanpa ة biasanya mudzakkar → هٰذَا"});
  }
  else if(g==="dhamir"){
    const [item,...rest] = pick(bank("DHAMIR"), n);
    cb({promptHTML:`<p class="prompt">Kata ganti mana yang tepat?</p><div class="bigEmoji" style="font-size:34px;letter-spacing:0;">${item[3]}</div>`,
        options: shuffle([item[0], ...rest.map(r=>r[0])]), correct:item[0], arabicButtons:true, ucap:item[0],
        tip:`${item[1]} = ${item[2]}`});
  }
  else if(g==="tempat"){
    const [benda, wadah, benar, kalimat] = pick(bank("TEMPAT_ADEGAN"),1)[0];
    const salah = pick(bank("TEMPAT").filter(t=>t[0]!==benar), n-1).map(t=>t[0]);
    const info = bank("TEMPAT").find(t=>t[0]===benar);
    cb({promptHTML:`<p class="prompt">Lihat gambarnya!</p>
        <div class="scene">${benda}<span class="arrow">↔</span>${wadah}</div>
        <p class="prompt">${esc(kalimat)}</p><p class="hintline">Mana kata Arab yang tepat?</p>`,
        options: shuffle([benar, ...salah]), correct:benar, arabicButtons:true, ucap:benar,
        tip:`${benar} (${info[1]}) = ${info[2]}`});
  }
  else if(g==="lawan"){
    const [a1,t1,ar1,a2,t2,ar2] = pick(bank("LAWAN"),1)[0];
    const balik = Math.random()<0.5;
    const soal  = balik ? [a2,t2,ar2] : [a1,t1,ar1];
    const jawab = balik ? [a1,t1,ar1] : [a2,t2,ar2];
    const salah = pick(bank("LAWAN").filter(l=>l[0]!==a1), n-1).map(l=> Math.random()<0.5 ? l[0] : l[3]);
    cb({promptHTML:`<p class="prompt">Apa LAWAN kata dari…</p><div class="midArab ar">${soal[0]}</div><p class="prompt"><i>${esc(soal[1])}</i> — ${esc(soal[2])}</p>`,
        options: shuffle([jawab[0], ...salah.filter(s=>s!==jawab[0])]), correct:jawab[0],
        arabicButtons:true, ucap:jawab[0], tip:`${jawab[0]} (${jawab[1]}) = ${jawab[2]}`});
  }
  else if(g==="hari"){
    const [item,...rest] = pick(bank("HARI"), n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Hari <b>${esc(item[2])}</b> bahasa Arabnya?</p><div class="bigEmoji">📅</div>`,
          options: shuffle([item[0], ...rest.map(r=>r[0])]), correct:item[0], arabicButtons:true, ucap:item[0],
          tip:`${item[0]} dibaca ${item[1]}`});
    }else{
      cb({promptHTML:`<p class="prompt">Ini hari apa?</p><div class="midArab ar">${item[0]}</div><p class="prompt"><i>${esc(item[1])}</i></p>`,
          options: shuffle([item[2], ...rest.map(r=>r[2])]), correct:item[2], ucap:item[0]});
    }
  }
  else if(g==="fiil")   soalKosakata("FIIL",   "Dia sedang apa? Pilih kata kerjanya!", n, cb);
  else if(g==="mihnah") soalKosakata("MIHNAH", "Apa nama pekerjaan ini dalam bahasa Arab?", n, cb);
  else if(g==="cuaca")  soalKosakata("CUACA",  "Bagaimana cuacanya? Pilih kata Arabnya!", n, cb);
  else if(g==="waktu")  soalKosakata("WAKTU",  "Waktu apa ini? Pilih kata Arabnya!", n, cb);
  else if(g==="alam")   soalKosakata("ALAM",   "Apa bahasa Arab benda alam ini?", n, cb);
  else if(g==="syamsi"){
    const [kata, translit, arti, jenis, hrf] = pick(bank("SYAMSI"),1)[0];
    const qamar = "🌙 Qamariyah — lam dibaca jelas";
    const syams = "☀️ Syamsiyah — lam dilebur";
    cb({promptHTML:`<p class="prompt">Bagaimana membaca <span class="ar">ال</span> pada kata ini?</p>
        <div class="midArab ar">${kata}</div><p class="prompt">(${esc(arti)})</p>`,
        options:[qamar, syams], correct: jenis==="Q" ? qamar : syams, one:true, ucap:kata,
        tip: jenis==="Q"
          ? `Dibaca ${translit} — sesudah ال ada huruf ${hrf} (qamariyah), jadi lam tetap terdengar "al-"`
          : `Dibaca ${translit} — sesudah ال ada huruf ${hrf} (syamsiyah), lam hilang dan huruf itu bertasydid`});
  }
  else if(g==="jamak"){
    const [item,...rest] = pick(bank("JAMAK"), n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Mana bentuk JAMAK (banyak) dari kata ini?</p><div class="midArab ar">${item[0]}</div>
          <p class="prompt"><i>${esc(item[1])}</i> — satu ${esc(item[4])}</p>`,
          options: shuffle([item[2], ...rest.map(r=>r[2])]), correct:item[2], arabicButtons:true, ucap:item[2],
          tip:`${item[0]} (satu) → ${item[2]} (banyak ${item[4]})`});
    }else{
      cb({promptHTML:`<p class="prompt">Kata ini bentuk BANYAK. Mana bentuk satunya?</p><div class="midArab ar">${item[2]}</div>
          <p class="prompt"><i>${esc(item[3])}</i> — banyak ${esc(item[4])}</p>`,
          options: shuffle([item[0], ...rest.map(r=>r[0])]), correct:item[0], arabicButtons:true, ucap:item[0],
          tip:`${item[2]} (banyak) → ${item[0]} (satu ${item[4]})`});
    }
  }
  else if(g==="tanya"){
    const [situasi, kalimat, benar, ket] = pick(bank("TANYA_SOAL"),1)[0];
    const salah = pick(bank("TANYA").filter(t=>t[0]!==benar), n-1).map(t=>t[0]);
    const info  = bank("TANYA").find(t=>t[0]===benar);
    cb({promptHTML:`<p class="prompt">${esc(situasi)}</p><div class="midArab ar">${kalimat}</div>
        <p class="hintline">Kata tanya mana yang tepat mengisi titik-titik?</p>`,
        options: shuffle([benar, ...salah]), correct:benar, arabicButtons:true,
        ucap: kalimat.replace("___", benar),
        tip:`${benar} (${info[1]}) = ${info[2]} · ${ket}`});
  }
  else if(g==="amr"){
    const [item,...rest] = pick(bank("AMR"), n);
    if(Math.random()<0.5){
      cb({promptHTML:`<p class="prompt">Gurumu berkata:</p><div class="midArab ar">${item[1]}</div>
          <p class="prompt"><i>${esc(item[2])}</i></p><p class="hintline">Apa yang harus kamu lakukan?</p>`,
          options: shuffle([item[3], ...rest.map(r=>r[3])]), correct:item[3], ucap:item[1]});
    }else{
      cb({promptHTML:`<p class="prompt">Guru ingin kamu <b>${esc(item[3])}</b>. Apa ucapan beliau?</p><div class="bigEmoji">${item[0]}</div>`,
          options: shuffle([item[1], ...rest.map(r=>r[1])]), correct:item[1], arabicButtons:true, ucap:item[1],
          tip:`${item[1]} dibaca ${item[2]} = ${item[3]}`});
    }
  }
  else if(g==="doa"){
    const [situasi, arab, translit, arti] = pick(bank("DOA"),1)[0];
    const salah = pick(bank("DOA").filter(d=>d[1]!==arab), n-1).map(d=>d[1]);
    cb({promptHTML:`<p class="prompt">Apa yang kamu ucapkan…</p><div class="bigEmoji" style="font-size:30px;letter-spacing:0;">🤲 ${esc(situasi)}</div>`,
        options: shuffle([arab, ...salah]), correct:arab, arabicSmall:true, one:true, ucap:arab,
        tip:`${translit} — “${arti}”`});
  }
}

/* ============================================================
   RENDER PILIHAN GANDA
============================================================ */
function renderMC(q, onAnswer, fastMode=false){
  if(!q) return;
  const card = $("qcard");
  card.style.animation="none"; void card.offsetWidth; card.style.animation="";
  const btnClass = q.arabicBig ? "ar arBig" : q.arabicSmall ? "ar arSmall" : (q.arabicButtons ? "ar" : "");
  const layout = q.one ? "one" : q.two ? "two" : "";
  const tombolUcap = (q.ucap && "speechSynthesis" in window)
    ? `<button class="speak" id="speakBtn">🔊 Dengarkan</button>` : "";
  card.innerHTML = q.promptHTML + tombolUcap +
    `<div class="answers ${layout}">` +
    q.options.map((o,i)=>`<button class="ans a${i%4} ${btnClass}" data-i="${i}"><span class="keyhint">${i+1}</span>${o}</button>`).join("") +
    `</div><div class="feedback" id="fb"></div>`;

  const sb = $("speakBtn");
  if(sb) sb.onclick = ()=>{ speak(q.ucap); bonusMisi(catatHitung("dengar", 1)); };

  const jawab = (btn)=>{
    if(state.locked) return;
    state.locked = true;
    const val = q.options[Number(btn.dataset.i)];
    const ok = val===q.correct;
    if(ok){
      btn.classList.add("correct");
      $("fb").textContent = "Hebat! ✔ مُمْتَاز!";
      $("fb").className = "feedback good";
      state.correct++; dingBenar(); catatBenar(); if(!fastMode) confetti();
    }else{
      btn.classList.add("wrong");
      if(state.lives!==undefined) state.lives--;
      dingSalah(); catatSalah();
      card.querySelectorAll(".ans").forEach((b,i)=>{ if(q.options[i]===q.correct) b.classList.add("correct"); });
      $("fb").textContent = q.tip ? q.tip : "Jawabannya: "+q.correct;
      $("fb").className = "feedback bad";
    }
    if(state.mode==="quiz") updateHUD();
    setTimeout(()=>{ state.locked=false; onAnswer(ok); }, fastMode ? (ok?450:950) : (ok?950:1750));
  };

  card.querySelectorAll(".ans").forEach(btn=> btn.onclick = ()=>jawab(btn));

  /* pintasan papan ketik 1–5 */
  state.keyHandler = e=>{
    const n = Number(e.key);
    if(n>=1 && n<=q.options.length){
      const btn = card.querySelector(`.ans[data-i="${n-1}"]`);
      if(btn) jawab(btn);
    }
  };
}

/* ============================================================
   GERBANG KALIMAT — susun kata
============================================================ */
function qKalimat(){
  const [words, arti] = pick(bank("KALIMAT"),1)[0];
  susunGame({
    potongan: words,
    judul: "Susun kata menjadi kalimat:",
    petunjuk: `Arti: <b>"${esc(arti)}"</b> &nbsp;•&nbsp; ketuk kata untuk memindah`,
    kelas: "",
    gabung: " "
  });
}

/* ============================================================
   GERBANG EJA — susun huruf jadi kata
============================================================ */
function qEja(){
  const [emoji, kata, translit, arti] = pick(bank("EJA"),1)[0];
  susunGame({
    potongan: Array.from(kata),
    judul: `Susun huruf menjadi kata: <span style="font-size:34px">${emoji}</span>`,
    petunjuk: `Kata: <b>${esc(arti)}</b> — dibaca <i>${esc(translit)}</i> &nbsp;•&nbsp; ingat, menulis dari KANAN`,
    kelas: "letter",
    gabung: ""
  });
}

/* mesin bersama untuk kalimat & eja */
function susunGame({potongan, judul, petunjuk, kelas, gabung}){
  const scrambled = shuffle([...potongan]);
  if(scrambled.join("|")===potongan.join("|")) scrambled.reverse();
  let placed = [];               /* menyimpan indeks dari scrambled */
  const q = $("qcard");

  function render(){
    const kosong = '<span style="color:#c3b78f;font-size:14px;direction:ltr;">— letakkan di sini —</span>';
    q.innerHTML = `
      <p class="prompt">${judul}</p>
      <p class="hintline">${petunjuk}</p>
      <div class="slotline" id="slots">${
        placed.map((idx,pos)=>`<button class="chip placed ${kelas}" data-pos="${pos}">${scrambled[idx]}</button>`).join("") || kosong
      }</div>
      <div class="chips" id="pool">${
        scrambled.map((w,i)=> placed.includes(i) ? "" : `<button class="chip ${kelas}" data-i="${i}">${w}</button>`).join("")
      }</div>
      <button class="checkbtn" id="check">✔ Periksa</button>
      <div class="feedback" id="fb"></div>`;

    q.querySelectorAll("#pool .chip").forEach(b=>{
      b.onclick = ()=>{ if(state.locked) return; placed.push(Number(b.dataset.i)); tick(); render(); };
    });
    q.querySelectorAll("#slots .chip").forEach(b=>{
      b.onclick = ()=>{ if(state.locked) return; placed.splice(Number(b.dataset.pos),1); render(); };
    });

    $("check").onclick = ()=>{
      if(state.locked) return;
      if(placed.length!==potongan.length){
        $("fb").textContent = "Letakkan semuanya dulu ya!";
        $("fb").className = "feedback bad";
        return;
      }
      state.locked = true;
      const susunan = placed.map(i=>scrambled[i]);
      const ok = susunan.join("|")===potongan.join("|");
      if(ok){
        $("fb").innerHTML = "Hebat! ✔ <span class='ar'>"+potongan.join(gabung)+"</span>";
        $("fb").className = "feedback good";
        state.correct++; dingBenar(); catatBenar(); confetti();
      }else{
        state.lives--;
        $("fb").innerHTML = "Belum tepat. Yang benar: <span class='ar'>"+potongan.join(gabung)+"</span>";
        $("fb").className = "feedback bad";
        dingSalah(); catatSalah();
      }
      updateHUD();
      setTimeout(()=>{ state.qIndex++; nextQuestion(); }, ok?1050:2050);
    };
  }
  render();
}

/* ============================================================
   GERBANG MEMORI
============================================================ */
function startMemori(){
  const pasang = level==="musafir" ? 4 : level==="pengembara" ? 6 : 8;
  state = {game:"memori", mode:"memori", wrong:0, matched:0, open:[], locked:false, pasang};
  show("game");
  setProgress(0);
  $("lives").textContent = "❌ 0";
  const pairs = pick(bank("KATA"), pasang);
  const cards = shuffle(pairs.flatMap((p,i)=>[
    {id:i, html:`<span style="font-size:30px">${p[0]}</span>`},
    {id:i, html:`<span class="ar">${p[1]}</span>`}
  ]));
  const q = $("qcard");
  q.innerHTML = `<p class="prompt">Buka dua kartu, cocokkan gambar dengan kata Arabnya!</p>
    <div class="mgrid">` +
    cards.map(c=>`<button class="mcard" data-id="${c.id}">
        <span class="backmark">۞</span><span class="face">${c.html}</span></button>`).join("") +
    `</div><div class="feedback" id="fb"></div>`;
  q.querySelectorAll(".mcard").forEach(btn=>{
    btn.onclick = ()=>{
      if(state.locked || btn.classList.contains("open") || btn.classList.contains("done")) return;
      btn.classList.add("open"); tick();
      state.open.push(btn);
      if(state.open.length===2){
        state.locked = true;
        const [a,b] = state.open;
        if(a.dataset.id===b.dataset.id){
          setTimeout(()=>{
            a.classList.remove("open"); b.classList.remove("open");
            a.classList.add("done");    b.classList.add("done");
            state.matched++; state.open=[]; state.locked=false;
            setProgress(state.matched/state.pasang*100); dingBenar();
            if(state.matched===state.pasang) setTimeout(endMemori, 600);
          }, 350);
        }else{
          state.wrong++;
          $("lives").textContent = "❌ " + state.wrong;
          setTimeout(()=>{
            a.classList.remove("open"); b.classList.remove("open");
            state.open=[]; state.locked=false; dingSalah();
          }, 750);
        }
      }
    };
  });
}
function endMemori(){
  const w = state.wrong;
  const stars = w<=3 ? 3 : w<=6 ? 2 : 1;
  finishRound(stars, `Semua pasangan ketemu! Salah buka: ${w} kali`, `${state.pasang} pasang`);
}

/* ============================================================
   GERBANG KILAT
============================================================ */
function startKilat(){
  state = {game:"kilat", mode:"kilat", correct:0, jumlah:0, sisa:KILAT_DETIK, locked:false};
  terakhirJawab = null;
  show("game");
  setProgress(100);
  $("lives").textContent = "⏱ " + KILAT_DETIK;
  timers.push(setInterval(()=>{
    state.sisa--;
    $("lives").textContent = "⏱ " + state.sisa;
    setProgress(state.sisa/KILAT_DETIK*100);
    if(state.sisa<=5 && state.sisa>0) tick();
    if(state.sisa<=0){ stopTimers(); endKilat(); }
  },1000));
  kilatNext();
}
function kilatNext(){
  if(state.sisa<=0) return;
  soalBervariasi(acak(POOL_KILAT), q => renderMC(q, ()=>{ state.jumlah++; kilatNext(); }, true));
}
function endKilat(){
  const c = state.correct;
  const stars = c>=12 ? 3 : c>=8 ? 2 : c>=5 ? 1 : 0;
  finishRound(stars, `⚡ ${c} jawaban benar dalam ${KILAT_DETIK} detik!`, `${c} dari ${state.jumlah}`);
}

/* ============================================================
   GERBANG BALON — letuskan balon huruf yang tepat
============================================================ */
const WARNA_BALON = ["#E14D4D","#3D74C9","#3B9E56","#7D55D4","#E8862B","#149E96","#D6408B","#4A54C4"];

function startBalon(){
  state = {game:"balon", mode:"balon", correct:0, wrong:0, sisa:BALON_DETIK, target:null};
  show("game");
  setProgress(100);
  $("lives").textContent = "⏱ " + BALON_DETIK;
  $("qcard").innerHTML = `
    <p class="prompt">Letuskan balon yang benar!</p>
    <div class="target" id="balonTarget">…</div>
    <div class="balloonfield" id="field"></div>
    <div class="feedback" id="fb"></div>`;
  targetBaru();

  timers.push(setInterval(()=>{
    state.sisa--;
    $("lives").textContent = "⏱ " + state.sisa;
    setProgress(state.sisa/BALON_DETIK*100);
    if(state.sisa<=5 && state.sisa>0) tick();
    if(state.sisa<=0){ stopTimers(); endBalon(); }
  },1000));

  timers.push(setInterval(spawnBalon, 820));
  spawnBalon(); spawnBalon();
}
function targetBaru(){
  state.target = acak(bank("HURUF"));
  $("balonTarget").innerHTML = `Cari huruf: <b>${esc(state.target[1])}</b>`;
}
function spawnBalon(){
  if(state.sisa<=0) return;
  const field = $("field");
  if(!field) return;
  /* 45% kemunculan target agar anak selalu punya peluang */
  const huruf = Math.random()<0.45 ? state.target : acak(bank("HURUF"));
  const b = document.createElement("button");
  b.className = "balloon";
  b.style.left = (5 + Math.random()*76) + "%";
  b.style.animationDuration = (5.5 + Math.random()*2.5) + "s";
  b.innerHTML = `<div class="bulb" style="background:${acak(WARNA_BALON)}">${huruf[0]}</div><div class="string"></div>`;
  b.onclick = ()=>{
    if(state.sisa<=0 || b.classList.contains("pop")) return;
    if(huruf[0]===state.target[0]){
      b.classList.add("pop"); pop();
      state.correct++;
      $("fb").textContent = "Tepat! ✔"; $("fb").className = "feedback good";
      targetBaru();
    }else{
      b.classList.add("miss"); dingSalah();
      state.wrong++;
      $("fb").textContent = `Itu huruf ${huruf[1]}, bukan ${state.target[1]}`;
      $("fb").className = "feedback bad";
    }
    setTimeout(()=>b.remove(), 300);
  };
  field.appendChild(b);
  setTimeout(()=>b.remove(), 8500);
}
function endBalon(){
  const c = state.correct;
  const stars = c>=10 ? 3 : c>=7 ? 2 : c>=4 ? 1 : 0;
  finishRound(stars, `🎈 ${c} balon tepat, ${state.wrong} meleset`, `${c} balon`);
}

/* ============================================================
   AKHIR RONDE
============================================================ */
function endQuiz(){
  stopTimers();
  const c = state.correct, total = totalSoal();
  const stars = c>=total*0.85 ? 3 : c>=total*0.6 ? 2 : c>=total*0.35 ? 1 : 0;
  finishRound(stars, `Benar ${c} dari ${total} soal`, `${c} / ${total}`);
}
function finishRound(stars, subText, benar){
  stopTimers();
  const terbukaSebelum = semuaGerbang().filter(g=>gerbangTerbuka(g.id, totalStars)).length;
  totalStars += stars;
  if((best[state.game]||0) < stars) best[state.game] = stars;

  /* ---- misi harian, hari beruntun, stiker ---- */
  const stikerSebelum = stikerTerbuka(totalStars - stars);
  const naikRuntun = catatHariMain();
  const grup = (GERBANG.find(g=>g.items.some(i=>i.id===state.game)) || {}).id;
  if(grup && !meta.kategoriHariIni.includes(grup)) meta.kategoriHariIni.push(grup);
  const gerbangBaru = !meta.dimainkan.includes(state.game);
  if(gerbangBaru) meta.dimainkan.push(state.game);

  let bonus = 0;
  bonus += catatHitung("kategori", meta.kategoriHariIni.length, "maks");
  bonus += catatHitung("ronde", 1);
  bonus += catatHitung("bintang", stars);
  if(gerbangBaru) bonus += catatHitung("gerbangBaru", 1);
  if(stars >= 3) bonus += catatHitung("sempurna", 1);
  totalStars += bonus;

  catatPapan(stars + bonus, benar);
  simpanProgres();
  renderMenu();

  /* ---- kabar gembira sesudah ronde ---- */
  const terbukaSesudah = semuaGerbang().filter(g=>gerbangTerbuka(g.id, totalStars)).length;
  if(terbukaSesudah > terbukaSebelum)
    setTimeout(()=>toast(`${terbukaSesudah-terbukaSebelum} gerbang baru terbuka! 🔓`, {ikon:"🔓"}), 700);
  if(stikerTerbuka(totalStars) > stikerSebelum)
    setTimeout(()=>toast(`Stiker baru: ${STIKER[stikerTerbuka(totalStars)-1]} masuk album!`, {ikon:"🎨"}), 1100);
  if(bonus) setTimeout(()=>toast(`Misi harian selesai! +${bonus} bintang 🎯`, {ikon:"🎯"}), 1500);
  if(naikRuntun && meta.runtun > 1)
    setTimeout(()=>toast(`${meta.runtun} hari beruntun! Pertahankan ya 🔥`, {ikon:"🔥"}), 1900);

  $("rGenie").textContent = stars>=2 ? "🧞" : "🐪";
  $("rStars").innerHTML = stars ? "⭐".repeat(stars).split("").map(s=>`<span>${s}</span>`).join("") : "💪";
  $("rMsg").innerHTML = stars===3 ? 'LUAR BIASA! <span class="ar">مُمْتَاز!</span>'
                      : stars===2 ? "Hebat! Sedikit lagi sempurna!"
                      : stars===1 ? "Bagus! Terus berlatih ya!"
                      : "Jangan menyerah, coba lagi!";
  $("rSub").textContent = subText;
  $("rStats").innerHTML = [
    ["Total bintang", "⭐ " + totalStars],
    ["Pangkat", pangkatKini(totalStars).emoji + " " + pangkatKini(totalStars).nama],
    ["Gerbang", namaGerbang(state.game)],
    ["Fokus", namaFokus()],
    ["Room", room || "—"],
    ["Level", levelInfo().emoji + " " + levelInfo().nama],
    ["Benar", benar],
    ["Perolehan ronde", "+" + stars + " bintang"],
    ["Bonus misi", bonus ? "+" + bonus + " bintang" : "—"],
    ["Hari beruntun", "🔥 " + meta.runtun],
    ["Stiker", stikerTerbuka(totalStars) + " / " + STIKER.length],
    ["Rating", stars + " / 3"]
  ].map(([k,v])=>`<div class="stat"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div></div>`).join("");

  $("starbank").classList.remove("bump"); void $("starbank").offsetWidth;
  if(stars>0){ $("starbank").classList.add("bump"); toast(`+${stars} bintang untukmu, ${pemain}!`, {ikon:"⭐"}); }
  if(stars>=2){ confetti(); dingSelesai(); }
  show("result");
  setStars(totalStars, stars>0);
  /* saat anak sedang senang: tawarkan pasang aplikasi (sekali-sekali saja) */
  pemicuPasang(1600);
}

/* ============================================================
   PEMAIN
============================================================ */
function mulaiSebagai(nama){
  pemain = nama;
  simpanProgres();
  renderMenu();
  show("menu");
  keLangkah(1);            /* pemain baru: tuntun dari langkah awal */
}
/* kembali dari game/hasil: langsung ke daftar gerbang, jangan ulangi wizard */
function keMenu(){
  stopTimers();
  show("menu");
  keLangkah(LANGKAH_AKHIR);
}
function layarNama(){
  $("nameInput").value = pemain || "";
  $("nameFb").textContent = "";
  show("nameScreen");
  setTimeout(()=>$("nameInput").focus(), 100);
}

/* ============================================================
   EVENT
============================================================ */
muatProgres();
segarkanKunci(terapkanBrand());
/* white-label diperbarui di tab lain (mis. admin.html) → ikut berubah tanpa reload */
window.addEventListener("storage", e=>{
  if(e.key !== BRAND_KEY) return;
  segarkanKunci(terapkanBrand());
  renderMenu();
});

/* undangan lewat link: ?room=KODE */
const undangan = new URLSearchParams(location.search).get("room");
if(undangan && /^[A-Z0-9]{4,8}$/i.test(undangan)) room = undangan.toUpperCase();

renderMenu();
$("starCount").textContent = totalStars;
$("soundBtn").textContent = soundOn ? "🔊" : "🔇";
if(pemain){ show("menu"); keLangkah(LANGKAH_AKHIR); }   /* pemain lama: langsung ke gerbang */
else layarNama();

$("nameGo").onclick = ()=>{
  const nama = $("nameInput").value.trim();
  if(nama.length < 2){
    $("nameFb").textContent = "Tulis namamu dulu ya (minimal 2 huruf) 🙂";
    $("nameFb").className = "feedback bad";
    return;
  }
  mulaiSebagai(nama);
};
$("nameInput").onkeydown = e=>{ if(e.key==="Enter") $("nameGo").click(); };
$("gantiBtn").onclick = layarNama;

$("buatRoom").onclick = ()=>{
  room = kodeBaru(); simpanProgres(); renderRoom();
  pesanRoom("Room " + room + " dibuat! Bagikan kodenya ke temanmu 🎉");
};
$("salinKode").onclick = ()=> salin(room, "Kode room disalin ✔");
$("salinLink").onclick = ()=> salin(linkRoom(), "Link undangan disalin ✔");
$("bagikan").onclick = async ()=>{
  const data = {title:"Petualangan Bahasa Arab", text:`Ayo main bareng! Kode room: ${room}`, url:linkRoom()};
  if(navigator.share){
    try{ await navigator.share(data); }catch(e){ /* dibatalkan pengguna */ }
  }else{
    salin(linkRoom(), "Browser ini tak bisa berbagi langsung — link disalin ✔");
  }
};
$("keluarRoom").onclick = ()=>{ room=""; simpanProgres(); renderRoom(); pesanRoom("Kamu keluar dari room."); };
$("masukRoom").onclick = ()=>{
  const kode = $("joinInput").value.trim().toUpperCase();
  if(!/^[A-Z0-9]{4,8}$/.test(kode)) return pesanRoom("Kode room tidak sesuai. Contoh: FW27BF", false);
  room = kode; simpanProgres(); renderRoom(); $("joinInput").value="";
  pesanRoom("Berhasil masuk room " + kode + " 🎉");
};
$("joinInput").onkeydown = e=>{ if(e.key==="Enter") $("masukRoom").click(); };
$("refreshPapan").onclick = ()=>{ renderPapan(); tick(); };

$("tabPeta").onclick   = ()=>{ meta.tampilan="peta";   simpanProgres(); renderGerbang(); tick(); };
$("tabDaftar").onclick = ()=>{ meta.tampilan="daftar"; simpanProgres(); renderGerbang(); tick(); };

$("backBtn").onclick  = keMenu;
$("menuBtn").onclick  = keMenu;
$("prevStep").onclick = ()=>{ keLangkah(langkah-1); tick(); };
$("nextStep").onclick = ()=>{ keLangkah(langkah+1); tick(); };
$("againBtn").onclick = ()=> startGame(state.game);
$("resetBtn").onclick = resetProgres;
$("soundBtn").onclick = ()=>{
  soundOn = !soundOn;
  $("soundBtn").textContent = soundOn ? "🔊" : "🔇";
  if(!soundOn && "speechSynthesis" in window) speechSynthesis.cancel();
  simpanProgres();
};

document.addEventListener("keydown", e=>{
  if($("game").classList.contains("hidden")) return;
  if(e.key==="Escape"){ keMenu(); return; }
  if(state.keyHandler) state.keyHandler(e);
});

/* panel aplikasi + popup pasang: PWA, siap offline, lindungi progres */
siapkanPWA();
segarkanPasang();

/* header mengecil & memberi latar saat halaman digulir */
const hdr = document.querySelector("header");
const onScroll = ()=> hdr.classList.toggle("stuck", window.scrollY > 12);
window.addEventListener("scroll", onScroll, {passive:true});
onScroll();
