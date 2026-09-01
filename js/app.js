/* ============================================================
   MESIN UTAMA — The Great Hero Muslim
============================================================ */
const SIMPANAN = "great-hero-muslim-v1";
let totalStars = 0;
let pemain = "";
let soundOn = true;
let currentHero = null;
let currentQuiz = 0;
let quizScore = 0;

const $ = id => document.getElementById(id);

// --- Audio ---
// Menggunakan sintesis suara sederhana (Beep) sebagai fallback jika file audio tidak ada
const AudioContext = window.AudioContext || window.webkitAudioContext;
const actx = new AudioContext();
function playTone(freq, type, duration, vol=0.1) {
  if(!soundOn) return;
  const osc = actx.createOscillator();
  const gain = actx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, actx.currentTime);
  gain.gain.setValueAtTime(vol, actx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
  osc.connect(gain);
  gain.connect(actx.destination);
  osc.start();
  osc.stop(actx.currentTime + duration);
}
const sfx = {
  click: () => playTone(600, 'sine', 0.1),
  benar: () => playTone(800, 'sine', 0.3, 0.2),
  salah: () => playTone(200, 'sawtooth', 0.3, 0.2),
  tuntas: () => { playTone(500, 'sine', 0.2); setTimeout(()=>playTone(800, 'sine', 0.4), 200); }
};

// --- Penyimpanan ---
function simpan(){
  localStorage.setItem(SIMPANAN, JSON.stringify({
    pemain, totalStars, soundOn, meta
  }));
}
function muat(){
  try{
    const d = JSON.parse(localStorage.getItem(SIMPANAN) || "{}");
    pemain = d.pemain || "";
    totalStars = d.totalStars || 0;
    soundOn = d.soundOn !== false;
    muatMeta(d); // dari sistem.js (menghandle migrasi voyage.completedHeroes)
  }catch(e){ muatMeta({}); }
}

// --- UI Utama ---
function perbaruiTopBar(){
  $("starCount").innerText = totalStars;
  $("soundBtn").innerText = soundOn ? "🔊" : "🔇";
}

function init(){
  if(typeof terapkanBrand === 'function') terapkanBrand();
  muat();
  catatHariMain();
  perbaruiTopBar();
  
  if(!pemain){
    $("nameScreen").classList.remove("hidden");
  } else {
    tampilMenu();
  }
}

$("nameGo").onclick = () => {
  const nm = $("nameInput").value.trim();
  if(!nm) return toast("Tulis namamu dulu ya!");
  pemain = nm;
  simpan();
  sfx.click();
  $("nameScreen").classList.add("hidden");
  tampilMenu();
};

$("soundBtn").onclick = () => {
  soundOn = !soundOn;
  perbaruiTopBar();
  simpan();
};

$("resetBtn").onclick = () => {
  if(confirm("Yakin ingin menghapus semua progres?")){
    localStorage.removeItem(SIMPANAN);
    location.reload();
  }
};

$("collectionBtn").onclick = () => {
  sfx.click();
  $("menu").classList.add("hidden");
  $("moduleView").classList.add("hidden");
  $("quizView").classList.add("hidden");
  $("result").classList.add("hidden");
  $("collectionView").classList.remove("hidden");
  renderHeroCollection();
};

$("backCollectionBtn").onclick = () => {
  sfx.click();
  tampilMenu();
};


// --- Render Menu (Journey Home) ---
function tampilMenu(){
  $("menu").classList.remove("hidden");
  $("moduleView").classList.add("hidden");
  $("quizView").classList.add("hidden");
  $("result").classList.add("hidden");
  $("collectionView").classList.add("hidden");

  // Update Pangkat (tetap diupdate di background)
  const pkt = pangkatKini(totalStars);
  const nextPkt = pangkatBerikut(totalStars);
  if($("pangkatAvatar")) $("pangkatAvatar").innerText = pkt.ikon;
  if($("pangkatNama")) $("pangkatNama").innerText = pkt.nama;
  if(nextPkt && $("pangkatSisa")){
    $("pangkatSisa").innerText = `Kurang ${nextPkt.min - totalStars} ⭐ ke ${nextPkt.nama}`;
    $("pangkatBar").style.width = Math.min(100, (totalStars / nextPkt.min) * 100) + "%";
  } else if($("pangkatSisa")) {
    $("pangkatSisa").innerText = "Pangkat Tertinggi!";
    $("pangkatBar").style.width = "100%";
  }

  // Render Voyage Home Card (Tahap 2)
  renderVoyageHome();

  // Render Journey Map Milestones (Tahap 2)
  renderJourneyMap();

  // Render Hero Missions
  $("misiRuntun").innerText = `🔥 ${meta.runtun} hari beruntun`;
  renderHeroMissions();

  // Render Misi Harian (Generic)
  if($("misiRuntunDaily")) $("misiRuntunDaily").innerText = `🔥 ${meta.runtun} hari beruntun`;
  const mList = $("misiList");
  if(mList) {
    mList.innerHTML = "";
    misiHariIni().forEach(m => {
      const val = Math.min(m.target, meta.hitung[m.kunci] || 0);
      const done = val >= m.target;
      mList.innerHTML += `
        <div style="background:#fff; padding:10px; border-radius:12px; margin-bottom:8px; border:2px solid ${done ? '#4CAF50' : '#ddd'}; display:flex; align-items:center; gap:12px;">
          <div style="font-size:24px;">${done ? '✅' : m.ikon}</div>
          <div style="flex:1;">
            <b style="display:block; color:#333; font-size:15px;">${m.judul}</b>
            <small style="color:#666; font-size:12px;">${m.desc}</small>
            <div style="background:#eee; height:8px; border-radius:4px; margin-top:4px;">
              <div style="background:${done ? '#4CAF50' : '#F5C542'}; height:100%; border-radius:4px; width:${(val/m.target)*100}%"></div>
            </div>
          </div>
          <div style="font-weight:bold; color:#666;">${val}/${m.target}</div>
        </div>
      `;
    });
  }

  // Render Hero Collection
  renderHeroCollection();

}

// --- Render Hero Missions (Tahap 4) ---
function getDailyHeroMission() {
  const unlockedHeroIds = meta.voyage.completedHeroes || [];
  if (unlockedHeroIds.length === 0) return null;
  
  if(typeof gantiHariBila === 'function') gantiHariBila();
  const rnd = acakTerpola(meta.tanggal);
  const sortedIds = [...unlockedHeroIds].sort();
  const heroIndex = Math.floor(rnd() * sortedIds.length);
  const hero = HEROES.find(h => h.id === sortedIds[heroIndex]);
  if (!hero) return null;
  
  const praktikIndex = Math.floor(rnd() * hero.praktik.length);
  const praktik = hero.praktik[praktikIndex];
  
  return { hero, praktik };
}

function renderHeroMissions() {
  const list = $("heroMissionList");
  const panel = $("heroMissionPanel");
  if (!list || !panel) return;
  list.innerHTML = "";

  const dailyMission = getDailyHeroMission();
  if (!dailyMission) {
    panel.style.display = "none";
    return;
  }
  
  panel.style.display = "block";
  const { hero, praktik } = dailyMission;

  const todayStr = new Date().toLocaleDateString("id-ID");
  const isCompleted = (meta.voyage.journeyLogs || []).some(log => log.date === todayStr && log.heroId === hero.id);

  const borderColor = isCompleted ? "#4CAF50" : "#F5C542";
  const bgBadge = isCompleted ? "#4CAF50" : "#F5C542";
  const textBadge = isCompleted ? "COMPLETED" : "AVAILABLE";
  
  const html = `
    <div style="background:#fff; border-radius:12px; margin-bottom:12px; border:2px solid ${borderColor}; padding:16px; position:relative; overflow:hidden;">
      <div style="position:absolute; top:0; right:0; background:${bgBadge}; color:${isCompleted ? '#fff' : '#333'}; font-size:10px; font-weight:bold; padding:4px 12px; border-bottom-left-radius:12px;">
        ${textBadge}
      </div>
      
      <div style="font-size:11px; color:#666; margin-bottom:4px; text-transform:uppercase; letter-spacing:1px;">
        🧠 INSPIRED BY
      </div>
      <div style="font-weight:bold; font-size:16px; color:#2E7D32; margin-bottom:2px;">
        ${hero.nama}
      </div>
      <div style="font-size:13px; font-weight:bold; color:#333; margin-bottom:12px;">
        ${hero.skill_ikon || '🧠'} ${hero.skill || 'Pengetahuan'}
      </div>
      
      <div style="font-size:12px; color:#555; margin-bottom:4px;">Your mission today:</div>
      <div style="font-size:14px; color:#111; font-style:italic; background:#f9f9f9; padding:10px; border-left:3px solid ${borderColor}; border-radius:4px; margin-bottom:12px;">
        "${praktik}"
      </div>
      
      ${!isCompleted ? `
        <button onclick="mulaiMisi('${hero.id}')" style="background:#F5C542; color:#333; font-weight:bold; border:none; padding:10px; width:100%; border-radius:8px; cursor:pointer;">
          🚀 MULAI & SELESAIKAN MISI
        </button>
      ` : `
        <div style="text-align:center; color:#4CAF50; font-weight:bold; font-size:13px;">
          🎉 +10 XP Diterima
        </div>
      `}
    </div>
  `;
  
  list.innerHTML = html;
}

let activeMissionHero = null;

function mulaiMisi(heroId) {
  sfx.click();
  const dailyMission = getDailyHeroMission();
  if(!dailyMission || dailyMission.hero.id !== heroId) return;
  
  activeMissionHero = dailyMission.hero;
  
  $("jlMissionText").innerText = dailyMission.praktik;
  $("jlReflection").value = "";
  $("journeyLogModal").classList.remove("hidden");
}

$("jlCancelBtn").onclick = () => {
  sfx.click();
  $("journeyLogModal").classList.add("hidden");
  activeMissionHero = null;
};

$("jlSaveBtn").onclick = () => {
  const text = $("jlReflection").value.trim();
  if(!text) {
    alert("Tuliskan refleksimu terlebih dahulu ya!");
    return;
  }
  
  sfx.tuntas();
  $("journeyLogModal").classList.add("hidden");
  
  // Simpan state
  if(!meta.voyage.completedMissions) meta.voyage.completedMissions = [];
  if(!meta.voyage.journeyLogs) meta.voyage.journeyLogs = [];
  
  meta.voyage.completedMissions.push(activeMissionHero.id);
  meta.voyage.journeyLogs.push({
    date: new Date().toLocaleDateString("id-ID"),
    heroId: activeMissionHero.id,
    text: text
  });
  
  totalStars += 10;
  meta.voyage.heroXP = (meta.voyage.heroXP || 0) + 5;
  catatHariMain(); // Misi harian menambah runtun
  simpan();
  perbaruiTopBar();
  
  $("mcSkillText").innerText = `🧠 ${activeMissionHero.skill} +1`;
  $("missionCompleteModal").classList.remove("hidden");
  
  if(catatHariMain()){
    setTimeout(() => showStreakModal(meta.runtun), 1500); // Tampilkan setelah 1.5 detik
  }
};

$("mcNextBtn").onclick = () => {
  sfx.click();
  $("missionCompleteModal").classList.add("hidden");
  tampilMenu();
};

// --- Render Hero Collection (Tahap 3) ---
function renderHeroCollection(){
  const hList = $("heroList");
  hList.innerHTML = `<div class="ttl" style="margin-bottom:16px">🎒 My Hero Collection</div>`;
  
  KATEGORI.forEach(kat => {
    const heroes = HEROES.filter(h => h.kategori === kat.id);
    if(!heroes.length) return;
    
    let html = `<div class="panel" style="margin-bottom:16px;">
                  <div class="lbl" style="margin-bottom:10px;">${kat.ikon} ${kat.nama}</div>
                  <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">`;
                  
    heroes.forEach(h => {
      const isDone = meta.voyage.completedHeroes.includes(h.id);
      
      if(isDone) {
        // Discovered Hero (Flip Card)
        html += `
          <div class="hero-card discovered flip-card" onclick="this.classList.toggle('flipped')" style="height:160px; cursor:pointer;">
            <div class="flip-card-inner">
              <!-- FRONT -->
              <div class="flip-card-front" style="background:linear-gradient(135deg, ${kat.warna}11, #fff); border:2px solid ${kat.warna}; padding:12px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 8px rgba(0,0,0,0.05);">
                <div>
                  <div style="font-weight:bold; font-size:14px; color:${kat.warna}; line-height:1.2; margin-bottom:4px;">${h.nama}</div>
                  <div style="font-size:11px; color:#666; margin-bottom:8px;">${h.skill_ikon || '🧠'} ${h.skill || 'Pengetahuan'}</div>
                </div>
                <div style="font-size:10px; background:${kat.warna}22; padding:4px 8px; border-radius:20px; color:${kat.warna}; display:inline-block; align-self:flex-start; font-weight:bold;">
                  ⭐ DISCOVERED
                </div>
              </div>
              <!-- BACK -->
              <div class="flip-card-back">
                <div>
                  <div style="font-size:11px; font-weight:bold; color:#4a2b00; margin-bottom:4px;">🎯 Kontribusi</div>
                  <div style="font-size:11px; color:#555; line-height:1.3; margin-bottom:12px;">${h.peran}</div>
                </div>
                <button onclick="event.stopPropagation(); sfx.click(); bukaHero('${h.id}')" style="background:#F5C542; border:none; padding:6px; border-radius:8px; font-weight:bold; color:#333; cursor:pointer; width:100%;">📖 Baca Kisah</button>
              </div>
            </div>
          </div>
        `;
      } else {
        // Mystery Hero
        html += `
          <div class="hero-card mystery" style="background:#f0f0f0; border:2px dashed #ccc; border-radius:12px; padding:12px; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center; min-height:140px; color:#999;">
            <div style="font-size:24px; margin-bottom:4px;">🔒</div>
            <div style="font-weight:bold; font-size:12px; margin-bottom:4px;">MYSTERY HERO</div>
            <div style="font-size:10px;">"Siapakah dia?"</div>
          </div>
        `;
      }
    });
    
    html += `</div></div>`;
    hList.innerHTML += html;
  });
}

// ============================================================
// VOYAGE HOME — Render Card & Tombol Lanjutkan Perjalanan
// ============================================================
function renderVoyageHome(){
  const voyage = meta.voyage;

  // Tentukan destinasi aktif berdasarkan heroXP
  const xp = voyage.heroXP || 0;
  let activeDest = DESTINATIONS[0];
  for(const d of DESTINATIONS){
    if(xp >= d.syaratXP) activeDest = d;
  }
  // Simpan currentDestination ke state
  if(voyage.currentDestination !== activeDest.id){
    voyage.currentDestination = activeDest.id;
    if(!voyage.unlockedDestinations.includes(activeDest.id)){
      voyage.unlockedDestinations.push(activeDest.id);
    }
    simpan();
  }

  // Hitung progres destinasi aktif (heroes completed)
  const heroesInDest = activeDest.heroes;
  const doneInDest = heroesInDest.filter(id => voyage.completedHeroes.includes(id)).length;
  const totalInDest = heroesInDest.length || 1;
  const pct = Math.round((doneInDest / totalInDest) * 100);

  // Update UI voyage card
  $("greetName").innerText = pemain;
  $("voyDestName").innerText = `${activeDest.ikon} ${activeDest.nama}`;
  $("voyDestSub").innerText = activeDest.lokasi;
  $("voyProgFill").style.width = pct + "%";
  $("voyProgLabel").innerText = `${doneInDest} / ${totalInDest} Heroes`;

  // Wire tombol Lanjutkan Perjalanan
  $("voyBtn").onclick = () => {
    sfx.click();
    
    // Cari hero belum selesai di activeDest ATAU fallback ke destinasi sebelumnya
    let nextHeroId = null;
    let targetDest = null;
    const unlockedDests = DESTINATIONS.filter(d => xp >= d.syaratXP).reverse();
    for(const d of unlockedDests) {
      const hId = d.heroes.find(id => !voyage.completedHeroes.includes(id));
      if(hId) {
        nextHeroId = hId;
        targetDest = d;
        break;
      }
    }

    if(nextHeroId){
      
      // TAHAP 5: Animasi Sailing
      $("sailingOverlay").classList.remove("hidden");
      
      setTimeout(() => {
        $("sailingOverlay").classList.add("hidden");
        
        // Cek apakah ini pertama kali visit targetDest (Arrival Screen)
        if(!voyage.visitedDestinations) voyage.visitedDestinations = [];
        
        if(!voyage.visitedDestinations.includes(targetDest.id)) {
          voyage.visitedDestinations.push(targetDest.id);
          simpan();
          
          $("arrLoc").innerText = targetDest.lokasi.toUpperCase();
          $("arrName").innerText = targetDest.nama.toUpperCase();
          $("arrivalScreen").classList.remove("hidden");
          sfx.tuntas();
          
          $("arrBtn").onclick = () => {
             sfx.click();
             $("arrivalScreen").classList.add("hidden");
             bukaHero(nextHeroId);
          };
        } else {
          bukaHero(nextHeroId);
        }
      }, 2000); // Tunggu animasi kapal selesai (2s)
      
    } else {
      // Semua hero di SEMUA destinasi yang unlocked sudah selesai
      const nextDest = DESTINATIONS.find(d => xp < d.syaratXP);
      if(nextDest){
        toast(`🔒 Kumpulkan ${nextDest.syaratXP - xp} XP lagi untuk berlayar ke: ${nextDest.nama}`);
      } else {
        toast("🏆 Semua destinasi telah dijelajahi! Kamu The Great Hero!");
      }
    }
  };
}

// ============================================================
// JOURNEY MAP — Render daftar milestone destinasi
// ============================================================
function renderJourneyMap(){
  const voyage = meta.voyage;
  const xp = voyage.heroXP || 0;
  const jMap = $("journeyMap");
  if(!jMap) return;
  jMap.innerHTML = "";

  DESTINATIONS.forEach((dest, idx) => {
    const isUnlocked = xp >= dest.syaratXP;
    const isCurrent = isUnlocked && (
      idx === DESTINATIONS.length - 1 || xp < DESTINATIONS[idx + 1].syaratXP
    );
    const heroesInDest = dest.heroes;
    const doneInDest = heroesInDest.filter(id => voyage.completedHeroes.includes(id)).length;
    const totalInDest = heroesInDest.length;
    const isDone = isUnlocked && totalInDest > 0 && doneInDest >= totalInDest;
    const pct = totalInDest > 0 ? Math.round((doneInDest / totalInDest) * 100) : 0;

    // Determine state class
    let stateClass = 'locked';
    if(isDone) stateClass = 'done';
    else if(isCurrent) stateClass = 'current';
    else if(isUnlocked) stateClass = 'current';

    // Labels
    const tagLabel = isDone ? '✅ Selesai' : isCurrent ? '⛵ Di sini' : `🔒 Butuh ${dest.syaratXP} XP`;
    const progLabel = !isUnlocked
      ? `Butuh ${dest.syaratXP - xp} XP lagi`
      : totalInDest > 0
        ? `${doneInDest} / ${totalInDest} Heroes`
        : 'Coming soon';

    const onClickAttr = isUnlocked ? `onclick="mainkanDestinasi('${dest.id}')" style="cursor:pointer;"` : '';
    jMap.innerHTML += `
      <div class="voy-milestone" ${onClickAttr}>
        <div class="voy-pin ${stateClass}">${dest.ikon}</div>
        <div class="voy-info ${stateClass}">
          <span class="voy-ms-tag ${stateClass}">${tagLabel}</span>
          <div class="voy-ms-name">${dest.nama}</div>
          <div class="voy-ms-loc">${dest.lokasi}</div>
          <div class="voy-ms-prog">${progLabel}</div>
          ${ isUnlocked && totalInDest > 0 ? `
            <div class="voy-ms-bar">
              <div class="voy-ms-bar-fill" style="width:${pct}%"></div>
            </div>` : '' }
        </div>
      </div>
    `;
  });
}

window.mainkanDestinasi = (destId) => {
  sfx.click();
  const dest = DESTINATIONS.find(d => d.id === destId);
  if(!dest) return;
  const nextHeroId = dest.heroes.find(id => !meta.voyage.completedHeroes.includes(id));
  if(nextHeroId) {
    bukaHero(nextHeroId);
  } else {
    toast("🏆 Semua pahlawan di destinasi ini sudah selesai!");
  }
};

// --- Render Modul Pembacaan ---
window.bukaHero = (id) => {
  sfx.click();
  currentHero = HEROES.find(h => h.id === id);
  if(!currentHero) return;
  
  $("menu").classList.add("hidden");
  $("moduleView").classList.remove("hidden");
  $("moduleTitle").innerText = currentHero.nama;
  
  let html = `
    <div style="text-align:center; border-bottom:2px dashed #ddd; padding-bottom:16px; margin-bottom:16px;">
      <h2 style="margin:0; color:#4a2b00; font-size:24px;">${currentHero.nama}</h2>
      <p style="margin:4px 0 0; color:#777; font-size:14px; font-weight:bold;">${currentHero.julukan}</p>
      <div style="margin-top:8px;">
        <div style="display:inline-block; background:#e0f7fa; color:#006064; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:bold; border:1px solid #b2ebf2; margin-right:4px;">
          ${DESTINATIONS.find(d => d.heroes.includes(currentHero.id))?.nama || "Unknown"}
        </div>
        <div style="display:inline-block; background:#f4e8d3; color:#a67b57; padding:4px 12px; border-radius:20px; font-size:12px; border:1px solid #dfcba2;">Tema: ${currentHero.tema}</div>
      </div>
    </div>
  `;
  
  currentHero.pengantar.forEach(p => {
    html += `<p style="font-size:15px; line-height:1.5; color:#444;">${p}</p>`;
  });
  
  html += `
    <h3 style="color:#217a55; border-left:4px solid #217a55; padding-left:8px; margin-top:24px;">Ayo Belajar!</h3>
    <ul style="padding-left:20px; color:#444; font-size:14px; line-height:1.6;">
      <li><b>Siapa dia?</b> ${currentHero.belajar.siapa}</li>
      <li><b>Kapan & Di mana?</b> ${currentHero.belajar.kapan}</li>
      <li><b>Apa yang dilakukan?</b> ${currentHero.belajar.dilakukan}</li>
      <li><b>Kontribusi:</b> ${currentHero.belajar.kontribusi}</li>
      <li><b>Tantangan:</b> ${currentHero.belajar.tantangan}</li>
    </ul>
  `;
  
  html += `<h3 style="color:#d4af37; border-left:4px solid #d4af37; padding-left:8px; margin-top:24px;">Fakta Sejarah!</h3><ul style="padding-left:20px; color:#444; font-size:14px; line-height:1.6;">`;
  currentHero.fakta.forEach(f => { html += `<li>${f}</li>`; });
  html += `</ul>`;
  
  html += `
    <div style="background:#fdf9f1; border:2px solid #dfcba2; border-radius:12px; padding:16px; margin-top:24px;">
      <h3 style="margin-top:0; color:#785438;">Karakter Sang Hero: ${currentHero.skill}</h3>
      <p style="font-size:14px; color:#555; margin-bottom:8px;">Teladan untuk Kehidupan Sehari-hari:</p>
      <ul style="padding-left:20px; color:#444; font-size:14px; line-height:1.5; margin-bottom:0;">
        ${currentHero.praktik.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
    
    <div style="background:#e8f5e9; border:2px solid #81c784; border-radius:12px; padding:16px; margin-top:16px; text-align:center;">
      <h3 style="margin-top:0; color:#2e7d32;">🚀 Mission of the Day</h3>
      <p style="font-size:14px; color:#1b5e20; margin-bottom:0;">${currentHero.misi}</p>
    </div>
    
    <div style="text-align:center; margin-top:32px;">
      <button class="bigbtn" onclick="mulaiKuis()" style="width:100%; font-size:18px;">Uji Pemahaman! 🧠</button>
    </div>
  `;
  
  $("moduleContent").innerHTML = html;
  window.scrollTo(0, 0);
  
  catatHitung("baca_semua", 1);
  catatHitung("baca_" + currentHero.kategori, 1);
  const bonus = periksaMisi();
  if(bonus > 0) {
    totalStars += bonus;
    toast(`Misi Selesai! +${bonus} ⭐`);
    simpan();
    perbaruiTopBar();
  }
};

$("backBtn").onclick = () => {
  sfx.click();
  tampilMenu();
};
$("backQuizBtn").onclick = () => {
  sfx.click();
  $("quizView").classList.add("hidden");
  $("moduleView").classList.remove("hidden");
};

// --- Logika Kuis ---
window.mulaiKuis = () => {
  sfx.click();
  currentQuiz = 0;
  quizScore = 0;
  $("moduleView").classList.add("hidden");
  $("quizView").classList.remove("hidden");
  renderKuis();
};

function renderKuis(){
  const q = currentHero.kuis[currentQuiz];
  $("qbar").style.width = ((currentQuiz / currentHero.kuis.length) * 100) + "%";
  
  let html = `
    <div style="font-size:14px; color:#777; font-weight:bold; margin-bottom:8px;">Pertanyaan ${currentQuiz+1} dari ${currentHero.kuis.length}</div>
    <div style="font-size:18px; color:#333; margin-bottom:24px; line-height:1.4;">${q.q}</div>
    <div style="display:flex; flex-direction:column; gap:12px;">
  `;
  
  q.opts.forEach((opt, idx) => {
    html += `<button class="optBtn" onclick="jawabKuis(${idx})" style="background:#fff; border:3px solid #dfcba2; border-radius:12px; padding:16px; font-size:16px; color:#444; font-family:inherit; cursor:pointer; text-align:left; font-weight:bold; transition:all 0.2s;">${opt}</button>`;
  });
  
  html += `</div>`;
  $("quizCard").innerHTML = html;
}

window.jawabKuis = (idx) => {
  const q = currentHero.kuis[currentQuiz];
  const btns = $("quizCard").querySelectorAll(".optBtn");
  
  btns.forEach(b => b.disabled = true);
  
  if(idx === q.a){
    sfx.benar();
    btns[idx].style.background = "#4CAF50";
    btns[idx].style.color = "#fff";
    btns[idx].style.borderColor = "#388E3C";
    quizScore++;
  } else {
    sfx.salah();
    btns[idx].style.background = "#F44336";
    btns[idx].style.color = "#fff";
    btns[idx].style.borderColor = "#D32F2F";
    btns[q.a].style.background = "#4CAF50";
    btns[q.a].style.color = "#fff";
    btns[q.a].style.borderColor = "#388E3C";
  }
  
  setTimeout(() => {
    currentQuiz++;
    if(currentQuiz < currentHero.kuis.length){
      renderKuis();
    } else {
      selesaiKuis();
    }
  }, 1200);
};

let newlyDiscoveredHero = null;

function selesaiKuis(){
  $("quizView").classList.add("hidden");
  $("result").classList.remove("hidden");
  
  const total = currentHero.kuis.length;
  const isPerfect = quizScore === total;
  
  if(isPerfect) sfx.tuntas();
  
  $("rMsg").innerText = `Kamu benar ${quizScore} dari ${total}!`;
  
  let dptBintang = 0;
  newlyDiscoveredHero = null;
  
    if(isPerfect){
      $("rSub").innerText = "Luar biasa! Pemahamanmu sempurna.";
      $("rStars").innerHTML = "⭐⭐⭐";
      // Use voyage.completedHeroes for tracking completed heroes
      if(!meta.voyage.completedHeroes.includes(currentHero.id)){
        dptBintang = 3;
        meta.voyage.completedHeroes.push(currentHero.id);
        totalStars += 3;
        // Tambahkan XP ke voyage state (5 XP per hero selesai sempurna)
        meta.voyage.heroXP = (meta.voyage.heroXP || 0) + 5;
        
        newlyDiscoveredHero = currentHero; // trigger discovery animation
        
        toast(`Hebat! +3 ⭐ · +5 Hero XP`);
        catatHitung("kuis_sempurna", 1);
        const bns = periksaMisi();
        if(bns > 0) {
          totalStars += bns;
          setTimeout(() => toast(`Misi Selesai! +${bns} ⭐`), 1500);
        }
      } else {
        $("rSub").innerText += "\n(Bintang untuk kisah ini sudah dikumpulkan sebelumnya)";
      }
    } else {
      $("rSub").innerText = "Coba baca ulang dengan lebih teliti ya!";
      $("rStars").innerHTML = quizScore > 0 ? "⭐" : "☁️";
    }
  
  simpan();
  perbaruiTopBar();
}

$("menuBtn").onclick = () => {
  sfx.click();
  if(newlyDiscoveredHero) {
    tampilDiscovery(newlyDiscoveredHero);
    newlyDiscoveredHero = null;
  } else {
    tampilMenu();
  }
};

function tampilDiscovery(hero) {
  $("result").classList.add("hidden");
  $("discoveryScreen").classList.remove("hidden");
  sfx.tuntas();
  
  $("discName").innerText = hero.nama;
  $("discSub").innerText = hero.julukan;
  
  let icon = "🏆";
  const kat = KATEGORI.find(k => k.id === hero.kategori);
  if(kat) icon = kat.ikon;
  $("discIcon").innerText = icon;
  
  $("discSkill").innerText = hero.skill || "Pengetahuan";
  
  $("discBtn").onclick = () => {
    sfx.click();
    $("discoveryScreen").classList.add("hidden");
    showFloatingXP(5);
    
    checkChapterComplete(hero);
  };
}

function checkChapterComplete(hero) {
  const dest = DESTINATIONS.find(d => d.heroes.includes(hero.id));
  if(dest) {
    const allCompleted = dest.heroes.every(hId => meta.voyage.completedHeroes.includes(hId));
    if(!meta.voyage.completedDestinations) meta.voyage.completedDestinations = [];
    
    if(allCompleted && !meta.voyage.completedDestinations.includes(dest.id)) {
      meta.voyage.completedDestinations.push(dest.id);
      simpan();
      
      $("chapName").innerText = dest.nama.toUpperCase();
      const skills = dest.heroes.map(hId => {
        const h = HEROES.find(x => x.id === hId);
        return (h.skill_ikon||'') + " " + (h.skill||'');
      }).join(", ");
      $("chapSkills").innerText = skills;
      
      $("chapterScreen").classList.remove("hidden");
      sfx.tuntas();
      
      $("chestElement").innerText = "📦";
      $("chestElement").style.animation = "";
      $("treasureReward").classList.add("hidden");
      $("chapBtn").classList.add("hidden");
      
      $("chestElement").onclick = () => {
        sfx.tuntas();
        $("chestElement").innerText = "🎁";
        $("chestElement").style.animation = "none";
        $("treasureReward").classList.remove("hidden");
        $("chapBtn").classList.remove("hidden");
        
        meta.voyage.heroXP += 50;
        totalStars += 50;
        simpan();
        perbaruiTopBar();
        showFloatingXP(50);
      };
      
      $("chapBtn").onclick = () => {
        sfx.click();
        $("chapterScreen").classList.add("hidden");
        checkDestinationUnlock();
      };
      return;
    }
  }
  checkDestinationUnlock();
}

function checkDestinationUnlock() {
  const xp = meta.voyage.heroXP || 0;
  const nextDest = DESTINATIONS.find(d => !meta.voyage.unlockedDestinations.includes(d.id) && xp >= d.syaratXP);
  
  if(nextDest) {
    meta.voyage.unlockedDestinations.push(nextDest.id);
    simpan();
    
    $("unlIcon").innerText = nextDest.ikon;
    $("unlName").innerText = nextDest.nama.toUpperCase();
    $("unlLoc").innerText = nextDest.lokasi.toUpperCase();
    
    $("destUnlockScreen").classList.remove("hidden");
    sfx.tuntas();
    
    $("unlBtn").onclick = () => {
      sfx.click();
      $("destUnlockScreen").classList.add("hidden");
      tampilMenu();
    };
  } else {
    tampilMenu();
  }
}

// --- Toast Notifikasi & Visual Feedback ---
window.showFloatingXP = (amount) => {
  const container = $("floatingXpContainer");
  if(!container) return;
  const el = document.createElement("div");
  el.className = "floating-xp";
  el.innerText = `⭐ +${amount} XP`;
  el.style.left = "50%";
  el.style.top = "40%";
  el.style.marginLeft = "-40px";
  container.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

window.showStreakModal = (days) => {
  if(!days) return;
  $("streakDaysText").innerText = `${days} DAYS`;
  $("streakModal").classList.remove("hidden");
  sfx.tuntas();
  $("streakBtn").onclick = () => {
    sfx.click();
    $("streakModal").classList.add("hidden");
  };
}

function toast(msg){
  const t = document.createElement("div");
  t.style.cssText = "background:#333; color:#fff; padding:12px 20px; border-radius:30px; margin-top:10px; font-weight:bold; animation:slideUp 0.3s ease-out; box-shadow:0 4px 10px rgba(0,0,0,0.3);";
  t.innerText = msg;
  $("toasts").appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transition = "opacity 0.3s";
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

// Tambah animasi toast
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  #toasts { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; flex-direction: column; align-items: center; }
`;
document.head.appendChild(style);

window.onload = init;
