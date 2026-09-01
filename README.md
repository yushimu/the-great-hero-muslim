# 🌙 Petualangan Bahasa Arab — Negeri 1001 Malam

Game belajar bahasa Arab untuk anak, bertema Negeri 1001 Malam. **30 gerbang**, tanpa iklan,
tanpa server, tanpa build. Cukup HTML + CSS + JavaScript biasa.

> 📖 **[Baca PANDUAN.md](PANDUAN.md)** — panduan lengkap Bahasa Indonesia:
> cara memainkan game (untuk anak & guru) dan cara install ke Vercel langkah demi langkah.

## Fitur pemain

- **Menu multi-langkah** — persiapan dipecah jadi 4 langkah agar tidak menggulung panjang:
  **1) Room → 2) Level → 3) Fokus → 4) Main**. Hanya satu langkah tampil sekaligus, ada
  penunjuk langkah yang bisa diklik untuk melompat, serta tombol Kembali/Lanjut. Saat masuk
  halaman game, seluruh panel persiapan otomatis tersembunyi. Setelah selesai bermain, pemain
  kembali langsung ke **langkah 4 (daftar gerbang)** — tidak perlu mengulang wizard.
- **Nama pemain** — anak menyapa dirinya dan namanya muncul di sapaan serta papan bintang.
- **30 soal per game** — setiap ronde gerbang kuis berisi **30 soal**, dengan anti-pengulangan
  (jawaban benar yang sama tidak muncul dua kali berturut-turut). Gerbang Kilat, Balon, dan
  Memori tetap berbasis waktu/pasangan, bukan hitungan soal.
- **3 tingkat tantangan** — 🐫 Musafir (kata pendek, angka 1–5, 3 pilihan, **6 nyawa**),
  🧞 Pengembara (4 pilihan, **5 nyawa**), 👑 Sultan (semua materi, kalimat panjang, 5 pilihan,
  **4 nyawa**). Level menyaring bank soal, jumlah pilihan, dan jumlah nyawa. Nyawa lebih banyak
  di level mudah agar ronde 30 soal tetap bisa diselesaikan anak.
- **Fokus belajar** — tampilkan semua gerbang atau saring per kategori (Huruf & Bunyi, Kata & Benda,
  Alam & Kehidupan, Kalimat & Percakapan, Tantangan).
- **Main bersama (room)** — buat kode room, salin/bagikan lewat link `?room=KODE`, dan lihat
  **papan bintang** yang mengurutkan pemain. Mode ini **lokal per perangkat** — kode, level, dan
  papan bintang tersimpan di browser masing-masing; belum ada sinkronisasi lintas perangkat
  (butuh backend untuk itu).
- **Pangkat** — 8 pangkat (🐫 Musafir Kecil → 🌟 Bintang 1001 Malam) naik otomatis mengikuti
  total bintang, lengkap dengan bilah kemajuan menuju pangkat berikutnya.
- **Misi harian & hari beruntun** — 3 misi diundi tiap hari (bonus ⭐ 5 tiap misi), plus
  penghitung **hari beruntun** yang bertambah bila bermain di hari berurutan.
- **Gerbang bertahap** — dua gerbang pertama terbuka, sisanya dibuka tiap **3 bintang**.
  Guru bisa mematikan sistem kunci ini dari halaman admin.
- **Peta & Daftar** — jalur petualangan zig-zag atau kartu per kategori; pilihan tersimpan.
- **Koleksi** — 🎖️ lencana Ahli tiap kategori (dapat ⭐⭐⭐ di semua gerbangnya) dan
  🎨 album 50 stiker yang terbuka tiap 10 bintang.
- **Panel aplikasi** — pasang ke layar utama (PWA), status siap-tanpa-internet
  (service worker), dan tombol **Lindungi** agar browser tidak menghapus progres.
- **Layar hasil berstatistik** — total bintang, pangkat, room, gerbang, fokus, level,
  jumlah benar, perolehan ronde, bonus misi, hari beruntun, stiker, dan rating bintang.

## Peran (role): Murid & Guru/Admin

- **Murid (user)** — main langsung di `index.html`. Tidak butuh login.
- **Guru/Admin** — buka `admin.html` (ada tautan "⚙️ Halaman Guru / Admin" di bawah menu),
  masuk dengan **passcode** (bawaan `admin123`, bisa diganti dari dalam panel).

### White-label (di halaman admin)

Admin dapat mengubah **tampilan** aplikasi tanpa menyentuh kode:

- **Nama aplikasi** (mis. jadi "Sains Ceria") → tampil di logo & judul tab.
- **Tagline** sambutan di menu.
- **Emoji logo** dan **emoji ikon tab** (kosongkan kolom ikon tab → memakai logo aplikasi).
- **Warna tema**: 🌙 Malam 1001 · 🌳 Hutan Hijau · 🌊 Laut Biru · 🏜️ Gurun Emas.
- **Buka semua gerbang** — mematikan sistem kunci bertahap, berguna bila satu kelas ingin
  langsung berlatih materi tertentu.

Ada **pratinjau langsung** saat mengetik. Setelah **Simpan**, perubahan langsung diterapkan
ke game; jika game terbuka di tab lain, ia ikut berubah tanpa reload (lewat event `storage`).

> **Peringatan keamanan.** Karena ini situs statis tanpa server, passcode admin dijaga
> **di sisi browser** — cukup untuk memisahkan guru dan murid di kelas, **bukan** keamanan
> sungguhan (siapa pun yang membuka DevTools bisa melihat/melewati). Config white-label juga
> **per perangkat** (localStorage), belum tersinkron antar-HP. Untuk admin & branding yang
> berlaku global lintas perangkat, perlu backend + autentikasi sungguhan.

> **Konten masih Bahasa Arab.** White-label saat ini mengubah *tampilan* saja; bank soal
> tetap Arab. Struktur sudah disiapkan untuk menambah mata pelajaran (mis. IPA/IPS) di sesi
> berikutnya — tinggal menambah paket soal dan menyambungkannya ke pilihan mata pelajaran.

## Daftar Gerbang

**Huruf & Bunyi**
| Gerbang | Yang dilatih |
|---|---|
| 🔤 Huruf | Nama huruf hijaiyah |
| 🎵 Ba-Bi-Bu | Membaca huruf berharakat |
| 👂 Bunyi | Mendengar bunyi → cari hurufnya |
| 👯 Kembar | Membedakan huruf yang mirip (ب ت ث …) |
| 🔗 Sambung | Bentuk huruf di awal/tengah/akhir kata |
| 🌗 Syamsi | ال qamariyah (dibaca jelas) vs syamsiyah (lam dilebur) |
| 🎈 Balon | Arcade: letuskan balon huruf yang tepat (40 detik) |

**Kata & Benda**
| Gerbang | Yang dilatih |
|---|---|
| 🧺 Kata | Gambar ↔ kata Arab (63 kosakata) |
| 🔢 Angka | Menghitung lalu memilih angka Arab |
| ٣ Raqm | Angka Arab ٠ ١ ٢ ٣ … |
| ↔️ Lawan | Antonim (kabīr ↔ ṣaghīr …) |
| 🏃 Fi‘il | Kata kerja sehari-hari |
| 📅 Hari | Nama-nama hari |
| 👥 Jamak | Bentuk satu ↔ banyak (kitāb → kutub) |
| 🧠 Memori | Cocokkan kartu gambar ↔ kata |
| 🔠 Eja | Susun huruf jadi kata (dari kanan!) |

**Alam & Kehidupan**
| Gerbang | Yang dilatih |
|---|---|
| 👨‍⚕️ Mihnah | Nama-nama profesi (dokter, petani, pilot …) |
| 🌦️ Cuaca | Cuaca & 4 musim |
| ⏰ Waktu | Pagi–malam, hari, pekan, bulan, jam |
| 🏞️ Alam | Matahari, laut, gunung, sungai … |

**Kalimat & Percakapan**
| Gerbang | Yang dilatih |
|---|---|
| 💬 Sapaan | Jawaban percakapan sehari-hari |
| 🕌 Hadza | هٰذَا (mudzakkar) vs هٰذِهِ (muannats) |
| 🙋 Dhamir | Kata ganti: anā, anta, huwa, hiya … |
| 📍 Tempat | Fī, ‘alā, taḥta, fauqa, amāma … |
| ❓ Tanya | Kata tanya: mā, man, aina, kaifa, kam, matā … |
| 📣 Perintah | Fi‘il amr di kelas: uktub, iqra’, ijlis … |
| 🧩 Kalimat | Susun kata jadi kalimat |
| 🤲 Doa | Doa & dzikir harian |

**Tantangan**
| Gerbang | Yang dilatih |
|---|---|
| ⚡ Kilat | 45 detik, jawab sebanyak-banyaknya |
| 🏆 Ujian Akbar | 12 soal campuran, 3 nyawa |

## Menjalankan di komputer sendiri

Butuh server statis (bukan `file://`) karena skrip dimuat dengan path absolut:

```bash
npm run dev      # buka http://localhost:3000
```

Atau pakai apa saja yang tersedia, misalnya `python -m http.server 3000`.

## Deploy ke Vercel

Proyek ini **situs statis murni** — tidak ada langkah build.

**Cara 1 — lewat CLI:**
```bash
npm i -g vercel
vercel            # pratinjau
vercel --prod     # produksi
```

**Cara 2 — lewat GitHub:**
1. Push folder ini ke sebuah repositori GitHub.
2. Di [vercel.com/new](https://vercel.com/new), impor repositori tersebut.
3. Framework Preset: **Other**. Build Command dan Output Directory **dikosongkan**.
4. Klik **Deploy**.

`vercel.json` sudah mengatur `cleanUrls` dan header keamanan dasar.

## Struktur

```
index.html             # game untuk murid
admin.html             # panel guru/admin (white-label, dijaga passcode)
css/style.css          # seluruh tampilan, animasi & tema white-label
js/brand.js            # konfigurasi white-label (dipakai index & admin)
js/data.js             # bank soal, daftar gerbang, pangkat, misi, stiker
js/sistem.js           # pangkat, misi harian, kunci gerbang, koleksi, panel aplikasi
js/app.js              # mesin game
sw.js                  # service worker — main tanpa internet
manifest.webmanifest   # identitas PWA: nama "The Great Hero Muslim" + ikon
logo.png               # sumber ikon 1254px (tidak ikut di-deploy)
icon-192/512, icon-maskable-512, apple-touch-icon   # ikon hasil olahan
vercel.json            # konfigurasi deploy
```

## Menambah materi

Hampir semua penambahan cukup di `js/data.js`:

- **Kosakata baru** → tambahkan baris ke `KATA`: `["🐮","بَقَرَةٌ","baqaratun","sapi"]`.
  Kosakata ini otomatis dipakai juga oleh Gerbang Memori dan Kilat.
  Pakai emoji yang **belum dipakai** di `KATA` — Gerbang Memori mencocokkan gambar,
  jadi dua kata dengan emoji sama akan membingungkan.
- **Kalimat baru** → tambahkan ke `KALIMAT`: `[["أَنَا","سَعِيدٌ"],"Saya senang"]`.
- **Kosakata bergambar bertema** (profesi, cuaca, waktu, alam, kata kerja) → semuanya
  memakai bentuk `[emoji, arab, translit, arti]` dan satu pemanggil bersama
  `soalKosakata()` di `js/app.js`. Menambah tema baru cukup: bikin array baru,
  daftarkan di `BANK`, tambah entri `GERBANG`, lalu satu baris
  `else if(g==="x") soalKosakata("X", "Pertanyaannya?", n, cb);`.
- **Gerbang baru** → tambahkan entri ke `GERBANG` (agar muncul di menu), lalu tambahkan
  satu cabang `else if` di `makeQuestion()` dalam `js/app.js` yang memanggil
  `cb({promptHTML, options, correct})`. Kalau gerbang itu layak muncul di Ujian Akbar
  atau Kilat, masukkan id-nya ke `POOL_UJIAN` / `POOL_KILAT`.
- **Penyaringan level** → tambahkan `case` di fungsi `bank()` supaya materi panjang
  hanya muncul di level Pengembara/Sultan.

## Mengatur sistem progres

Semua angkanya ada di `js/data.js`, jadi bisa disetel tanpa menyentuh mesin game:

| Yang diatur | Tempatnya |
|---|---|
| Nama & syarat pangkat | `PANGKAT` |
| Daftar misi harian & bonusnya | `MISI`, `MISI_BONUS` |
| Kecepatan gerbang terbuka | `KUNCI_LANGKAH` (bawaan 3 bintang per gerbang) |
| Stiker & harganya | `STIKER`, `STIKER_PER_BINTANG` |

## Ikon & nama aplikasi (PWA)

Nama yang muncul di layar utama adalah **“The Great Hero Muslim”** (`name` & `short_name` di
`manifest.webmanifest`). Ikonnya dibuat dari `logo.png`:

| Berkas | Ukuran | Dipakai untuk |
|---|---|---|
| `icon-192.png` | 192×192 | ikon tab browser & syarat pemasangan |
| `icon-512.png` | 512×512 | ikon besar & layar pembuka |
| `icon-maskable-512.png` | 512×512 | Android (logo diperkecil 80% + latar `#291A5A`, agar tidak terpotong bulat) |
| `apple-touch-icon.png` | 180×180 | iPhone/iPad — iOS mengabaikan ikon manifest |

Mengganti logo? Timpa `logo.png` lalu buat ulang keempat berkas itu:

```bash
sips -Z 192 logo.png --out icon-192.png
sips -Z 512 logo.png --out icon-512.png
sips -Z 180 logo.png --out apple-touch-icon.png
sips -Z 410 logo.png --out icon-maskable-512.png
sips -p 512 512 --padColor 291A5A icon-maskable-512.png
```

Sesudah itu naikkan `VERSI` di `sw.js` supaya perangkat mengambil ikon baru.
Nama di dalam game (logo header & judul tab) tetap bisa diubah kapan saja dari `admin.html`.

## Catatan teknis

- Progres, nama, level, fokus, room, misi harian, dan hari beruntun disimpan di `localStorage` (kunci `petualangan-arab-v3`); papan bintang tiap room di kunci `petualangan-arab-papan-<KODE>`. Tombol 🔄 menghapus progres bintang, stiker, dan misi.
- **Misi harian diundi dari tanggal**, jadi tetap sama sepanjang hari itu walau halaman dimuat ulang, dan berganti sendiri lewat tengah malam.
- **Mode tanpa internet** ditangani `sw.js`. Setiap kali berkas di dalam daftar `ISI` berubah, naikkan `VERSI` di berkas itu supaya perangkat murid mengambil versi baru. Kalau ada yang aneh, tombol **Muat ulang & segarkan** di panel Aplikasi menghapus simpanan service worker.
- **Room bersifat lokal.** Kode dan papan bintang hidup di browser masing-masing pemain, jadi cocok untuk satu perangkat/kelas yang bergiliran. Agar papan bintang benar-benar lintas perangkat, perlu backend (mis. Vercel KV / database) — belum termasuk di versi statis ini.
- Tombol **🔊 Dengarkan** memakai `speechSynthesis` bawaan browser. Kalau perangkat tidak punya suara bahasa Arab, tombol tetap ada tetapi pelafalan mungkin kurang tepat — ini di luar kendali aplikasi.
- Soal dijawab dengan mengetuk, atau dengan tombol angka **1–4** di papan ketik. **Esc** kembali ke menu.
- Menghormati `prefers-reduced-motion` — animasi dimatikan bila pengguna memintanya.
- `Game_Petualangan_Bahasa_Arab.html` adalah versi lama satu-file, disimpan sebagai arsip dan tidak ikut di-deploy (lihat `.vercelignore`).
