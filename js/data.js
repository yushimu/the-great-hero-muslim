/* ============================================================
   DATA TOKOH â€” The Great Hero Muslim
   Semua data terpisah dari mesin utama agar mudah ditambah.
============================================================ */

const KATEGORI = [
  { id: "companion", nama: "The Companions", warna: "#2E7D32", ikon: "🛡️" },
  { id: "scientist", nama: "Muslim Scientists", warna: "#0277BD", ikon: "🔭" },
  { id: "commander", nama: "Muslim Commanders", warna: "#B71C1C", ikon: "⚔️" },
  { id: "builder", nama: "Builders of Civilization", warna: "#F57F17", ikon: "🏛️" },
  { id: "knowledge", nama: "Muslim Knowledge", warna: "#8E24AA", ikon: "📖" }
];

const HEROES = [
  {
    id: "abu_bakr",
    kategori: "companion",
    nama: "Abu Bakr As-Siddiq",
    julukan: "Sahabat Terdekat & Khalifah Pertama (573 â€“ 634 M)",
    tema: "Kebenaran, Kesetiaan, dan Pengorbanan Tanpa Batas",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu memiliki teman yang selalu membelamu apa pun yang terjadi? Teman yang percaya padamu bahkan ketika semua orang meragukanmu?",
      "Lebih dari seribu tahun yang lalu, ada seorang pria yang menjadi teman terbaik bagi manusia terbaik, yaitu Nabi Muhammad ï·º. Beliau adalah Abu Bakr, pahlawan kesetiaan yang sejati."
    ],
    belajar: {
      siapa: "Abu Bakr adalah sahabat terdekat Nabi Muhammad ï·º. Nama aslinya adalah Abdullah bin Abi Quhafah.",
      kapan: "Beliau hidup di Makkah dan Madinah, pada masa awal kelahiran Islam, dan menjadi Khalifah pertama setelah wafatnya Nabi ï·º.",
      dilakukan: "Beliau menemani Nabi ï·º dalam perjalanan hijrah yang berbahaya ke Madinah, dan menyumbangkan seluruh hartanya untuk Islam.",
      kontribusi: "Sebagai Khalifah, beliau menyelamatkan umat Islam dari perpecahan dan memerintahkan pengumpulan Al-Qur'an dalam satu mushaf untuk pertama kalinya.",
      tantangan: "Beliau menghadapi masa krisis besar ketika Nabi ï·º wafat, namun ia tetap tenang dan memimpin umat melewati masa tersulit tersebut."
    },
    fakta: [
      "Diberi gelar 'As-Siddiq' (Yang Membenarkan) karena langsung mempercayai peristiwa Isra Mi'raj.",
      "Menemani Nabi ï·º bersembunyi di Gua Tsur saat dikejar musuh.",
      "Khalifah pertama dari Khulafaur Rasyidin.",
      "Menginfakkan seluruh harta kekayaannya untuk perjuangan Islam."
    ],
    kata_baru: [
      { kata: "As-Siddiq", arti: "Orang yang sangat membenarkan dan jujur" },
      { kata: "Khalifah", arti: "Pemimpin umat Islam" },
      { kata: "Hijrah", arti: "Perpindahan untuk menjaga keimanan" }
    ],
    skill: "Kesetiaan & Keberanian",
    skill_ikon: "🤝 🛡️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Menjadi teman yang baik dan setia di saat teman kita sedang kesulitan.",
      "Selalu berkata jujur meskipun itu terasa sulit.",
      "Membantu sesama dengan sebagian harta yang kita miliki (bersedekah)."
    ],
    kuis: [
      {
        q: "Gelar apa yang diberikan kepada Abu Bakr karena kejujurannya?",
        opts: ["Al-Faruq", "As-Siddiq", "Al-Amin"],
        a: 1
      },
      {
        q: "Apa salah satu jasa terbesar Abu Bakr saat menjadi Khalifah?",
        opts: ["Membangun kota Baghdad", "Mengumpulkan mushaf Al-Qur'an", "Menemukan ilmu aljabar"],
        a: 1
      },
      {
        q: "Sikap utama apa yang bisa kita teladani dari Abu Bakr kepada Nabi ï·º?",
        opts: ["Kecerdasannya dalam matematika", "Kesetiaan tanpa batas", "Kecepatan berlarinya"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan membela dan membantu temanku yang sedang kesulitan, dan berkata jujur di segala keadaan."
  },
  {
    id: "umar_khattab",
    kategori: "companion",
    nama: "Umar bin Khattab",
    julukan: "Al-Faruq (Pembeda Kebenaran & Kebatilan)",
    tema: "Keadilan, Ketegasan, dan Kepedulian Pemimpin",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu melihat orang yang sangat ditakuti, namun ternyata memiliki hati yang paling lembut saat melihat orang kelaparan?",
      "Beliau adalah Umar bin Khattab, seorang pemimpin besar yang keadilannya dikenang sepanjang sejarah."
    ],
    belajar: {
      siapa: "Umar bin Khattab adalah Khalifah kedua setelah Abu Bakr. Ia diberi gelar 'Al-Faruq' oleh Nabi ï·º.",
      kapan: "Menjadi Khalifah selama 10 tahun (634 â€“ 644 M) pada masa kejayaan awal penyebaran Islam.",
      dilakukan: "Beliau yang mengusulkan pengumpulan Al-Qur'an dan menetapkan kalender Hijriah.",
      kontribusi: "Membangun sistem pemerintahan yang sangat rapi, mendirikan pengadilan, dan mengatur jaminan sosial untuk rakyat miskin.",
      tantangan: "Beliau harus memimpin perluasan wilayah Islam yang sangat cepat sambil memastikan tidak ada satupun rakyatnya, bahkan seekor keledai pun, yang celaka karena kelalaiannya."
    },
    fakta: [
      "Mendapat gelar 'Al-Faruq' karena bisa membedakan kebenaran dan kebatilan dengan tegas.",
      "Sering berpatroli malam hari sendirian untuk memastikan rakyatnya tidak ada yang kelaparan.",
      "Menetapkan kalender Hijriah yang kita gunakan saat ini.",
      "Sangat hidup sederhana meski menjadi pemimpin dari imperium besar."
    ],
    kata_baru: [
      { kata: "Al-Faruq", arti: "Sang Pembeda (antara benar dan salah)" },
      { kata: "Kalender Hijriah", arti: "Sistem penanggalan Islam" }
    ],
    skill: "Keadilan & Tanggung Jawab",
    skill_ikon: "⚖️ ⚔️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Bersikap adil saat bermain bersama teman-teman.",
      "Bertanggung jawab atas tugas yang diberikan kepada kita."
    ],
    kuis: [
      {
        q: "Gelar apa yang diberikan kepada Umar bin Khattab?",
        opts: ["As-Siddiq", "Al-Faruq", "Al-Amin"],
        a: 1
      },
      {
        q: "Siapa yang mengusulkan penetapan kalender Hijriah?",
        opts: ["Abu Bakr", "Umar bin Khattab", "Ali bin Abi Thalib"],
        a: 1
      },
      {
        q: "Kebiasaan apa yang sering dilakukan Umar di malam hari?",
        opts: ["Tidur pulas", "Berpatroli melihat kondisi rakyatnya", "Menghitung harta"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan bersikap adil, misalnya memastikan semua orang mendapat giliran yang sama saat bermain."
  },
  {
    id: "utsman_affan",
    kategori: "companion",
    nama: "Utsman bin Affan",
    julukan: "Pemilik Dua Cahaya (Dzunnurain)",
    tema: "Kedermawanan, Rasa Malu, dan Kesabaran",
    pengantar: [
      "Halo, Young Hero!",
      "Bayangkan kamu adalah orang yang paling kaya di kotamu, tapi kamu memilih memakai hartamu untuk membelikan air minum bagi semua orang tanpa bayaran.",
      "Itulah yang dilakukan oleh Utsman bin Affan, sahabat Nabi yang terkenal dengan kedermawanan dan rasa malunya."
    ],
    belajar: {
      siapa: "Utsman bin Affan adalah Khalifah ketiga. Ia diberi gelar 'Dzunnurain' karena menikahi dua putri Nabi ï·º secara berurutan.",
      kapan: "Menjadi Khalifah selama 12 tahun (644 â€“ 656 M).",
      dilakukan: "Menyumbangkan banyak sekali hartanya, seperti membeli sumur Raumah dari seorang Yahudi untuk diwakafkan kepada umat Islam yang kesulitan air.",
      kontribusi: "Jasa terbesarnya adalah membukukan dan menyatukan bacaan Al-Qur'an (Mushaf Utsmani) yang kita baca sampai hari ini.",
      tantangan: "Pada akhir masa jabatannya, muncul fitnah dan pemberontakan, namun ia memilih bersabar dan tidak melawan agar tidak terjadi pertumpahan darah antar Muslim."
    },
    fakta: [
      "Membeli sumur dengan harga mahal untuk diberikan gratis kepada penduduk Madinah.",
      "Membiayai pasukan Jaisyul 'Usrah saat umat Islam sedang dalam kesulitan keuangan.",
      "Membukukan Al-Qur'an agar bacaannya seragam (Mushaf Utsmani).",
      "Sangat pemalu, bahkan malaikat pun merasa malu kepadanya."
    ],
    kata_baru: [
      { kata: "Dzunnurain", arti: "Pemilik dua cahaya" },
      { kata: "Mushaf Utsmani", arti: "Standar penulisan Al-Qur'an" }
    ],
    skill: "Kedermawanan & Kesabaran",
    skill_ikon: "💰 🕊️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Membagikan makanan atau rezeki kepada teman yang membutuhkan.",
      "Menahan diri dan bersabar saat ada yang menjelek-jelekkan kita."
    ],
    kuis: [
      {
        q: "Apa nama sumur yang dibeli Utsman bin Affan untuk umat Islam?",
        opts: ["Sumur Zamzam", "Sumur Raumah", "Sumur Badar"],
        a: 1
      },
      {
        q: "Apa jasa terbesar Utsman terkait Al-Qur'an?",
        opts: ["Menjadi orang pertama yang menghafalnya", "Menyatukan penulisannya menjadi Mushaf Utsmani", "Menemukan Al-Qur'an di gua"],
        a: 1
      },
      {
        q: "Gelar Utsman bin Affan adalah Dzunnurain, yang artinya?",
        opts: ["Pemilik dua pedang", "Pemilik dua cahaya", "Pemilik dua sumur"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan menyisihkan sebagian uang jajanku untuk bersedekah atau berbagi makanan dengan seseorang."
  },
  {
    id: "ali_thalib",
    kategori: "companion",
    nama: "Ali bin Abi Thalib",
    julukan: "Gerbang Ilmu Pengetahuan (Babul Ilm)",
    tema: "Keberanian, Kecerdasan, dan Hikmah",
    pengantar: [
      "Halo, Young Hero!",
      "Jika ada anak kecil yang berani mempertaruhkan nyawanya tidur di kasur Nabi ï·º agar Nabi bisa lolos dari kepungan musuh, dia adalah pahlawan sejati.",
      "Itulah Ali bin Abi Thalib, sepupu sekaligus menantu Nabi, sang pendekar berani dan cendekiawan yang luar biasa cerdas."
    ],
    belajar: {
      siapa: "Ali bin Abi Thalib adalah anak dari paman Nabi, Abu Thalib, dan merupakan Khalifah keempat. Ia memeluk Islam sejak masih anak-anak.",
      kapan: "Ia tumbuh besar di rumah Nabi ï·º dan menjadi Khalifah pada 656 â€“ 661 M.",
      dilakukan: "Menggantikan posisi tidur Nabi ï·º saat malam hijrah, dan menjadi pemegang panji utama dalam berbagai pertempuran penting.",
      kontribusi: "Selain keberaniannya, Ali dikenal sebagai sumber ilmu pengetahuan, hikmah, dan peradilan dalam Islam. Banyak kata-kata bijaknya (nahjul balaghah) yang dipelajari hingga kini.",
      tantangan: "Menjadi Khalifah pada masa fitnah dan perang saudara yang paling sulit dalam sejarah awal Islam, namun ia tetap teguh memegang prinsip kebenaran."
    },
    fakta: [
      "Salah satu dari kelompok pertama yang masuk Islam (Assabiqunal Awwalun) dari kalangan anak-anak.",
      "Pemegang pedang Zulfiqar yang legendaris.",
      "Menantu Nabi Muhammad ï·º, suami dari Fatimah Az-Zahra.",
      "Dikenal dengan julukan 'Babul Ilm' (Pintunya Ilmu)."
    ],
    kata_baru: [
      { kata: "Babul Ilm", arti: "Pintu/Gerbang Ilmu Pengetahuan" },
      { kata: "Zulfiqar", arti: "Nama pedang legendaris milik Ali" }
    ],
    skill: "Keberanian & Pengetahuan",
    skill_ikon: "🗡️ 📖",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Berani membela teman yang dijahati atau di-bully.",
      "Giat menuntut ilmu dan suka membaca buku."
    ],
    kuis: [
      {
        q: "Siapa yang menggantikan tidur di ranjang Nabi ï·º pada malam hijrah?",
        opts: ["Abu Bakr", "Ali bin Abi Thalib", "Umar bin Khattab"],
        a: 1
      },
      {
        q: "Julukan apa yang sering dikaitkan dengan kecerdasan Ali bin Abi Thalib?",
        opts: ["As-Siddiq", "Babul Ilm (Pintu Ilmu)", "Saifullah (Pedang Allah)"],
        a: 1
      },
      {
        q: "Dari kalangan mana Ali masuk Islam pertama kali?",
        opts: ["Wanita", "Anak-anak", "Lansia"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan membela satu kebenaran atau belajar satu hal baru yang bermanfaat."
  },
  {
    id: "bilal_rabah",
    kategori: "companion",
    nama: "Bilal bin Rabah",
    julukan: "Muazin Pertama Rasulullah",
    tema: "Keteguhan Iman dan Kesetaraan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu mendengar suara azan yang indah memanggil orang untuk salat? Tahukah kamu siapa orang pertama di dunia yang mengumandangkan azan?",
      "Dia adalah Bilal bin Rabah, seorang mantan budak yang derajatnya diangkat tinggi oleh Islam karena keteguhan imannya."
    ],
    belajar: {
      siapa: "Bilal bin Rabah adalah seorang sahabat dari Habasyah (Ethiopia) yang awalnya merupakan budak Umayyah bin Khalaf.",
      kapan: "Ia mengalami penyiksaan berat di awal mula Islam di Makkah sebelum akhirnya dibebaskan oleh Abu Bakr.",
      dilakukan: "Meskipun disiksa dengan batu besar di padang pasir yang panas, ia tetap mengulang kata 'Ahad, Ahad' (Allah Maha Esa).",
      kontribusi: "Menjadi muazin (pengumandang azan) pertama dalam sejarah Islam karena memiliki suara yang sangat lantang dan merdu.",
      tantangan: "Harus bertahan dari siksaan fisik yang luar biasa demi mempertahankan keyakinannya saat menjadi budak."
    },
    fakta: [
      "Orang pertama yang mengumandangkan azan di dalam sejarah Islam.",
      "Dimerdekakan (dibeli dan dibebaskan) oleh Abu Bakr As-Siddiq.",
      "Kata 'Ahad! Ahad!' menjadi simbol keteguhan iman yang tak tergoyahkan.",
      "Suara terompahnya terdengar di surga menurut hadis Nabi ï·º."
    ],
    kata_baru: [
      { kata: "Muazin", arti: "Orang yang mengumandangkan azan" },
      { kata: "Ahad", arti: "Yang Maha Esa (Satu)" }
    ],
    skill: "Keteguhan Iman & Suara Lantang",
    skill_ikon: "🗣️ ⛓️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Tetap melakukan kebaikan (seperti salat) meskipun sedang lelah.",
      "Tidak membeda-bedakan teman berdasarkan warna kulit atau status keluarga."
    ],
    kuis: [
      {
        q: "Siapa orang pertama yang mengumandangkan azan dalam Islam?",
        opts: ["Abu Bakr", "Bilal bin Rabah", "Umar bin Khattab"],
        a: 1
      },
      {
        q: "Kata apa yang terus diucapkan Bilal saat disiksa oleh majikannya?",
        opts: ["Ampun!", "Ahad, Ahad!", "Tolong!"],
        a: 1
      },
      {
        q: "Siapa sahabat yang membeli dan memerdekakan Bilal?",
        opts: ["Utsman bin Affan", "Abu Bakr As-Siddiq", "Ali bin Abi Thalib"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan mengajak satu orang temanku (atau saudaraku) untuk melakukan suatu kebaikan bersama, seperti salat tepat waktu."
  },
  {
    id: "ibn_haytham",
    kategori: "scientist",
    discoveryDest: "age_of_knowledge",
    nama: "Ibn al-Haytham",
    julukan: "Bapak Optika Modern (965 â€“ 1040 M)",
    tema: "Belajar melihat dunia dengan teliti",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu bertanya mengapa kita bisa melihat benda? Bagaimana cahaya masuk ke mata? Dan apakah semua dugaan yang kita miliki pasti benar?",
      "Lebih dari seribu tahun yang lalu, seorang ilmuwan Muslim bernama Ibn al-Haytham mengajukan pertanyaan-pertanyaan semacam itu dan mengubah dunia sains selamanya."
    ],
    belajar: {
      siapa: "Ibn al-Haytham (dikenal di Barat sebagai Alhazen) adalah ilmuwan hebat yang ahli di bidang matematika, astronomi, dan fisika.",
      kapan: "Beliau lahir di Basra (Irak) sekitar tahun 965 M dan banyak berkarya di Kairo, Mesir.",
      dilakukan: "Ia mempelajari sifat cahaya dan membuktikan bahwa kita bisa melihat karena cahaya memantul dari benda dan masuk ke mata kita.",
      kontribusi: "Menulis Kitab al-Manazir (Buku Optik) yang menjadi rujukan dunia. Ia juga perintis 'Metode Ilmiah' (Observasi â†’ Eksperimen â†’ Kesimpulan).",
      tantangan: "Untuk menghindari amarah penguasa yang memintanya membendung Sungai Nil (yang saat itu mustahil), ia pura-pura gila selama bertahun-tahun, yang memberinya waktu untuk menulis mahakaryanya."
    },
    fakta: [
      "Lahir sekitar 965 M, dikenal di dunia Latin sebagai Alhazen.",
      "Menulis Kitab al-Manazir yang sangat tebal tentang cahaya.",
      "Menggunakan kamera obscura (kamar gelap) untuk membuktikan sifat cahaya.",
      "Selalu menggunakan eksperimen nyata untuk menguji dugaannya."
    ],
    kata_baru: [
      { kata: "Optika", arti: "Ilmu yang mempelajari cahaya dan penglihatan" },
      { kata: "Eksperimen", arti: "Percobaan untuk membuktikan kebenaran suatu teori" },
      { kata: "Kamera Obscura", arti: "Ruang gelap yang memproyeksikan gambar terbalik melalui lubang kecil" }
    ],
    skill: "Berpikir Kritis & Teliti",
    praktik: [
      "Jangan terburu-buru mengambil kesimpulan dari sebuah berita.",
      "Periksa informasi atau lakukan percobaan sebelum mempercayainya.",
      "Jangan takut bertanya jika ada hal yang membuatmu penasaran."
    ],
    kuis: [
      {
        q: "Di dunia Latin, Ibn al-Haytham dikenal dengan nama...",
        opts: ["Avicenna", "Averroes", "Alhazen"],
        a: 2
      },
      {
        q: "Bagaimana teori penglihatan menurut Ibn al-Haytham?",
        opts: ["Mata memancarkan cahaya ke benda", "Cahaya memantul dari benda masuk ke mata", "Benda bersinar dari dalam mata"],
        a: 1
      },
      {
        q: "Apa nama buku paling terkenal karyanya?",
        opts: ["Kitab al-Manazir", "The Canon of Medicine", "Al-Jabr"],
        a: 0
      }
    ],
    misi: "My Little Scientist Journal: Hari ini aku akan mengamati satu benda di rumah, membuat dugaan tentang cara kerjanya, lalu mencarinya di ensiklopedia!"
  },
  {
    id: "khalid_walid",
    kategori: "commander",
    nama: "Khalid ibn al-Walid",
    julukan: "Pedang Allah yang Terhunus (585 â€“ 642 M)",
    tema: "Pemimpin tangguh yang taat pada aturan",
    pengantar: [
      "Halo, Young Hero!",
      "Jika kamu bermain game strategi, pasti kamu butuh jenderal yang hebat untuk memenangkan pertandingan, bukan?",
      "Dalam sejarah Islam, ada seorang jenderal jenius yang tidak pernah kalah dalam ratusan pertempuran. Namun, pelajaran terbesarnya bukanlah tentang perang, melainkan tentang ketaatan dan keikhlasan."
    ],
    belajar: {
      siapa: "Khalid ibn al-Walid adalah salah satu panglima militer terhebat sepanjang masa, bergelar 'Saifullah' (Pedang Allah).",
      kapan: "Ia hidup di zaman Nabi Muhammad ï·º hingga masa pemerintahan Khalifah Abu Bakr dan Umar bin Khattab.",
      dilakukan: "Ia memimpin pasukan Muslim dalam pertempuran-pertempuran epik melawan dua kekaisaran raksasa sekaligus: Romawi dan Persia.",
      kontribusi: "Menyatukan berbagai wilayah di bawah panji Islam dan menciptakan strategi militer brilian yang dipelajari hingga hari ini.",
      tantangan: "Saat berada di puncak kejayaan, Khalifah Umar memberhentikannya dari jabatan panglima utama. Alih-alih marah, Khalid menerima dengan ikhlas dan tetap bertempur sebagai prajurit biasa."
    },
    fakta: [
      "Tidak pernah kalah dalam lebih dari seratus pertempuran penting.",
      "Gelar 'Pedang Allah yang Terhunus' diberikan langsung oleh Rasulullah ï·º.",
      "Terkenal dengan strategi serangan kilat dan mobilitas pasukan yang luar biasa.",
      "Rela turun pangkat demi ketaatan kepada pemimpin (Khalifah Umar)."
    ],
    kata_baru: [
      { kata: "Strategi", arti: "Rencana cermat untuk mencapai tujuan" },
      { kata: "Saifullah", arti: "Pedang Allah" },
      { kata: "Ikhlas", arti: "Melakukan sesuatu murni karena Allah, tanpa mengharap pujian manusia" }
    ],
    skill: "Kepemimpinan & Keikhlasan",
    praktik: [
      "Belajar mengambil keputusan yang tenang dalam situasi sulit.",
      "Tetap rendah hati saat menang, tidak sombong atas prestasi.",
      "Menerima aturan dan keputusan pemimpin/guru dengan lapang dada."
    ],
    kuis: [
      {
        q: "Apa gelar yang diberikan kepada Khalid ibn al-Walid?",
        opts: ["Singa Padang Pasir", "Pedang Allah yang Terhunus", "Penakluk Dua Samudra"],
        a: 1
      },
      {
        q: "Sikap apa yang ditunjukkan Khalid ketika diberhentikan dari jabatan panglima oleh Khalifah Umar?",
        opts: ["Marah dan memberontak", "Keluar dari pasukan militer", "Ikhlas dan tetap berjuang sebagai prajurit biasa"],
        a: 2
      },
      {
        q: "Pelajaran utama dari kisah Khalid adalah...",
        opts: ["Kepahlawanan bukan cuma menang perang, tapi ketaatan dan keikhlasan", "Cara menyerang dengan kuda yang cepat", "Selalu menuntut posisi tertinggi"],
        a: 0
      }
    ],
    misi: "Hari ini aku akan berbesar hati mengalah demi teman atau saudaraku, dan melaksanakan tugas dari orang tua tanpa mengeluh!"
  },
  {
    id: "bukhari",
    kategori: "builder",
    nama: "Imam Al-Bukhari",
    julukan: "Penjaga Kata-Kata Nabi (810 â€“ 870 M)",
    tema: "Ketelitian, Disiplin, dan Standar Tinggi dalam Ilmu",
    pengantar: [
      "Halo, Young Hero!",
      "Bayangkan jika ada sebuah pesan berantai yang disampaikan ke ribuan orang. Bagaimana kamu bisa memastikan pesan itu tidak berubah dari aslinya?",
      "Inilah tugas raksasa yang diambil oleh Imam Al-Bukhari. Ia menghabiskan hidupnya bepergian ke berbagai negara demi mengumpulkan dan menyeleksi keaslian kata-kata Nabi ï·º (Hadis)."
    ],
    belajar: {
      siapa: "Muhammad ibn Ismail Al-Bukhari adalah seorang ulama ahli hadis paling terkenal dalam sejarah Islam.",
      kapan: "Lahir di Bukhara (sekarang Uzbekistan) pada tahun 810 M.",
      dilakukan: "Ia menghafal ratusan ribu hadis, lalu menyeleksi dengan sangat ketat mana yang benar-benar sahih (valid) bersumber dari Nabi Muhammad ï·º.",
      kontribusi: "Menyusun kitab Shahih Al-Bukhari, yang diakui oleh umat Islam sebagai kitab paling tepercaya setelah Al-Qur'an.",
      tantangan: "Ia harus berjalan kaki dan berkuda melintasi berbagai benua selama puluhan tahun, seringkali jatuh miskin demi membiayai perjalanan mencari ilmu."
    },
    fakta: [
      "Hanya memasukkan sekitar 7.000-an hadis dari 600.000 lebih riwayat yang ia hafal, karena standarnya yang sangat ketat.",
      "Setiap kali akan menuliskan satu hadis dalam kitabnya, ia selalu mandi dan salat dua rakaat terlebih dahulu.",
      "Punya memori fotografis yang luar biasa sejak anak-anak.",
      "Perjalanan menuntut ilmunya meliputi wilayah Bukhara, Mekkah, Madinah, Irak, Mesir, hingga Suriah."
    ],
    kata_baru: [
      { kata: "Hadis", arti: "Perkataan, perbuatan, atau ketetapan Nabi Muhammad ï·º" },
      { kata: "Sahih", arti: "Valid, benar, dan tepercaya sumbernya" },
      { kata: "Memori Fotografis", arti: "Kemampuan mengingat sesuatu dengan sangat detail hanya dengan melihatnya" }
    ],
    skill: "Ketekunan & Disiplin Belajar",
    praktik: [
      "Sabar dan disiplin saat mempelajari hal yang baru.",
      "Tidak menyebarkan berita atau pesan jika kita tidak yakin kebenarannya (anti-hoax).",
      "Menghargai para ilmuwan dan ulama yang menjaga ilmu pengetahuan."
    ],
    kuis: [
      {
        q: "Karya terbesar Imam Al-Bukhari bernama...",
        opts: ["Kitab al-Manazir", "Shahih Al-Bukhari", "Al-Qanun fi at-Tibb"],
        a: 1
      },
      {
        q: "Mengapa dari ratusan ribu hadis yang dihafal, hanya sebagian kecil yang dimasukkan ke kitabnya?",
        opts: ["Karena kertasnya habis", "Karena ia lupa hadis yang lain", "Karena standarnya sangat ketat untuk memastikan keaslian"],
        a: 2
      },
      {
        q: "Sebelum menulis satu hadis di kitabnya, apa yang biasa dilakukan Imam Al-Bukhari?",
        opts: ["Makan besar", "Mandi dan shalat dua rakaat", "Berlari mengelilingi lapangan"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan memeriksa dua kali (double check) kebenaran suatu informasi sebelum mempercayainya, dan fokus belajar satu bab pelajaran tanpa gangguan!"
  }  ,
  {
    id: "ibnu_sina",
    kategori: "scientist",
    nama: "Ibnu Sina (Avicenna)",
    julukan: "Bapak Kedokteran Modern (980 - 1037 M)",
    tema: "Rasa Ingin Tahu, Literasi, dan Kesehatan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu penasaran bagaimana tubuh kita bekerja, atau mengapa kita bisa sakit?",
      "Ribuan tahun lalu, seorang pemuda bernama Ibnu Sina memiliki rasa ingin tahu yang sama. Ia menjadi dokter yang sangat hebat yang bukunya digunakan di seluruh dunia selama ratusan tahun!"
    ],
    belajar: {
      siapa: "Ibnu Sina adalah seorang dokter, astronom, dan pemikir besar dari Bukhara.",
      kapan: "Ia hidup pada masa Keemasan Islam (Golden Age) di abad ke-10 dan ke-11.",
      dilakukan: "Ia menguasai banyak ilmu pengetahuan sejak kecil dan mulai mengobati orang saat masih remaja.",
      kontribusi: "Menulis kitab Al-Qanun fi at-Tibb (The Canon of Medicine), yang menjadi buku panduan kedokteran utama di Eropa dan dunia Islam selama berabad-abad.",
      tantangan: "Banyak perpustakaan yang hancur karena perang di zamannya, sehingga ia harus membaca siang malam dan mengingat seluruh isinya sebelum buku-buku itu hilang."
    },
    fakta: [
      "Hafal Al-Qur'an pada usia 10 tahun.",
      "Menjadi dokter ahli pada usia 18 tahun dan menyembuhkan seorang raja.",
      "Menulis lebih dari 400 karya tentang berbagai ilmu pengetahuan.",
      "Menemukan prinsip bahwa penyakit dapat menyebar melalui air dan udara."
    ],
    kata_baru: [
      { kata: "Kedokteran", arti: "Ilmu yang mempelajari tentang penyakit dan penyembuhannya" },
      { kata: "Karantina", arti: "Pemisahan orang sakit agar tidak menularkan penyakit (prinsip dari Ibnu Sina)" },
      { kata: "Literasi", arti: "Kemampuan membaca, menulis, dan memahami ilmu pengetahuan" }
    ],
    skill: "Rasa Ingin Tahu & Kesehatan",
    praktik: [
      "Menjaga kesehatan tubuh dengan makan makanan bergizi dan berolahraga.",
      "Rajin membaca buku untuk memperluas pengetahuan.",
      "Tidak mudah menyerah saat kesulitan memahami suatu pelajaran."
    ],
    kuis: [
      {
        q: "Apa nama kitab terkenal karya Ibnu Sina tentang kedokteran?",
        opts: ["Shahih Al-Bukhari", "Al-Qanun fi at-Tibb", "Muqaddimah"],
        a: 1
      },
      {
        q: "Pada usia berapa Ibnu Sina sudah menghafal Al-Qur'an?",
        opts: ["10 tahun", "15 tahun", "20 tahun"],
        a: 0
      },
      {
        q: "Apa prinsip penyebaran penyakit yang diungkapkan Ibnu Sina ratusan tahun lalu?",
        opts: ["Melalui sihir", "Melalui pikiran", "Melalui udara dan air"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan membaca minimal 5 halaman buku pengetahuan dan makan sayur agar tubuhku kuat!"
  },
  {
    id: "muhammad_alfatih",
    kategori: "commander",
    nama: "Sultan Muhammad Al-Fatih",
    julukan: "Penakluk Konstantinopel (1432 - 1481 M)",
    tema: "Visi Besar, Persiapan, dan Pantang Menyerah",
    pengantar: [
      "Halo, Young Hero!",
      "Bayangkan sebuah benteng raksasa yang tidak pernah bisa ditembus oleh siapapun selama lebih dari 1000 tahun. Bisakah kamu menembusnya?",
      "Pemuda bernama Muhammad Al-Fatih punya visi besar dan persiapan yang sangat matang untuk menaklukkan benteng tersebut, Konstantinopel!"
    ],
    belajar: {
      siapa: "Sultan Muhammad II atau Al-Fatih, Sultan Turki Utsmani (Ottoman).",
      kapan: "Ia menaklukkan kota Konstantinopel pada usia 21 tahun di tahun 1453 M.",
      dilakukan: "Ia merencanakan strategi perang yang sangat jenius, termasuk mengangkat kapal-kapal perangnya melintasi bukit daratan!",
      kontribusi: "Menyatukan dua benua (Eropa dan Asia) dan mengubah Konstantinopel menjadi Istanbul, pusat peradaban yang makmur.",
      tantangan: "Tembok Konstantinopel adalah yang terkuat di dunia, dan rantai raksasa menghalangi laut, tapi ia tidak pernah menyerah mencari cara."
    },
    fakta: [
      "Menguasai setidaknya 6 bahasa sejak muda.",
      "Membangun meriam terbesar di zamannya (Meriam Basilica).",
      "Sangat menghormati ulama dan guru-gurunya.",
      "Memimpin pasukan menyeberangkan puluhan kapal lewat bukit berbatu hanya dalam satu malam!"
    ],
    kata_baru: [
      { kata: "Visi", arti: "Tujuan dan pandangan jauh ke depan" },
      { kata: "Inovasi", arti: "Penemuan ide atau cara baru yang kreatif" },
      { kata: "Penakluk", arti: "Orang yang berhasil membuka atau menguasai suatu wilayah" }
    ],
    skill: "Visi Besar & Inovasi",
    praktik: [
      "Memiliki cita-cita yang tinggi dan berani bermimpi besar.",
      "Mempersiapkan diri dengan belajar keras dan berlatih setiap hari.",
      "Mencari solusi kreatif dan 'out of the box' saat menghadapi masalah."
    ],
    kuis: [
      {
        q: "Kota apa yang berhasil ditaklukkan oleh Muhammad Al-Fatih?",
        opts: ["Mekkah", "Konstantinopel", "Andalusia"],
        a: 1
      },
      {
        q: "Strategi jenius apa yang dilakukannya untuk melewati rantai raksasa di laut?",
        opts: ["Mengangkat kapal melewati bukit daratan", "Menyelam di bawah laut", "Membakar laut"],
        a: 0
      },
      {
        q: "Berapa usia Muhammad Al-Fatih saat menaklukkan Konstantinopel?",
        opts: ["21 tahun", "35 tahun", "40 tahun"],
        a: 0
      }
    ],
    misi: "Hari ini aku akan menuliskan 1 cita-cita besarku, dan membereskan tempat tidur atau mejaku dengan sangat rapi dan teliti!"
  },
  {
    id: "thoriq_bin_ziyad",
    kategori: "commander",
    nama: "Thoriq bin Ziyad",
    julukan: "Penakluk Andalusia (Wafat 720 M)",
    tema: "Keberanian Ekstrem dan Keyakinan Kuat",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana rasanya memimpin pasukan kecil melawan pasukan raksasa, di sebuah tanah yang tidak kamu kenal?",
      "Thoriq bin Ziyad melakukan hal tersebut, ia menyeberangi lautan, dan menunjukkan keberanian tanpa batas untuk membawa kedamaian ke Andalusia (Spanyol)."
    ],
    belajar: {
      siapa: "Seorang panglima perang Muslim dari Afrika Utara yang gagah berani.",
      kapan: "Ia memimpin pembukaan wilayah Andalusia pada tahun 711 M.",
      dilakukan: "Ia membawa pasukan menyeberangi selat yang kini dinamai dengan namanya (Selat Gibraltar / Jabal Thariq).",
      kontribusi: "Memulai era keemasan Islam di Spanyol (Andalusia) yang berlangsung lebih dari 700 tahun, membawa peradaban ilmu pengetahuan ke Eropa.",
      tantangan: "Pasukannya sangat sedikit dibanding pasukan musuh pimpinan Raja Roderic, tapi semangat pasukannya tidak pernah luntur."
    },
    fakta: [
      "Nama Selat Gibraltar berasal dari kata 'Jabal Thariq' yang berarti Gunung Thariq.",
      "Pidatonya yang sangat menginspirasi sebelum perang membuat pasukannya tak kenal takut.",
      "Kehadirannya membebaskan rakyat Andalusia yang saat itu tertindas oleh rajanya sendiri.",
      "Setelah sukses besar, ia tetap hidup sederhana dan tidak tamak akan harta."
    ],
    kata_baru: [
      { kata: "Andalusia", arti: "Wilayah di semenanjung Iberia (Spanyol dan Portugal sekarang) yang pernah dikuasai umat Islam" },
      { kata: "Selat", arti: "Lautan sempit di antara dua daratan" },
      { kata: "Tekad", arti: "Kemauan dan niat yang sangat kuat" }
    ],
    skill: "Keberanian & Kepemimpinan",
    praktik: [
      "Maju terus dan tidak takut mencoba hal baru yang positif.",
      "Menyemangati teman-teman yang sedang merasa sedih atau putus asa.",
      "Bersikap adil dan membela mereka yang lemah atau dibully."
    ],
    kuis: [
      {
        q: "Selat yang dilewati oleh pasukan Thoriq kini diberi nama apa?",
        opts: ["Selat Sunda", "Selat Gibraltar", "Selat Bosphorus"],
        a: 1
      },
      {
        q: "Wilayah Eropa mana yang dibuka oleh pasukan Thoriq bin Ziyad?",
        opts: ["Inggris", "Andalusia (Spanyol)", "Rusia"],
        a: 1
      },
      {
        q: "Apa nama gunung yang dinamai dari namanya?",
        opts: ["Jabal Uhud", "Jabal Thariq", "Jabal Rahmah"],
        a: 1
      }
    ],
    misi: "Hari ini aku akan memberanikan diri untuk memimpin doa atau berbicara di depan kelas/keluarga, dan memberikan kata-kata penyemangat untuk satu orang teman!"
  },
  {
    id: "saad_abi_waqqas",
    kategori: "companion",
    nama: "Saad bin Abi Waqqas",
    julukan: "Pemanah Pertama Islam (595 - 674 M)",
    tema: "Keteguhan Iman dan Keahlian Fisik",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu berlatih olahraga memanah? Ia membutuhkan fokus dan kekuatan yang tinggi.",
      "Saad bin Abi Waqqas adalah pahlawan ahli memanah pertama dalam Islam yang doanya selalu dikabulkan oleh Allah!"
    ],
    belajar: {
      siapa: "Salah satu sahabat Nabi yang dijamin masuk surga, dan paman Nabi dari pihak ibu.",
      kapan: "Masuk Islam pada usia sangat muda (sekitar 17 tahun) di awal kenabian.",
      dilakukan: "Ia memimpin pasukan Muslim memenangkan Perang Qadisiyyah dan membangun fondasi penyebaran Islam di Persia (Iran) dan bahkan sampai ke China.",
      kontribusi: "Membumikan agama Islam di wilayah Persia dan dikenang di Tiongkok sebagai penyebar Islam pertama ke sana.",
      tantangan: "Ibunya pernah mogok makan agar ia keluar dari Islam, tapi Saad tetap teguh mempertahankan imannya dengan penuh hormat pada ibunya."
    },
    fakta: [
      "Orang pertama yang melepaskan anak panah di jalan Allah.",
      "Nabi Muhammad SAW menjamin bahwa setiap doa Saad akan dikabulkan.",
      "Memiliki masjid yang didedikasikan untuknya di Guangzhou, China.",
      "Menjadi panglima utama dalam penaklukan Kekaisaran Persia."
    ],
    kata_baru: [
      { kata: "Qadisiyyah", arti: "Nama pertempuran besar antara Muslim dan Persia" },
      { kata: "Keteguhan", arti: "Sikap kuat, tidak mudah goyah atau berubah" },
      { kata: "Fokus", arti: "Pemusatan perhatian pada satu titik (seperti saat memanah)" }
    ],
    skill: "Fokus & Keteguhan Hati",
    praktik: [
      "Berbakti kepada orang tua dengan tetap menjaga ketaatan pada Allah.",
      "Melatih fisik dan kesehatan dengan olahraga (seperti berenang, memanah, atau berkuda).",
      "Selalu menjaga shalat dan berdoa sungguh-sungguh."
    ],
    kuis: [
      {
        q: "Saad bin Abi Waqqas dikenal memiliki keahlian senjata apa?",
        opts: ["Pedang", "Panah", "Meriam"],
        a: 1
      },
      {
        q: "Kehebatan spiritual apa yang dimiliki Saad dari doa Nabi?",
        opts: ["Bisa terbang", "Doanya selalu dikabulkan", "Melihat masa depan"],
        a: 1
      },
      {
        q: "Selain di Arab dan Persia, kemana konon Saad menyebarkan Islam?",
        opts: ["China", "Amerika", "Australia"],
        a: 0
      }
    ],
    misi: "Hari ini aku akan berolahraga atau melatih keseimbangan tubuhku selama 15 menit, dan membantu ibuku dengan ikhlas!"
  },
  {
    id: "hamzah",
    kategori: "companion",
    nama: "Hamzah bin Abdul Muthalib",
    julukan: "Singa Allah (568 - 625 M)",
    tema: "Keberanian dan Perlindungan Tanpa Kompromi",
    pengantar: [
      "Halo, Young Hero!",
      "Jika ada seseorang yang menyakiti keluargamu, apa yang akan kamu lakukan? Kamu pasti akan membela mereka dengan segala kekuatan.",
      "Itulah yang dilakukan Hamzah. Beliau marah besar ketika keponakannya, Nabi Muhammad, dihina, lalu ia maju bak singa mengumumkan keislamannya!"
    ],
    belajar: {
      siapa: "Paman Nabi Muhammad SAW yang seumuran dengan beliau, dikenal paling kuat dan jago gulat.",
      kapan: "Masuk Islam di masa-masa sulit saat kaum Muslimin masih sangat tertindas di Makkah.",
      dilakukan: "Melindungi Nabi dari gangguan tokoh-tokoh Quraisy yang sebelumnya bertindak semena-mena.",
      kontribusi: "Gugur sebagai syuhada utama (Sayyidush Syuhada) dalam Perang Uhud setelah bertarung dengan sangat luar biasa.",
      tantangan: "Harus melawan teman-teman lamanya di Makkah demi membela kebenaran."
    },
    fakta: [
      "Digelari 'Asadullah' (Singa Allah) dan 'Asad Rasulillah' (Singa Rasul-Nya).",
      "Dikenal sebagai pemburu singa yang berani di gurun.",
      "Masuk Islam awalnya karena marah Nabi Muhammad dihina, kemudian Islam merasuk ke hatinya dengan tulus.",
      "Bertarung dengan dua pedang sekaligus saat Perang Uhud."
    ],
    kata_baru: [
      { kata: "Syuhada", arti: "Orang yang gugur dalam membela agama Allah (Syahid)" },
      { kata: "Asadullah", arti: "Singa Allah" },
      { kata: "Perlindungan", arti: "Tindakan menjaga seseorang dari bahaya" }
    ],
    skill: "Kekuatan & Perlindungan",
    praktik: [
      "Menggunakan kekuatan fisik atau kepintaran kita untuk melindungi yang lemah.",
      "Tidak diam saja saat melihat ketidakadilan.",
      "Berani mengakui kebenaran di depan umum."
    ],
    kuis: [
      {
        q: "Gelar apa yang diberikan kepada Hamzah?",
        opts: ["Pedang Allah", "Singa Padang Pasir", "Singa Allah (Asadullah)"],
        a: 2
      },
      {
        q: "Siapa sebenarnya Hamzah bagi Nabi Muhammad SAW?",
        opts: ["Kakaknya", "Pamannya", "Tetangganya"],
        a: 1
      },
      {
        q: "Hamzah gugur sebagai syahid dalam perang apa?",
        opts: ["Perang Badar", "Perang Khandaq", "Perang Uhud"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan membela satu orang yang diejek atau butuh bantuan, dan berani berkata yang benar walaupun sulit!"
  },
  {
    id: "harun_ar_rasyid",
    kategori: "builder",
    nama: "Harun Ar-Rasyid",
    julukan: "Khalifah Abbasiyah (763–809 M)",
    tema: "Kepemimpinan, Ilmu Pengetahuan, dan Kedermawanan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu membayangkan hidup di sebuah kota yang dipenuhi perpustakaan besar, ilmuwan hebat, dan sekolah yang ramai dengan anak-anak yang gemar belajar?",
      "Tokoh yang membuat suasana itu semakin berkembang adalah Harun Ar-Rasyid, seorang pemimpin bijaksana yang mencintai ilmu dan membantu lahirnya masa keemasan peradaban Islam."
    ],
    belajar: {
      siapa: "Harun Ar-Rasyid adalah khalifah terkenal dari Dinasti Abbasiyah yang memimpin dengan semangat membangun ilmu dan kesejahteraan rakyat.",
      kapan: "Ia hidup pada abad ke-8 hingga awal abad ke-9, saat Kota Baghdad menjadi pusat dunia.",
      dilakukan: "Ia mendukung pembangunan perpustakaan, sekolah, rumah sakit, dan mengundang para ilmuwan untuk belajar serta menulis buku.",
      kontribusi: "Warisan terbesarnya adalah menjadikan Baghdad sebagai pusat ilmu pengetahuan yang menginspirasi perkembangan sains, matematika, dan budaya.",
      tantangan: "Memimpin wilayah yang sangat luas bukan hal mudah. Harun Ar-Rasyid menjaga persatuan dengan pemerintahan yang teratur, mendengarkan nasihat para ulama, dan memperhatikan kebutuhan rakyat."
    },
    fakta: [
      "Baghdad menjadi salah satu kota paling maju di dunia pada masanya.",
      "Ia sangat menghargai guru, penulis, dan ilmuwan.",
      "Banyak perpustakaan besar berkembang saat pemerintahannya.",
      "Ia dikenal sering membantu rakyat yang membutuhkan secara diam-diam."
    ],
    kata_baru: [
      {
        kata: "Khalifah",
        arti: "Pemimpin umat Islam yang mengatur pemerintahan."
      },
      {
        kata: "Baghdad",
        arti: "Ibu kota Dinasti Abbasiyah yang menjadi pusat ilmu."
      },
      {
        kata: "Perpustakaan",
        arti: "Tempat menyimpan dan membaca banyak buku."
      }
    ],
    skill: "Memimpin & Mencintai Ilmu",
    skill_ikon: "👑 📚",
    discoveryDest: "builders_civ",
    praktik: [
      "Rajin membaca buku selama 15 menit setiap hari.",
      "Menghargai guru dan teman yang suka berbagi ilmu.",
      "Menyumbangkan buku yang masih layak kepada perpustakaan atau teman."
    ],
    kuis: [
      {
        q: "Kota apakah yang berkembang menjadi pusat ilmu saat Harun Ar-Rasyid memimpin?",
        opts: [
          "Damaskus",
          "Baghdad",
          "Madinah"
        ],
        a: 1
      },
      {
        q: "Apa yang paling didukung oleh Harun Ar-Rasyid?",
        opts: [
          "Ilmu pengetahuan",
          "Permainan perang",
          "Perburuan hewan"
        ],
        a: 0
      },
      {
        q: "Mengapa Harun Ar-Rasyid dikenang dalam sejarah?",
        opts: [
          "Karena membangun benteng terbesar",
          "Karena menjadi pelaut hebat",
          "Karena membantu berkembangnya masa keemasan ilmu pengetahuan"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan membaca satu halaman buku dan berbagi satu ilmu baru kepada orang lain."
  },
  {
    id: "umar_bin_abdul_aziz",
    kategori: "companion",
    nama: "Umar bin Abdul Aziz",
    julukan: "Khalifah Adil (682–720 M)",
    tema: "Keadilan, Amanah, dan Kesederhanaan",
    pengantar: [
      "Halo, Young Hero!",
      "Kalau kamu menjadi pemimpin, apakah kamu akan memilih hidup mewah atau menggunakan hartamu untuk membantu orang lain agar hidup mereka lebih baik?",
      "Umar bin Abdul Aziz adalah seorang khalifah yang terkenal karena kejujuran, hidup sederhana, dan selalu mengutamakan keadilan bagi semua orang."
    ],
    belajar: {
      siapa: "Umar bin Abdul Aziz adalah khalifah dari Dinasti Umayyah yang sering disebut sebagai pemimpin paling adil setelah Khulafaur Rasyidin.",
      kapan: "Ia hidup pada akhir abad ke-7 hingga awal abad ke-8 Masehi.",
      dilakukan: "Ia memperbaiki pemerintahan, mengembalikan harta yang bukan miliknya, dan memastikan bantuan sampai kepada rakyat yang membutuhkan.",
      kontribusi: "Ia menunjukkan bahwa pemimpin yang jujur dapat membawa kemakmuran dan membuat rakyat merasa aman serta dihargai.",
      tantangan: "Ia menghadapi kebiasaan pejabat yang hidup berlebihan. Dengan keberanian dan keteguhan, ia memilih hidup sederhana dan memberi teladan terlebih dahulu."
    },
    fakta: [
      "Ia mematikan lampu negara saat mengurus urusan pribadi sebagai tanda amanah.",
      "Ia memakai pakaian sederhana meskipun menjadi khalifah.",
      "Banyak rakyat hidup lebih sejahtera pada masa pemerintahannya.",
      "Ia lebih suka mendengar keluhan rakyat daripada kemewahan istana."
    ],
    kata_baru: [
      {
        kata: "Amanah",
        arti: "Dapat dipercaya dan menjaga tanggung jawab."
      },
      {
        kata: "Adil",
        arti: "Memberikan hak kepada setiap orang dengan jujur."
      },
      {
        kata: "Sederhana",
        arti: "Tidak berlebihan dan hidup secukupnya."
      }
    ],
    skill: "Bersikap Adil & Amanah",
    skill_ikon: "⚖️ 🤝",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Mengakui kesalahan jika berbuat salah.",
      "Berbagi makanan atau alat tulis kepada teman yang membutuhkan.",
      "Menggunakan barang sekolah dengan tanggung jawab dan tidak boros."
    ],
    kuis: [
      {
        q: "Sifat apakah yang paling terkenal dari Umar bin Abdul Aziz?",
        opts: [
          "Keberanian berlayar",
          "Keadilan",
          "Kecepatan berlari"
        ],
        a: 1
      },
      {
        q: "Bagaimana gaya hidup Umar bin Abdul Aziz sebagai khalifah?",
        opts: [
          "Sederhana",
          "Sangat mewah",
          "Selalu berpesta"
        ],
        a: 0
      },
      {
        q: "Apa yang dilakukan Umar bin Abdul Aziz agar menjadi teladan bagi rakyat?",
        opts: [
          "Mengumpulkan harta sebanyak mungkin",
          "Membangun istana terbesar",
          "Hidup sederhana dan menjaga amanah"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan bersikap jujur, menjaga amanah, dan membantu satu orang dengan ikhlas."
  },
  {
    id: "abu_ubaidah_bin_al_jarrah",
    kategori: "commander",
    nama: "Abu Ubaidah bin Al-Jarrah",
    julukan: "Aminul Ummah (583–639 M)",
    tema: "Amanah, Keberanian, dan Kerendahan Hati",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu membayangkan menjadi seorang pemimpin yang sangat dipercaya hingga semua orang merasa tenang saat bersamamu?",
      "Abu Ubaidah bin Al-Jarrah adalah panglima hebat sekaligus sahabat Nabi yang terkenal karena sifat amanah, berani, dan selalu mendahulukan kepentingan orang lain."
    ],
    belajar: {
      siapa: "Abu Ubaidah adalah salah satu sahabat Nabi Muhammad ﷺ dan panglima besar kaum Muslimin.",
      kapan: "Ia hidup pada masa Nabi Muhammad ﷺ hingga Khulafaur Rasyidin pada abad ke-7 M.",
      dilakukan: "Ia memimpin banyak pasukan dengan bijaksana, termasuk dalam pembebasan wilayah Syam.",
      kontribusi: "Ia menjadi teladan pemimpin yang jujur, rendah hati, dan selalu menjaga amanah dalam setiap tugasnya.",
      tantangan: "Memimpin pasukan di medan perang sangat berat, tetapi ia tetap tenang, sabar, dan mengutamakan keselamatan rakyat."
    },
    fakta: [
      "Nabi Muhammad ﷺ menjulukinya sebagai Aminul Ummah, yaitu orang yang paling dipercaya.",
      "Ia tetap hidup sederhana meski menjadi panglima besar.",
      "Ia lebih suka dipuji karena akhlaknya daripada keberaniannya.",
      "Ia selalu mengutamakan musyawarah sebelum mengambil keputusan penting."
    ],
    kata_baru: [
      {
        kata: "Amanah",
        arti: "Dapat dipercaya dan menjaga tanggung jawab."
      },
      {
        kata: "Syam",
        arti: "Wilayah yang kini meliputi Suriah dan sekitarnya."
      },
      {
        kata: "Musyawarah",
        arti: "Berdiskusi bersama untuk mencari keputusan terbaik."
      }
    ],
    skill: "Memimpin & Amanah",
    skill_ikon: "🛡️ 🤝",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Menepati janji kepada teman dan keluarga.",
      "Mendengarkan pendapat orang lain sebelum memutuskan sesuatu.",
      "Menjadi pemimpin kelompok yang adil saat belajar bersama."
    ],
    kuis: [
      {
        q: "Apa julukan Abu Ubaidah bin Al-Jarrah?",
        opts: [
          "Singa Padang Pasir",
          "Aminul Ummah",
          "Penakluk Mesir"
        ],
        a: 1
      },
      {
        q: "Sifat paling terkenal Abu Ubaidah adalah...",
        opts: [
          "Amanah",
          "Sombong",
          "Pemarah"
        ],
        a: 0
      },
      {
        q: "Bagaimana cara Abu Ubaidah mengambil keputusan penting?",
        opts: [
          "Sendirian",
          "Dengan marah",
          "Melalui musyawarah"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menjaga amanah dan menepati satu janji yang sudah kubuat."
  },
  {
    id: "amr_bin_ash",
    kategori: "commander",
    nama: "Amr bin Ash",
    julukan: "Penakluk Mesir (573–664 M)",
    tema: "Strategi, Kepemimpinan, dan Keteguhan",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana kalau kamu harus memenangkan tantangan bukan dengan otot, tetapi dengan kecerdasan menyusun rencana?",
      "Amr bin Ash adalah panglima Muslim yang terkenal karena strategi cerdasnya hingga berhasil membuka jalan bagi lahirnya peradaban Islam di Mesir."
    ],
    belajar: {
      siapa: "Amr bin Ash adalah sahabat Nabi Muhammad ﷺ yang menjadi panglima dan pemimpin wilayah Mesir.",
      kapan: "Ia hidup pada abad ke-7 M, pada masa Nabi dan Khulafaur Rasyidin.",
      dilakukan: "Ia memimpin ekspedisi menuju Mesir dengan strategi yang matang dan penuh perhitungan.",
      kontribusi: "Ia membantu berkembangnya pemerintahan, perdagangan, dan kota-kota penting di Mesir.",
      tantangan: "Menghadapi benteng-benteng yang kuat membuat perjuangan menjadi panjang, namun ia berhasil dengan kesabaran dan strategi yang baik."
    },
    fakta: [
      "Amr bin Ash dikenal sebagai ahli strategi perang.",
      "Ia ikut memimpin pembebasan Mesir.",
      "Ia juga pandai berdiplomasi dan bernegosiasi.",
      "Kota Fustat berkembang menjadi pusat penting pada masa pemerintahannya."
    ],
    kata_baru: [
      {
        kata: "Strategi",
        arti: "Rencana cerdas untuk mencapai tujuan."
      },
      {
        kata: "Diplomasi",
        arti: "Menyelesaikan masalah melalui pembicaraan yang damai."
      },
      {
        kata: "Fustat",
        arti: "Kota awal yang menjadi pusat pemerintahan Islam di Mesir."
      }
    ],
    skill: "Strategi & Kepemimpinan",
    skill_ikon: "♟️ 🗡️",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Membuat rencana sebelum mengerjakan tugas sekolah.",
      "Berpikir tenang saat menghadapi masalah.",
      "Belajar menyelesaikan perselisihan dengan bicara baik-baik."
    ],
    kuis: [
      {
        q: "Amr bin Ash terkenal sebagai penakluk wilayah apa?",
        opts: [
          "Persia",
          "Mesir",
          "Andalusia"
        ],
        a: 1
      },
      {
        q: "Kehebatan utama Amr bin Ash adalah...",
        opts: [
          "Strategi yang cerdas",
          "Melukis",
          "Bermain musik"
        ],
        a: 0
      },
      {
        q: "Apa yang membantu Amr bin Ash menghadapi benteng yang kuat?",
        opts: [
          "Keberuntungan saja",
          "Berlari cepat",
          "Strategi dan kesabaran"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan membuat rencana sederhana sebelum memulai pekerjaanku."
  },
  {
    id: "ikrimah_bin_abu_jahl",
    kategori: "commander",
    nama: "Ikrimah bin Abu Jahl",
    julukan: "Ksatria yang Bertobat (598–634 M)",
    tema: "Taubat, Keberanian, dan Kesetiaan",
    pengantar: [
      "Halo, Young Hero!",
      "Menurutmu, bisakah seseorang berubah menjadi pribadi yang jauh lebih baik setelah menyadari kesalahannya?",
      "Ikrimah bin Abu Jahl membuktikan bahwa taubat yang tulus dapat mengubah hidup seseorang menjadi penuh keberanian dan kebaikan."
    ],
    belajar: {
      siapa: "Ikrimah adalah sahabat Nabi Muhammad ﷺ yang dahulu pernah memusuhi Islam, lalu memeluk Islam dengan sepenuh hati.",
      kapan: "Ia hidup pada masa Nabi Muhammad ﷺ hingga awal Khulafaur Rasyidin.",
      dilakukan: "Setelah masuk Islam, ia berjuang membela kaum Muslimin dengan keberanian yang luar biasa.",
      kontribusi: "Kisahnya mengajarkan bahwa setiap orang memiliki kesempatan untuk berubah menjadi lebih baik.",
      tantangan: "Ia harus meninggalkan masa lalunya yang kelam dan membuktikan kesungguhannya melalui amal baik dan perjuangan."
    },
    fakta: [
      "Ikrimah dahulu adalah lawan kaum Muslimin sebelum masuk Islam.",
      "Ia memeluk Islam dengan penuh keikhlasan.",
      "Ia menjadi pejuang yang sangat berani setelah bertaubat.",
      "Namanya sering dikenang sebagai simbol perubahan menuju kebaikan."
    ],
    kata_baru: [
      {
        kata: "Taubat",
        arti: "Kembali kepada Allah dengan menyesali kesalahan."
      },
      {
        kata: "Ikhlas",
        arti: "Melakukan sesuatu dengan hati yang tulus."
      },
      {
        kata: "Ksatria",
        arti: "Pejuang yang berani dan berakhlak mulia."
      }
    ],
    skill: "Keberanian & Taubat",
    skill_ikon: "❤️ 🛡️",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Berani meminta maaf saat melakukan kesalahan.",
      "Memperbaiki kesalahan dengan tindakan baik.",
      "Tidak mengejek teman yang sedang berubah menjadi lebih baik."
    ],
    kuis: [
      {
        q: "Apa pelajaran terbesar dari kisah Ikrimah?",
        opts: [
          "Menjadi kaya",
          "Setiap orang bisa berubah menjadi lebih baik",
          "Menjadi terkenal"
        ],
        a: 1
      },
      {
        q: "Apa yang dilakukan Ikrimah setelah memeluk Islam?",
        opts: [
          "Membela kaum Muslimin",
          "Pindah ke istana",
          "Berhenti belajar"
        ],
        a: 0
      },
      {
        q: "Bagaimana Ikrimah membuktikan taubatnya?",
        opts: [
          "Dengan kata-kata saja",
          "Dengan bersembunyi",
          "Dengan amal baik dan perjuangan"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan berani meminta maaf jika berbuat salah dan memperbaikinya dengan tindakan baik."
  },
  {
    id: "al_qaqa_bin_amr_at_tamimi",
    kategori: "commander",
    nama: "Al-Qa'qa' bin Amr At-Tamimi",
    julukan: "Singa Medan Perang (wafat sekitar 640 M)",
    tema: "Keberanian, Kecerdikan, dan Semangat",
    pengantar: [
      "Halo, Young Hero!",
      "Bayangkan kamu harus memberi semangat kepada teman-teman saat semua orang mulai merasa takut. Apa yang akan kamu lakukan?",
      "Al-Qa'qa' bin Amr At-Tamimi adalah panglima pemberani yang terkenal karena kecerdikan dan kemampuannya membangkitkan semangat pasukan."
    ],
    belajar: {
      siapa: "Al-Qa'qa' adalah pejuang dan panglima Muslim dari suku Bani Tamim yang terkenal karena keberaniannya.",
      kapan: "Ia hidup pada masa Khulafaur Rasyidin pada abad ke-7 M.",
      dilakukan: "Ia berperan penting dalam beberapa pertempuran besar dengan strategi yang cerdas dan membangkitkan semangat pasukan.",
      kontribusi: "Ia menunjukkan bahwa semangat, keberanian, dan kecerdikan dapat mengubah keadaan yang sulit menjadi kemenangan.",
      tantangan: "Saat pasukan menghadapi musuh yang besar, Al-Qa'qa' memberi motivasi dan menyusun strategi agar teman-temannya tetap percaya diri."
    },
    fakta: [
      "Ia dikenal sebagai pejuang yang sangat berani.",
      "Kecerdikannya sering membuat musuh kebingungan.",
      "Ia pandai membangkitkan semangat pasukan.",
      "Namanya dikenang sebagai salah satu panglima hebat pada masa Khulafaur Rasyidin."
    ],
    kata_baru: [
      {
        kata: "Motivasi",
        arti: "Dorongan agar seseorang bersemangat melakukan kebaikan."
      },
      {
        kata: "Panglima",
        arti: "Pemimpin pasukan dalam sebuah perjuangan."
      },
      {
        kata: "Kecerdikan",
        arti: "Kemampuan berpikir cepat dan menemukan solusi yang pintar."
      }
    ],
    skill: "Menyemangati & Strategi",
    skill_ikon: "🔥 ♟️",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Memberi semangat kepada teman yang sedang sedih.",
      "Tidak mudah menyerah saat menghadapi soal yang sulit.",
      "Bekerja sama dengan teman untuk menyelesaikan tantangan."
    ],
    kuis: [
      {
        q: "Apa kehebatan utama Al-Qa'qa' bin Amr?",
        opts: [
          "Menjadi penyair istana",
          "Membangkitkan semangat dan strategi",
          "Membuat kapal besar"
        ],
        a: 1
      },
      {
        q: "Al-Qa'qa' hidup pada masa siapa?",
        opts: [
          "Khulafaur Rasyidin",
          "Kesultanan Utsmani",
          "Dinasti Fatimiyah"
        ],
        a: 0
      },
      {
        q: "Apa yang dilakukan Al-Qa'qa' saat pasukan mulai takut?",
        opts: [
          "Menyuruh mereka pulang",
          "Berdiam diri",
          "Memberi motivasi dan menyusun strategi"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menjadi penyemangat bagi teman dan tidak mudah menyerah saat menghadapi tantangan."
  },
  {
    id: "khadijah_binti_khuwailid",
    kategori: "companion",
    nama: "Khadijah binti Khuwailid",
    julukan: "Ibu Kaum Mukminin (555–619 M)",
    tema: "Keimanan, Kedermawanan, dan Kesetiaan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu membayangkan menjadi orang pertama yang selalu percaya dan menyemangati seseorang saat semua orang lain meragukannya?",
      "Khadijah binti Khuwailid adalah istri pertama Nabi Muhammad ﷺ yang menjadi pendukung terbesar dakwah Islam dengan hati yang penuh kasih dan keberanian."
    ],
    belajar: {
      siapa: "Khadijah adalah istri pertama Nabi Muhammad ﷺ dan salah satu wanita paling mulia dalam sejarah Islam.",
      kapan: "Ia hidup pada abad ke-6 hingga awal abad ke-7 M di Kota Makkah.",
      dilakukan: "Ia menjadi orang pertama yang beriman kepada Nabi ﷺ dan menggunakan hartanya untuk membantu dakwah Islam.",
      kontribusi: "Khadijah memberi dukungan moral, kasih sayang, dan bantuan harta sehingga dakwah Islam dapat terus berjalan di masa-masa sulit.",
      tantangan: "Saat kaum Quraisy memusuhi Nabi ﷺ, Khadijah tetap setia mendampingi beliau dengan sabar dan penuh kepercayaan."
    },
    fakta: [
      "Khadijah adalah orang pertama yang memeluk Islam.",
      "Ia merupakan pedagang sukses yang jujur dan dermawan.",
      "Nabi Muhammad ﷺ sangat mencintai dan menghormatinya.",
      "Tahun wafatnya dikenal sebagai Tahun Kesedihan bagi Nabi ﷺ."
    ],
    kata_baru: [
      { kata: "Dakwah", arti: "Mengajak orang kepada kebaikan dan ajaran Islam." },
      { kata: "Dermawan", arti: "Suka berbagi dan membantu orang lain." },
      { kata: "Setia", arti: "Tetap mendukung dan menemani dalam keadaan apa pun." }
    ],
    skill: "Menyayangi & Berbagi",
    skill_ikon: "❤️ 🤲",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Menyemangati teman yang sedang kesulitan belajar.",
      "Berbagi sebagian uang atau makanan kepada yang membutuhkan.",
      "Selalu mendukung keluarga dengan perkataan yang baik."
    ],
    kuis: [
      {
        q: "Siapakah orang pertama yang beriman kepada Nabi Muhammad ﷺ?",
        opts: ["Fatimah", "Khadijah", "Aisyah"],
        a: 1
      },
      {
        q: "Apa pekerjaan Khadijah sebelum menikah dengan Nabi ﷺ?",
        opts: ["Pedagang", "Guru", "Pelaut"],
        a: 0
      },
      {
        q: "Bagaimana Khadijah membantu dakwah Islam?",
        opts: ["Dengan membangun kapal", "Dengan menjadi panglima perang", "Dengan dukungan hati dan hartanya"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menyemangati satu orang dan berbagi sesuatu dengan ikhlas."
  },
  {
    id: "aisyah_binti_abu_bakar",
    kategori: "companion",
    nama: "Aisyah binti Abu Bakar",
    julukan: "Ulama Cerdas dan Ibu Kaum Mukminin (613–678 M)",
    tema: "Ilmu, Kecerdasan, dan Ketelitian",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana kalau kamu bisa mengingat ribuan pelajaran penting lalu mengajarkannya kepada banyak orang selama bertahun-tahun?",
      "Aisyah binti Abu Bakar adalah sahabat Nabi ﷺ yang terkenal sebagai ulama cerdas dan salah satu periwayat hadis paling berpengaruh."
    ],
    belajar: {
      siapa: "Aisyah adalah istri Nabi Muhammad ﷺ sekaligus guru bagi banyak sahabat dan generasi setelahnya.",
      kapan: "Ia hidup pada abad ke-7 M di Madinah.",
      dilakukan: "Ia mengajarkan hadis, fiqih, dan ilmu agama kepada banyak murid dengan sangat teliti.",
      kontribusi: "Ribuan hadis yang diriwayatkannya membantu umat Islam memahami akhlak dan ajaran Nabi ﷺ.",
      tantangan: "Menjadi guru berarti harus menjaga ketelitian. Aisyah selalu memastikan ilmu yang diajarkan benar dan dapat dipercaya."
    },
    fakta: [
      "Aisyah meriwayatkan lebih dari dua ribu hadis.",
      "Banyak sahabat belajar langsung kepadanya.",
      "Ia terkenal memiliki ingatan yang sangat kuat.",
      "Ia sering menjawab pertanyaan tentang ilmu agama dengan bijaksana."
    ],
    kata_baru: [
      { kata: "Hadis", arti: "Perkataan, perbuatan, dan keteladanan Nabi Muhammad ﷺ." },
      { kata: "Fiqih", arti: "Ilmu tentang aturan dan ibadah dalam Islam." },
      { kata: "Periwayat", arti: "Orang yang menyampaikan hadis kepada generasi berikutnya." }
    ],
    skill: "Belajar & Mengajar",
    skill_ikon: "📚 ✍️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Rajin mencatat pelajaran di sekolah.",
      "Mengajarkan kembali ilmu kepada adik atau teman.",
      "Memeriksa jawaban sebelum dikumpulkan agar lebih teliti."
    ],
    kuis: [
      {
        q: "Aisyah terkenal sebagai apa?",
        opts: ["Pelaut", "Ulama dan periwayat hadis", "Arsitek"],
        a: 1
      },
      {
        q: "Apa yang paling dijaga oleh Aisyah saat mengajarkan ilmu?",
        opts: ["Ketelitian", "Kecepatan", "Kemewahan"],
        a: 0
      },
      {
        q: "Ilmu apa yang banyak diajarkan oleh Aisyah?",
        opts: ["Pertanian", "Astronomi", "Hadis dan fiqih"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan belajar dengan teliti lalu mengajarkan satu hal baru kepada orang lain."
  },
  {
    id: "salman_al_farisi",
    kategori: "companion",
    nama: "Salman Al-Farisi",
    julukan: "Sang Pencari Kebenaran (568–656 M)",
    tema: "Strategi, Ketekunan, dan Hikmah",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu punya ide cerdas yang bisa menyelamatkan banyak orang saat menghadapi masalah besar?",
      "Salman Al-Farisi adalah sahabat Nabi ﷺ yang terkenal karena kecerdasannya mengusulkan parit dalam Perang Khandaq."
    ],
    belajar: {
      siapa: "Salman Al-Farisi adalah sahabat Nabi ﷺ yang berasal dari Persia dan terkenal karena semangat mencari kebenaran.",
      kapan: "Ia hidup pada abad ke-6 hingga ke-7 M dan bergabung dengan kaum Muslimin di Madinah.",
      dilakukan: "Ia mengusulkan membuat parit besar sebagai pertahanan saat Perang Khandaq.",
      kontribusi: "Ide strategisnya membantu melindungi Kota Madinah dan menjadi contoh pentingnya berpikir kreatif.",
      tantangan: "Sebelum masuk Islam, Salman menempuh perjalanan panjang mencari agama yang benar dengan penuh kesabaran."
    },
    fakta: [
      "Salman berasal dari Persia, bukan Arab.",
      "Ia mencari kebenaran selama bertahun-tahun sebelum bertemu Nabi ﷺ.",
      "Ide parit menjadi strategi baru yang belum pernah digunakan di Madinah.",
      "Nabi ﷺ memuji kecerdasan dan ketulusannya."
    ],
    kata_baru: [
      { kata: "Khandaq", arti: "Parit besar yang dibuat untuk melindungi Madinah." },
      { kata: "Strategis", arti: "Penuh perencanaan yang cerdas." },
      { kata: "Persia", arti: "Wilayah kuno yang kini menjadi bagian dari Iran." }
    ],
    skill: "Berpikir Strategis & Kreatif",
    skill_ikon: "🧠 🛡️",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Mencari solusi kreatif saat mengerjakan tugas kelompok.",
      "Tidak mudah menyerah ketika belajar hal baru.",
      "Berani menyampaikan ide yang baik dengan sopan."
    ],
    kuis: [
      {
        q: "Apa ide terkenal Salman Al-Farisi dalam Perang Khandaq?",
        opts: ["Membangun jembatan", "Membuat parit", "Membuat kapal"],
        a: 1
      },
      {
        q: "Dari mana asal Salman Al-Farisi?",
        opts: ["Persia", "Mesir", "Yaman"],
        a: 0
      },
      {
        q: "Apa pelajaran utama dari kisah Salman?",
        opts: ["Menyerah saat sulit", "Diam saja", "Berpikir kreatif dan mencari solusi"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan berani menyampaikan satu ide baik untuk membantu orang lain."
  },
  {
    id: "abu_hurairah",
    kategori: "companion",
    nama: "Abu Hurairah",
    julukan: "Sahabat Periwayat Hadis Terbanyak (603–681 M)",
    tema: "Ilmu, Hafalan, dan Ketekunan",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana kalau kamu bisa mengingat begitu banyak pelajaran penting lalu menyampaikannya kepada jutaan orang hingga sekarang?",
      "Abu Hurairah adalah sahabat Nabi ﷺ yang terkenal karena semangat belajar dan menjadi salah satu periwayat hadis terbanyak."
    ],
    belajar: {
      siapa: "Abu Hurairah adalah sahabat Nabi Muhammad ﷺ yang sangat mencintai ilmu dan selalu dekat dengan Rasulullah.",
      kapan: "Ia hidup pada abad ke-7 M dan banyak belajar di Madinah.",
      dilakukan: "Ia menghafal dan meriwayatkan ribuan hadis Nabi ﷺ kepada umat Islam.",
      kontribusi: "Hadis-hadis yang diriwayatkannya menjadi sumber penting untuk mempelajari akhlak dan ibadah dalam Islam.",
      tantangan: "Ia hidup sederhana, tetapi tidak pernah berhenti belajar dan memanfaatkan setiap kesempatan untuk mendengarkan Nabi ﷺ."
    },
    fakta: [
      "Nama Abu Hurairah berarti Ayah Kucing Kecil karena ia sangat menyayangi anak kucing.",
      "Ia dikenal memiliki hafalan yang sangat kuat.",
      "Ia meriwayatkan lebih dari lima ribu hadis.",
      "Ia mengutamakan belajar dibanding mencari kemewahan dunia."
    ],
    kata_baru: [
      { kata: "Hafalan", arti: "Kemampuan mengingat sesuatu dengan baik." },
      { kata: "Riwayat", arti: "Penyampaian cerita atau hadis dari sumber yang terpercaya." },
      { kata: "Akhlak", arti: "Perilaku baik yang diajarkan dalam Islam." }
    ],
    skill: "Menghafal & Menyampaikan Ilmu",
    skill_ikon: "🧠 📖",
    discoveryDest: "prophetic_gen",
    praktik: [
      "Menghafal satu doa atau hadis pendek setiap minggu.",
      "Menyayangi hewan dengan penuh kasih sayang.",
      "Rajin mendengarkan guru saat pelajaran berlangsung."
    ],
    kuis: [
      {
        q: "Mengapa Abu Hurairah mendapat julukan tersebut?",
        opts: ["Karena suka burung", "Karena menyayangi anak kucing", "Karena memelihara unta"],
        a: 1
      },
      {
        q: "Apa yang membuat Abu Hurairah terkenal?",
        opts: ["Meriwayatkan banyak hadis", "Menjadi arsitek", "Membuat kapal"],
        a: 0
      },
      {
        q: "Sikap apa yang bisa kita teladani dari Abu Hurairah?",
        opts: ["Malas belajar", "Suka pamer", "Rajin belajar dan menghafal ilmu"],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menghafal satu doa atau hadis pendek lalu mengamalkannya."
  },
  {
    id: "musa_bin_nushair",
    kategori: "commander",
    nama: "Musa bin Nushair",
    julukan: "Pemimpin Afrika Utara (640–716 M)",
    tema: "Visi, Kepemimpinan, dan Persatuan",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana jika kamu harus menyatukan banyak daerah yang berbeda agar hidup damai dan saling membantu?",
      "Musa bin Nushair adalah pemimpin hebat yang membangun kekuatan Islam di Afrika Utara dan menyiapkan jalan menuju Andalusia."
    ],
    belajar: {
      siapa: "Musa bin Nushair adalah gubernur dan panglima Dinasti Umayyah yang memimpin wilayah Afrika Utara.",
      kapan: "Ia hidup pada akhir abad ke-7 hingga awal abad ke-8 M.",
      dilakukan: "Ia membangun pemerintahan yang kuat, melatih pasukan, dan menyatukan berbagai suku di Afrika Utara.",
      kontribusi: "Kepemimpinannya membuka jalan bagi berkembangnya ilmu, perdagangan, dan ekspedisi menuju Andalusia.",
      tantangan: "Wilayah yang dipimpinnya sangat luas dan terdiri dari banyak suku, sehingga ia mengutamakan persatuan dan keadilan."
    },
    fakta: [
      "Ia menjadi gubernur Afrika Utara selama bertahun-tahun.",
      "Ia melatih panglima muda seperti Thariq bin Ziyad.",
      "Ia membangun kota dan memperkuat pemerintahan.",
      "Kepemimpinannya menjadi awal berkembangnya Islam di Andalusia."
    ],
    kata_baru: [
      {
        kata: "Gubernur",
        arti: "Pemimpin sebuah wilayah pemerintahan."
      },
      {
        kata: "Ekspansi",
        arti: "Perluasan wilayah dengan tujuan membangun pemerintahan."
      },
      {
        kata: "Persatuan",
        arti: "Bersatu meskipun memiliki banyak perbedaan."
      }
    ],
    skill: "Memimpin & Menyatukan",
    skill_ikon: "👑 🤝",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Bermain bersama teman tanpa membeda-bedakan asalnya.",
      "Menjadi penengah saat teman bertengkar.",
      "Mengajak semua anggota kelompok ikut bekerja sama."
    ],
    kuis: [
      {
        q: "Wilayah utama yang dipimpin Musa bin Nushair adalah...",
        opts: [
          "Mesir",
          "Afrika Utara",
          "India"
        ],
        a: 1
      },
      {
        q: "Apa yang paling diutamakan Musa dalam kepemimpinannya?",
        opts: [
          "Persatuan",
          "Kemewahan",
          "Perlombaan"
        ],
        a: 0
      },
      {
        q: "Siapa panglima muda yang dibimbing Musa bin Nushair?",
        opts: [
          "Khalid bin Walid",
          "Sa'ad bin Abi Waqqash",
          "Thariq bin Ziyad"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan mengajak semua teman bekerja sama tanpa membeda-bedakan siapa pun."
  },
  {
    id: "muhammad_bin_qasim",
    kategori: "commander",
    nama: "Muhammad bin Qasim",
    julukan: "Panglima Muda Sindh (695–715 M)",
    tema: "Keberanian, Keadilan, dan Kepemimpinan",
    pengantar: [
      "Halo, Young Hero!",
      "Bisakah seorang remaja memimpin dengan bijaksana dan membuat banyak orang merasa aman?",
      "Muhammad bin Qasim membuktikan bahwa usia muda bukan penghalang untuk menjadi pemimpin yang adil dan bertanggung jawab."
    ],
    belajar: {
      siapa: "Muhammad bin Qasim adalah panglima muda Dinasti Umayyah yang memimpin wilayah Sindh.",
      kapan: "Ia hidup pada awal abad ke-8 M.",
      dilakukan: "Ia memimpin ekspedisi ke Sindh dan melindungi masyarakat dengan aturan yang adil.",
      kontribusi: "Ia membawa pemerintahan yang tertib serta membuka hubungan ilmu dan perdagangan di wilayah tersebut.",
      tantangan: "Meski masih sangat muda, ia harus memimpin pasukan dan mengambil keputusan penting dengan penuh tanggung jawab."
    },
    fakta: [
      "Ia menjadi panglima saat usianya masih belasan tahun.",
      "Ia terkenal memperlakukan penduduk dengan adil.",
      "Sindh kini berada di wilayah Pakistan bagian selatan.",
      "Namanya dikenang sebagai salah satu panglima muda terbaik."
    ],
    kata_baru: [
      {
        kata: "Sindh",
        arti: "Wilayah bersejarah di Asia Selatan."
      },
      {
        kata: "Tertib",
        arti: "Teratur dan sesuai aturan."
      },
      {
        kata: "Tanggung Jawab",
        arti: "Melaksanakan tugas dengan sungguh-sungguh."
      }
    ],
    skill: "Berani & Adil",
    skill_ikon: "🗡️ ⚖️",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Berani memimpin doa atau presentasi di kelas.",
      "Bersikap adil kepada semua teman saat bermain.",
      "Menyelesaikan tugas tepat waktu."
    ],
    kuis: [
      {
        q: "Muhammad bin Qasim memimpin wilayah...",
        opts: [
          "Syam",
          "Sindh",
          "Yaman"
        ],
        a: 1
      },
      {
        q: "Apa yang membuat Muhammad bin Qasim istimewa?",
        opts: [
          "Menjadi panglima muda",
          "Menjadi penyair",
          "Menjadi pelaut"
        ],
        a: 0
      },
      {
        q: "Pelajaran utama dari kisahnya adalah...",
        opts: [
          "Usia muda tidak bisa memimpin",
          "Hanya orang tua yang hebat",
          "Usia muda bisa menjadi pemimpin yang bertanggung jawab"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan berani mengambil tanggung jawab dan melaksanakannya dengan baik."
  },
  {
    id: "nuruddin_zengi",
    kategori: "commander",
    nama: "Nuruddin Zengi",
    julukan: "Sultan Pejuang Syam (1118–1174 M)",
    tema: "Persatuan, Keadilan, dan Keteguhan",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana kalau kamu harus mempersiapkan tim menjadi kuat sebelum menghadapi tantangan besar di masa depan?",
      "Nuruddin Zengi adalah pemimpin yang membangun kekuatan umat Islam dengan ilmu, persatuan, dan keadilan sebelum datangnya pembebasan Yerusalem."
    ],
    belajar: {
      siapa: "Nuruddin Zengi adalah sultan yang memimpin wilayah Syam dan terkenal sebagai pemimpin yang saleh serta adil.",
      kapan: "Ia hidup pada abad ke-12 M ketika Tentara Salib menguasai sebagian wilayah.",
      dilakukan: "Ia memperkuat pendidikan, rumah sakit, pemerintahan, dan persatuan kaum Muslimin.",
      kontribusi: "Usahanya menjadi pondasi penting yang kemudian diteruskan oleh Salahuddin Al-Ayyubi.",
      tantangan: "Ia menghadapi ancaman Tentara Salib, tetapi memilih memperkuat umat dari dalam melalui ilmu dan persatuan."
    },
    fakta: [
      "Ia membangun banyak madrasah dan rumah sakit.",
      "Ia dikenal sebagai pemimpin yang sederhana.",
      "Ia sangat menghormati ulama dan penuntut ilmu.",
      "Salahuddin Al-Ayyubi melanjutkan perjuangannya."
    ],
    kata_baru: [
      {
        kata: "Madrasah",
        arti: "Sekolah tempat mempelajari ilmu agama dan pengetahuan."
      },
      {
        kata: "Syam",
        arti: "Wilayah yang kini meliputi Suriah dan sekitarnya."
      },
      {
        kata: "Pondasi",
        arti: "Dasar yang kuat untuk membangun sesuatu."
      }
    ],
    skill: "Membangun & Menyatukan",
    skill_ikon: "🏛️ 🤲",
    discoveryDest: "builders_civ",
    praktik: [
      "Belajar dengan sungguh-sungguh sebagai bekal masa depan.",
      "Menjaga persatuan dalam kelompok belajar.",
      "Membantu teman tanpa membeda-bedakan."
    ],
    kuis: [
      {
        q: "Siapa musuh utama pada masa Nuruddin Zengi?",
        opts: [
          "Bangsa Romawi",
          "Tentara Salib",
          "Bangsa Mongol"
        ],
        a: 1
      },
      {
        q: "Apa yang banyak dibangun Nuruddin?",
        opts: [
          "Madrasah dan rumah sakit",
          "Piramida",
          "Mercusuar"
        ],
        a: 0
      },
      {
        q: "Mengapa Nuruddin dikenang dalam sejarah?",
        opts: [
          "Karena menjadi pelaut",
          "Karena menjadi penemu mesin",
          "Karena membangun kekuatan umat melalui ilmu dan persatuan"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan memperkuat diriku dengan belajar dan menjaga persatuan bersama teman."
  },
  {
    id: "salahuddin_al_ayyubi",
    kategori: "commander",
    nama: "Salahuddin Al-Ayyubi",
    julukan: "Pembebas Yerusalem (1137–1193 M)",
    tema: "Keberanian, Kasih Sayang, dan Keadilan",
    pengantar: [
      "Halo, Young Hero!",
      "Menurutmu, apakah seorang pahlawan sejati hanya menang dalam perang, atau juga mampu memaafkan dan berbuat baik kepada lawannya?",
      "Salahuddin Al-Ayyubi adalah pemimpin besar yang membebaskan Yerusalem sekaligus terkenal karena akhlaknya yang mulia kepada semua orang."
    ],
    belajar: {
      siapa: "Salahuddin Al-Ayyubi adalah sultan Muslim yang memimpin Dinasti Ayyubiyah.",
      kapan: "Ia hidup pada abad ke-12 M ketika Perang Salib berlangsung.",
      dilakukan: "Ia berhasil membebaskan Kota Yerusalem setelah perjuangan panjang dan persatuan umat.",
      kontribusi: "Ia menjadi teladan dunia karena memadukan keberanian, keadilan, dan kasih sayang dalam kepemimpinan.",
      tantangan: "Menghadapi Tentara Salib membutuhkan waktu bertahun-tahun, tetapi ia tidak menyerah dan selalu mengutamakan persatuan."
    },
    fakta: [
      "Ia membebaskan Yerusalem pada tahun 1187 M.",
      "Ia memperlakukan penduduk dengan penuh belas kasih setelah kemenangan.",
      "Ia hidup sederhana meskipun menjadi sultan besar.",
      "Namanya dihormati bahkan oleh banyak lawannya."
    ],
    kata_baru: [
      {
        kata: "Yerusalem",
        arti: "Kota suci yang penting bagi berbagai agama."
      },
      {
        kata: "Belas Kasih",
        arti: "Sikap penuh sayang dan suka memaafkan."
      },
      {
        kata: "Sultan",
        arti: "Pemimpin kerajaan atau pemerintahan Islam."
      }
    ],
    skill: "Memimpin & Berbelas Kasih",
    skill_ikon: "🦁 ❤️",
    discoveryDest: "leaders_defenders",
    praktik: [
      "Memaafkan teman yang berbuat salah setelah ia meminta maaf.",
      "Berani membela teman yang diperlakukan tidak adil.",
      "Menjadi pemimpin yang ramah saat kerja kelompok."
    ],
    kuis: [
      {
        q: "Kota apakah yang dibebaskan oleh Salahuddin Al-Ayyubi?",
        opts: [
          "Baghdad",
          "Yerusalem",
          "Kairo"
        ],
        a: 1
      },
      {
        q: "Sifat yang paling terkenal dari Salahuddin adalah...",
        opts: [
          "Berani dan penyayang",
          "Sombong",
          "Pendendam"
        ],
        a: 0
      },
      {
        q: "Apa yang dilakukan Salahuddin setelah meraih kemenangan?",
        opts: [
          "Menghancurkan semua kota",
          "Mengambil semua harta rakyat",
          "Memperlakukan penduduk dengan adil dan penuh kasih"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menjadi berani dalam kebaikan dan memaafkan orang yang meminta maaf dengan tulus."
  },
  {
    id: "al_khwarizmi",
    kategori: "scientist",
    nama: "Muhammad bin Musa Al-Khwarizmi",
    julukan: "Bapak Aljabar & Algoritma (780–850 M)",
    tema: "Matematika, Logika, dan Inovasi",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu berpikir bagaimana komputer bisa mengikuti langkah-langkah dengan tepat, atau bagaimana soal matematika bisa diselesaikan secara teratur?",
      "Al-Khwarizmi adalah ilmuwan Muslim yang menemukan dasar ilmu aljabar dan menginspirasi lahirnya algoritma yang digunakan hingga zaman modern."
    ],
    belajar: {
      siapa: "Al-Khwarizmi adalah ilmuwan matematika dan astronomi yang hidup pada masa Keemasan Islam.",
      kapan: "Ia hidup pada abad ke-9 M di Kota Baghdad.",
      dilakukan: "Ia menulis buku tentang aljabar dan mengembangkan cara berhitung yang sistematis.",
      kontribusi: "Karyanya menjadi dasar perkembangan matematika, komputer, dan ilmu algoritma di seluruh dunia.",
      tantangan: "Pada zamannya belum ada kalkulator, sehingga ia menciptakan metode yang memudahkan orang menyelesaikan soal dengan langkah-langkah jelas."
    },
    fakta: [
      "Kata 'algoritma' berasal dari nama Al-Khwarizmi.",
      "Ia bekerja di Baitul Hikmah, pusat ilmu di Baghdad.",
      "Bukunya dipelajari di Eropa selama ratusan tahun.",
      "Ia membantu menyebarkan penggunaan angka Hindu-Arab."
    ],
    kata_baru: [
      {
        kata: "Aljabar",
        arti: "Cabang matematika yang mempelajari angka dan simbol."
      },
      {
        kata: "Algoritma",
        arti: "Urutan langkah untuk menyelesaikan suatu masalah."
      },
      {
        kata: "Baitul Hikmah",
        arti: "Perpustakaan dan pusat penelitian terkenal di Baghdad."
      }
    ],
    skill: "Berhitung & Berpikir Logis",
    skill_ikon: "➗ 💻",
    discoveryDest: "golden_age_science",
    praktik: [
      "Menyelesaikan soal matematika langkah demi langkah.",
      "Membuat urutan kegiatan harian dengan rapi.",
      "Tidak menyerah saat menemukan soal yang sulit."
    ],
    kuis: [
      {
        q: "Al-Khwarizmi dikenal sebagai pelopor ilmu apa?",
        opts: [
          "Kedokteran",
          "Aljabar dan algoritma",
          "Pelayaran"
        ],
        a: 1
      },
      {
        q: "Di kota mana Al-Khwarizmi berkarya?",
        opts: [
          "Baghdad",
          "Madinah",
          "Kairo"
        ],
        a: 0
      },
      {
        q: "Apa arti algoritma?",
        opts: [
          "Jenis bintang",
          "Alat bedah",
          "Urutan langkah menyelesaikan masalah"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menyelesaikan satu soal matematika dengan langkah yang rapi dan teliti."
  },
  {
    id: "al_biruni",
    kategori: "scientist",
    nama: "Abu Rayhan Al-Biruni",
    julukan: "Penjelajah Ilmu Bumi dan Langit (973–1048 M)",
    tema: "Astronomi, Rasa Ingin Tahu, dan Penelitian",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu melihat bintang di malam hari lalu bertanya, 'Seberapa besar sebenarnya Bumi kita?'",
      "Al-Biruni adalah ilmuwan hebat yang mempelajari langit, Bumi, peta, dan matematika dengan rasa ingin tahu yang luar biasa."
    ],
    belajar: {
      siapa: "Al-Biruni adalah ilmuwan Muslim yang menguasai astronomi, geografi, matematika, dan sains.",
      kapan: "Ia hidup pada abad ke-10 hingga ke-11 M.",
      dilakukan: "Ia menghitung ukuran Bumi, mengamati bintang, dan membuat penelitian tentang berbagai negeri.",
      kontribusi: "Penelitiannya membantu manusia memahami bentuk Bumi, peta, dan ilmu astronomi dengan lebih akurat.",
      tantangan: "Ia harus melakukan pengamatan berulang kali dengan alat sederhana agar hasil penelitiannya benar."
    },
    fakta: [
      "Al-Biruni mampu menghitung keliling Bumi dengan sangat mendekati hasil modern.",
      "Ia mempelajari banyak bahasa untuk memahami berbagai budaya.",
      "Ia menulis lebih dari seratus karya ilmiah.",
      "Ia sangat menyukai penelitian berdasarkan pengamatan langsung."
    ],
    kata_baru: [
      {
        kata: "Astronomi",
        arti: "Ilmu yang mempelajari benda-benda langit."
      },
      {
        kata: "Geografi",
        arti: "Ilmu tentang Bumi, peta, dan wilayah."
      },
      {
        kata: "Observasi",
        arti: "Mengamati sesuatu dengan teliti."
      }
    ],
    skill: "Meneliti & Mengamati",
    skill_ikon: "🔭 🌍",
    discoveryDest: "golden_age_science",
    praktik: [
      "Mengamati langit malam bersama keluarga.",
      "Membuat peta sederhana lingkungan rumah.",
      "Mencatat hasil pengamatan tumbuhan atau cuaca."
    ],
    kuis: [
      {
        q: "Al-Biruni terkenal mempelajari apa?",
        opts: [
          "Musik",
          "Astronomi dan geografi",
          "Memasak"
        ],
        a: 1
      },
      {
        q: "Apa yang dilakukan Al-Biruni sebelum menyimpulkan hasil penelitian?",
        opts: [
          "Melakukan observasi",
          "Menebak saja",
          "Menggambar acak"
        ],
        a: 0
      },
      {
        q: "Mengapa Al-Biruni menjadi ilmuwan hebat?",
        opts: [
          "Karena hanya membaca buku",
          "Karena beruntung",
          "Karena teliti dan suka meneliti"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan mengamati satu hal di sekitarku lalu menuliskan hasil pengamatannya."
  },
  {
    id: "al_zahrawi",
    kategori: "scientist",
    nama: "Abu Al-Qasim Al-Zahrawi",
    julukan: "Bapak Ilmu Bedah Modern (936–1013 M)",
    tema: "Kedokteran, Ketelitian, dan Kepedulian",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana kalau kamu bisa membantu orang yang terluka dengan ilmu dan alat yang tepat agar mereka sembuh kembali?",
      "Al-Zahrawi adalah dokter Muslim yang mengembangkan ilmu bedah dan menciptakan banyak alat medis yang bermanfaat."
    ],
    belajar: {
      siapa: "Al-Zahrawi adalah dokter dan ahli bedah terkenal dari Andalusia.",
      kapan: "Ia hidup pada abad ke-10 hingga ke-11 M.",
      dilakukan: "Ia menulis buku besar tentang bedah dan merancang ratusan alat operasi.",
      kontribusi: "Karyanya menjadi pedoman dokter di berbagai negara selama berabad-abad.",
      tantangan: "Melakukan operasi membutuhkan ketelitian tinggi, sehingga ia terus belajar dan mencatat setiap pengalaman medisnya."
    },
    fakta: [
      "Ia menciptakan lebih dari 200 alat bedah.",
      "Bukunya dipakai di sekolah kedokteran Eropa.",
      "Ia selalu mengutamakan keselamatan pasien.",
      "Ia percaya dokter harus belajar sepanjang hidup."
    ],
    kata_baru: [
      {
        kata: "Bedah",
        arti: "Tindakan medis untuk mengobati bagian tubuh tertentu."
      },
      {
        kata: "Pasien",
        arti: "Orang yang sedang dirawat oleh dokter."
      },
      {
        kata: "Medis",
        arti: "Segala sesuatu yang berhubungan dengan kesehatan."
      }
    ],
    skill: "Menolong & Teliti",
    skill_ikon: "🩺 ✂️",
    discoveryDest: "golden_age_science",
    praktik: [
      "Menjaga kebersihan tangan sebelum makan.",
      "Berhati-hati saat menggunakan alat tulis yang tajam.",
      "Membantu teman yang terluka dengan memanggil orang dewasa."
    ],
    kuis: [
      {
        q: "Al-Zahrawi dikenal sebagai pelopor ilmu...",
        opts: [
          "Geografi",
          "Bedah",
          "Arsitektur"
        ],
        a: 1
      },
      {
        q: "Apa yang dibuat Al-Zahrawi untuk membantu dokter?",
        opts: [
          "Alat bedah",
          "Kapal",
          "Jam matahari"
        ],
        a: 0
      },
      {
        q: "Sikap penting yang dimiliki Al-Zahrawi adalah...",
        opts: [
          "Tergesa-gesa",
          "Suka bermain saat bekerja",
          "Teliti dan peduli pada pasien"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menjaga kebersihan dan membantu orang lain dengan penuh kepedulian."
  },
  {
    id: "al_razi",
    kategori: "scientist",
    nama: "Abu Bakar Muhammad Al-Razi",
    julukan: "Dokter dan Ilmuwan Besar (865–925 M)",
    tema: "Kedokteran, Eksperimen, dan Kepedulian",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu bertanya mengapa dokter harus meneliti dengan hati-hati sebelum memberikan obat kepada pasien?",
      "Al-Razi adalah ilmuwan Muslim yang terkenal sebagai dokter hebat dan pelopor penelitian ilmiah di bidang kesehatan."
    ],
    belajar: {
      siapa: "Al-Razi adalah dokter, ilmuwan, dan penulis yang banyak meneliti penyakit serta cara pengobatannya.",
      kapan: "Ia hidup pada abad ke-9 hingga ke-10 M.",
      dilakukan: "Ia mengelola rumah sakit, meneliti penyakit, dan menulis buku kedokteran yang sangat terkenal.",
      kontribusi: "Ia membantu mengembangkan metode pengamatan pasien dan pentingnya eksperimen dalam ilmu kesehatan.",
      tantangan: "Ia menghadapi berbagai penyakit yang belum banyak dipahami, sehingga ia terus melakukan penelitian dengan teliti."
    },
    fakta: [
      "Al-Razi pernah memimpin sebuah rumah sakit besar.",
      "Ia membedakan penyakit cacar dan campak melalui penelitian.",
      "Ia menulis banyak buku tentang kesehatan.",
      "Ia percaya ilmu harus dibuktikan dengan pengamatan dan eksperimen."
    ],
    kata_baru: [
      {
        kata: "Eksperimen",
        arti: "Percobaan untuk membuktikan suatu ilmu."
      },
      {
        kata: "Diagnosis",
        arti: "Menentukan jenis penyakit berdasarkan pemeriksaan."
      },
      {
        kata: "Campak",
        arti: "Penyakit yang menyebabkan demam dan ruam pada kulit."
      }
    ],
    skill: "Meneliti & Menolong",
    skill_ikon: "🔬 🩺",
    discoveryDest: "golden_age_science",
    praktik: [
      "Menjaga pola hidup sehat dengan makan bergizi.",
      "Mencuci tangan agar terhindar dari penyakit.",
      "Belajar menyelesaikan masalah dengan mengamati fakta terlebih dahulu."
    ],
    kuis: [
      {
        q: "Al-Razi terkenal sebagai seorang...",
        opts: [
          "Pelaut",
          "Dokter dan ilmuwan",
          "Penyair"
        ],
        a: 1
      },
      {
        q: "Apa yang selalu dilakukan Al-Razi sebelum menyimpulkan sesuatu?",
        opts: [
          "Melakukan penelitian",
          "Menebak",
          "Mengikuti rumor"
        ],
        a: 0
      },
      {
        q: "Pelajaran utama dari Al-Razi adalah...",
        opts: [
          "Malas belajar",
          "Takut mencoba",
          "Mencari kebenaran melalui ilmu dan eksperimen"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan menjaga kesehatan dan mencari jawaban dengan mengamati fakta sebelum menyimpulkan sesuatu."
  },
  {
    id: "jabir_bin_hayyan",
    kategori: "scientist",
    nama: "Jabir bin Hayyan",
    julukan: "Tokoh Awal Ilmu Kimia (sekitar 721–815 M)",
    tema: "Kimia, Eksperimen, dan Ketelitian",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu bertanya bagaimana para ilmuwan mengetahui sifat suatu benda dengan melakukan percobaan?",
      "Jabir bin Hayyan adalah tokoh ilmuwan Muslim yang terkenal dalam sejarah awal ilmu kimia karena mengembangkan cara melakukan percobaan dengan lebih teratur dan teliti."
    ],
    belajar: {
      siapa: "Jabir bin Hayyan adalah ilmuwan yang banyak dikaitkan dengan perkembangan awal ilmu kimia.",
      kapan: "Ia diperkirakan hidup pada abad ke-8 hingga awal abad ke-9 M.",
      dilakukan: "Ia mempelajari berbagai bahan dan proses kimia melalui pengamatan, percobaan, penyaringan, dan pemurnian.",
      kontribusi: "Karya-karya yang dikaitkan dengannya ikut membantu perkembangan metode eksperimen dalam ilmu kimia.",
      tantangan: "Mempelajari bahan yang belum banyak dipahami membutuhkan kesabaran. Ia menggunakan percobaan berulang untuk memahami perubahan yang terjadi."
    },
    fakta: [
      "Nama Jabir sering dikaitkan dengan perkembangan awal ilmu kimia.",
      "Ia menekankan pentingnya percobaan dan pengamatan.",
      "Karya-karya Jabir diterjemahkan dan dikenal di dunia Barat pada masa berikutnya.",
      "Banyak teknik laboratorium awal dikaitkan dengan tradisi keilmuan yang berkembang di sekitarnya."
    ],
    kata_baru: [
      {
        kata: "Kimia",
        arti: "Ilmu yang mempelajari bahan dan perubahan yang terjadi pada bahan tersebut."
      },
      {
        kata: "Eksperimen",
        arti: "Percobaan yang dilakukan untuk menemukan atau membuktikan sesuatu."
      },
      {
        kata: "Pemurnian",
        arti: "Proses memisahkan kotoran agar suatu bahan menjadi lebih murni."
      }
    ],
    skill: "Bereksperimen & Teliti",
    skill_ikon: "🧪 🔬",
    discoveryDest: "golden_age_science",
    praktik: [
      "Melakukan percobaan sains sederhana bersama orang dewasa.",
      "Mencatat hasil pengamatan dengan rapi.",
      "Tidak mengubah hasil pengamatan hanya agar sesuai dengan tebakan."
    ],
    kuis: [
      {
        q: "Jabir bin Hayyan banyak dikenal dalam bidang apa?",
        opts: [
          "Kimia",
          "Musik",
          "Arsitektur"
        ],
        a: 0
      },
      {
        q: "Apa yang penting dalam penelitian Jabir?",
        opts: [
          "Menebak",
          "Eksperimen dan pengamatan",
          "Bermain"
        ],
        a: 1
      },
      {
        q: "Apa arti pemurnian?",
        opts: [
          "Mencampur semua bahan",
          "Membakar semua benda",
          "Memisahkan kotoran dari suatu bahan"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan mengamati sesuatu dengan teliti dan mencatat hasilnya apa adanya."
  },
  {
    id: "ibnu_rushd",
    kategori: "scientist",
    nama: "Abu Al-Walid Muhammad Ibn Rushd",
    julukan: "Filsuf dan Dokter Andalusia (1126–1198 M)",
    tema: "Pemikiran, Kedokteran, dan Logika",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu menemukan sebuah pertanyaan sulit lalu mencoba mencari jawabannya dengan berpikir dari berbagai sisi?",
      "Ibn Rushd adalah ilmuwan dan pemikir dari Andalusia yang mempelajari filsafat, kedokteran, hukum, dan berbagai ilmu dengan pikiran yang tajam."
    ],
    belajar: {
      siapa: "Ibn Rushd adalah seorang filsuf, dokter, ahli hukum, dan penulis terkenal dari Cordoba, Andalusia.",
      kapan: "Ia hidup pada abad ke-12 M.",
      dilakukan: "Ia menulis berbagai karya tentang filsafat dan kedokteran serta memberikan penjelasan mendalam terhadap karya para pemikir sebelumnya.",
      kontribusi: "Pemikirannya berpengaruh besar dalam perkembangan filsafat dan ilmu pengetahuan di dunia Islam serta Eropa.",
      tantangan: "Sebagian pemikirannya menghadapi perdebatan dan kritik. Ia tetap tekun menulis, belajar, dan berdiskusi."
    },
    fakta: [
      "Ibn Rushd lahir di Cordoba, Andalusia.",
      "Ia dikenal di Eropa dengan nama Averroes.",
      "Ia juga merupakan seorang dokter yang menulis tentang kedokteran.",
      "Ia sangat menghargai penggunaan akal dan berpikir secara logis."
    ],
    kata_baru: [
      {
        kata: "Filsafat",
        arti: "Cara mempelajari pertanyaan mendalam tentang kehidupan, pengetahuan, dan kebenaran."
      },
      {
        kata: "Logika",
        arti: "Cara berpikir secara teratur agar kesimpulan lebih masuk akal."
      },
      {
        kata: "Andalusia",
        arti: "Wilayah di Semenanjung Iberia yang pernah menjadi pusat peradaban Islam."
      }
    ],
    skill: "Berpikir Logis & Bertanya",
    skill_ikon: "🧠 ❓",
    discoveryDest: "golden_age_science",
    praktik: [
      "Berani bertanya ketika belum memahami pelajaran.",
      "Mendengarkan pendapat berbeda dengan sopan.",
      "Memikirkan alasan sebelum mengambil keputusan."
    ],
    kuis: [
      {
        q: "Ibn Rushd terkenal dalam bidang apa?",
        opts: [
          "Filsafat dan kedokteran",
          "Pelayaran",
          "Pertanian"
        ],
        a: 0
      },
      {
        q: "Di kota mana Ibn Rushd lahir?",
        opts: [
          "Baghdad",
          "Cordoba",
          "Makkah"
        ],
        a: 1
      },
      {
        q: "Apa yang dapat kita pelajari dari Ibn Rushd?",
        opts: [
          "Tak perlu bertanya",
          "Selalu mengikuti tebakan",
          "Berpikir dengan logis dan mau belajar"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan berani bertanya dan mencari alasan yang masuk akal sebelum menyimpulkan sesuatu."
  },
  {
    id: "al_farabi",
    kategori: "scientist",
    nama: "Abu Nasr Al-Farabi",
    julukan: "Guru Kedua dalam Filsafat (sekitar 872–950 M)",
    tema: "Filsafat, Logika, dan Ilmu",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana jika semua ilmu yang kamu pelajari ternyata saling berhubungan dan bisa membantu manusia memahami dunia dengan lebih baik?",
      "Al-Farabi adalah pemikir besar yang mempelajari filsafat, logika, musik, politik, dan berbagai cabang ilmu untuk memahami kehidupan secara lebih mendalam."
    ],
    belajar: {
      siapa: "Al-Farabi adalah filsuf dan ilmuwan Muslim yang sangat berpengaruh dalam perkembangan pemikiran.",
      kapan: "Ia hidup pada abad ke-9 hingga ke-10 M.",
      dilakukan: "Ia menulis dan mengembangkan pemikiran tentang logika, masyarakat, ilmu pengetahuan, dan musik.",
      kontribusi: "Ia membantu menghubungkan berbagai bidang ilmu dan menjadikan logika sebagai alat penting untuk berpikir secara teratur.",
      tantangan: "Ia mempelajari banyak bidang yang rumit. Ia menghadapinya dengan membaca, berdiskusi, dan belajar terus-menerus."
    },
    fakta: [
      "Al-Farabi dikenal dengan julukan Guru Kedua dalam tradisi filsafat setelah Aristoteles.",
      "Ia juga menulis tentang teori musik.",
      "Ia memandang ilmu sebagai sesuatu yang saling berhubungan.",
      "Pemikirannya berpengaruh pada banyak ilmuwan setelahnya."
    ],
    kata_baru: [
      {
        kata: "Logika",
        arti: "Cara berpikir secara teratur dan masuk akal."
      },
      {
        kata: "Filsuf",
        arti: "Orang yang mempelajari pertanyaan mendalam tentang ilmu dan kehidupan."
      },
      {
        kata: "Ilmu",
        arti: "Pengetahuan yang dipelajari dan dikembangkan untuk memahami sesuatu."
      }
    ],
    skill: "Berpikir & Menghubungkan",
    skill_ikon: "🧠 🔗",
    discoveryDest: "golden_age_science",
    praktik: [
      "Mencari hubungan antara pelajaran yang berbeda.",
      "Menyusun alasan sebelum menyampaikan pendapat.",
      "Membaca buku dari berbagai bidang untuk menambah wawasan."
    ],
    kuis: [
      {
        q: "Al-Farabi terkenal sebagai seorang...",
        opts: [
          "Filsuf dan ilmuwan",
          "Pelaut",
          "Prajurit"
        ],
        a: 0
      },
      {
        q: "Bidang apa yang juga dipelajari Al-Farabi?",
        opts: [
          "Musik",
          "Sepak bola",
          "Balap"
        ],
        a: 0
      },
      {
        q: "Apa yang membantu Al-Farabi berpikir secara teratur?",
        opts: [
          "Tebakan",
          "Logika",
          "Keberuntungan"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan mempelajari satu hal baru dan mencari hubungannya dengan ilmu yang sudah kuketahui."
  },
  {
    id: "al_kindi",
    kategori: "scientist",
    nama: "Ya'qub bin Ishaq Al-Kindi",
    julukan: "Filsuf Bangsa Arab (sekitar 801–873 M)",
    tema: "Filsafat, Matematika, dan Keingintahuan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu membayangkan seorang ilmuwan yang mempelajari matematika, musik, kedokteran, bahkan cara menyampaikan pesan rahasia?",
      "Al-Kindi adalah ilmuwan serba bisa yang menggunakan matematika dan logika untuk mempelajari banyak hal dan memecahkan berbagai masalah."
    ],
    belajar: {
      siapa: "Al-Kindi adalah filsuf dan ilmuwan Muslim yang hidup pada masa awal kejayaan ilmu pengetahuan Islam.",
      kapan: "Ia hidup pada abad ke-9 M dan banyak berkarya di Baghdad.",
      dilakukan: "Ia menulis tentang filsafat, matematika, musik, kedokteran, dan ilmu alam.",
      kontribusi: "Ia membantu memperkenalkan dan mengembangkan berbagai pengetahuan dari beragam tradisi ke dalam dunia Islam.",
      tantangan: "Mempelajari banyak bidang membutuhkan rasa ingin tahu dan kerja keras. Al-Kindi terus membaca, meneliti, dan menulis."
    },
    fakta: [
      "Al-Kindi menulis ratusan risalah tentang berbagai bidang ilmu.",
      "Ia banyak berkarya di Baghdad.",
      "Ia menggunakan matematika dalam penelitian musik dan bidang lainnya.",
      "Ia juga dikenal karena gagasannya tentang pemecahan kode melalui analisis huruf."
    ],
    kata_baru: [
      {
        kata: "Risalah",
        arti: "Tulisan atau karya yang membahas suatu ilmu atau gagasan."
      },
      {
        kata: "Matematika",
        arti: "Ilmu yang mempelajari angka, bentuk, pola, dan hubungan."
      },
      {
        kata: "Kode",
        arti: "Cara menyampaikan pesan dengan aturan atau tanda tertentu."
      }
    ],
    skill: "Berpikir Kreatif & Berhitung",
    skill_ikon: "🧠 ➗",
    discoveryDest: "golden_age_science",
    praktik: [
      "Mencoba menyelesaikan teka-teki dengan cara berbeda.",
      "Berlatih matematika dengan rutin.",
      "Membaca tentang bidang ilmu yang belum pernah dipelajari."
    ],
    kuis: [
      {
        q: "Al-Kindi dikenal sebagai ilmuwan yang...",
        opts: [
          "Mempelajari banyak bidang",
          "Hanya mempelajari olahraga",
          "Hanya belajar memasak"
        ],
        a: 0
      },
      {
        q: "Di kota mana Al-Kindi banyak berkarya?",
        opts: [
          "Baghdad",
          "Madinah",
          "Yerusalem"
        ],
        a: 0
      },
      {
        q: "Ilmu apa yang digunakan Al-Kindi dalam banyak penelitiannya?",
        opts: [
          "Matematika",
          "Permainan",
          "Perburuan"
        ],
        a: 0
      }
    ],
    misi: "Hari ini aku akan menggunakan rasa ingin tahuku untuk mempelajari satu hal yang belum pernah kuketahui."
  },
  {
    id: "nasir_al_din_al_tusi",
    kategori: "scientist",
    nama: "Nasir Al-Din Al-Tusi",
    julukan: "Astronom dan Matematikawan Maragha (1201–1274 M)",
    tema: "Astronomi, Matematika, dan Penelitian",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu melihat langit malam dan bertanya-tanya bagaimana para ilmuwan bisa mengetahui posisi bintang dan planet?",
      "Nasir Al-Din Al-Tusi adalah ilmuwan yang mengembangkan astronomi dan matematika serta membangun pusat pengamatan langit yang terkenal."
    ],
    belajar: {
      siapa: "Al-Tusi adalah ilmuwan Persia yang terkenal dalam bidang astronomi, matematika, dan filsafat.",
      kapan: "Ia hidup pada abad ke-13 M.",
      dilakukan: "Ia memimpin kegiatan penelitian di Observatorium Maragha dan membuat tabel astronomi yang lebih akurat.",
      kontribusi: "Penelitiannya membantu perkembangan astronomi dan matematika serta memengaruhi ilmuwan setelahnya.",
      tantangan: "Mengamati benda langit membutuhkan perhitungan dan ketelitian tinggi. Ia menggunakan pengamatan dan matematika secara bersama-sama."
    },
    fakta: [
      "Al-Tusi memimpin Observatorium Maragha di Persia.",
      "Ia menulis karya penting tentang astronomi dan matematika.",
      "Ia mengembangkan konsep matematika yang dikenal sebagai pasangan Al-Tusi.",
      "Karyanya menjadi bagian penting dalam sejarah perkembangan astronomi."
    ],
    kata_baru: [
      {
        kata: "Observatorium",
        arti: "Tempat khusus untuk mengamati benda-benda langit."
      },
      {
        kata: "Astronomi",
        arti: "Ilmu yang mempelajari benda-benda di langit."
      },
      {
        kata: "Orbit",
        arti: "Jalur yang dilalui benda langit saat bergerak mengelilingi benda lain."
      }
    ],
    skill: "Mengamati & Menghitung",
    skill_ikon: "🔭 ➗",
    discoveryDest: "golden_age_science",
    praktik: [
      "Mengamati bulan dan bintang bersama orang dewasa.",
      "Berlatih menghitung dengan teliti.",
      "Mencatat perubahan yang kamu lihat dari hari ke hari."
    ],
    kuis: [
      {
        q: "Al-Tusi terkenal dalam bidang...",
        opts: [
          "Astronomi dan matematika",
          "Masakan",
          "Olahraga"
        ],
        a: 0
      },
      {
        q: "Apa fungsi observatorium?",
        opts: [
          "Mengamati benda langit",
          "Menyimpan makanan",
          "Membuat pakaian"
        ],
        a: 0
      },
      {
        q: "Apa yang digunakan Al-Tusi untuk mempelajari langit?",
        opts: [
          "Tebakan saja",
          "Pengamatan dan matematika",
          "Cerita rakyat saja"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan mengamati sesuatu dengan teliti lalu mencatat apa yang berubah."
  },
  {
    id: "al_jazari",
    kategori: "scientist",
    nama: "Badi' Al-Zaman Al-Jazari",
    julukan: "Pelopor Rekayasa Mekanik dan Automata (1136–1206 M)",
    tema: "Rekayasa, Kreativitas, dan Ketelitian",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana jika sebuah mesin bisa bergerak sendiri mengikuti rangkaian mekanisme yang sudah dirancang sebelumnya?",
      "Al-Jazari adalah insinyur Muslim yang merancang berbagai mesin, jam air, pompa, dan automata yang menunjukkan betapa kreatifnya teknologi pada masanya."
    ],
    belajar: {
      siapa: "Al-Jazari adalah insinyur dan penemu dari wilayah Mesopotamia yang terkenal karena karya rekayasa mekaniknya.",
      kapan: "Ia hidup pada abad ke-12 hingga awal abad ke-13 M.",
      dilakukan: "Ia merancang dan membuat berbagai mesin seperti pompa air, jam, dan automata.",
      kontribusi: "Karyanya menjadi bagian penting dalam sejarah rekayasa mekanik dan membantu menunjukkan cara kerja mesin secara sistematis.",
      tantangan: "Membuat mesin yang bergerak tepat membutuhkan banyak percobaan. Ia menggambar, merancang, memperbaiki, lalu menguji kembali mekanismenya."
    },
    fakta: [
      "Al-Jazari menulis buku terkenal tentang perangkat mekanik.",
      "Ia membuat berbagai jenis jam air.",
      "Ia merancang pompa untuk membantu mengangkat air.",
      "Beberapa automata buatannya dapat melakukan gerakan tertentu secara otomatis."
    ],
    kata_baru: [
      {
        kata: "Rekayasa",
        arti: "Kegiatan merancang dan membuat sesuatu untuk menyelesaikan masalah."
      },
      {
        kata: "Automata",
        arti: "Mesin yang dapat melakukan gerakan tertentu secara otomatis."
      },
      {
        kata: "Mekanisme",
        arti: "Susunan bagian yang bekerja bersama agar sebuah alat dapat bergerak."
      }
    ],
    skill: "Merancang & Memecahkan Masalah",
    skill_ikon: "⚙️ 🛠️",
    discoveryDest: "golden_age_science",
    praktik: [
      "Membuat model sederhana dari kardus atau balok.",
      "Mencoba memperbaiki benda dengan bantuan orang dewasa.",
      "Menggambar rancangan sebelum membuat sebuah proyek."
    ],
    kuis: [
      {
        q: "Al-Jazari terkenal dalam bidang...",
        opts: [
          "Rekayasa mekanik",
          "Sastra",
          "Pertanian"
        ],
        a: 0
      },
      {
        q: "Apa yang dirancang Al-Jazari?",
        opts: [
          "Mesin dan jam",
          "Kapal luar angkasa",
          "Komputer modern"
        ],
        a: 0
      },
      {
        q: "Apa arti automata?",
        opts: [
          "Buku sejarah",
          "Mesin yang dapat bergerak secara otomatis",
          "Jenis tanaman"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan menggambar satu rancangan alat yang bisa membantu menyelesaikan masalah sederhana."
  },
  {
    id: "abbas_ibn_firnas",
    kategori: "scientist",
    nama: "Abbas Ibn Firnas",
    julukan: "Pelopor Eksperimen Penerbangan (810–887 M)",
    tema: "Keberanian, Eksperimen, dan Inovasi",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu melihat burung terbang lalu berpikir, 'Bisakah manusia membuat alat yang membantunya terbang?'",
      "Abbas Ibn Firnas adalah ilmuwan dari Andalusia yang berani melakukan eksperimen penerbangan dan mempelajari berbagai bidang ilmu."
    ],
    belajar: {
      siapa: "Abbas Ibn Firnas adalah ilmuwan dan penemu dari Andalusia yang tertarik pada astronomi, mekanika, dan penerbangan.",
      kapan: "Ia hidup pada abad ke-9 M.",
      dilakukan: "Ia membuat alat bersayap dan melakukan percobaan terbang dari tempat tinggi.",
      kontribusi: "Eksperimennya menjadi bagian menarik dalam sejarah awal upaya manusia memahami dan meniru prinsip penerbangan.",
      tantangan: "Eksperimen penerbangan memiliki risiko besar. Ia belajar dari percobaan dan berusaha memahami bagaimana tubuh serta alat dapat bergerak di udara."
    },
    fakta: [
      "Ibn Firnas hidup di Andalusia.",
      "Ia melakukan eksperimen menggunakan alat yang menyerupai sayap.",
      "Ia juga mempelajari astronomi dan membuat alat untuk mengamati langit.",
      "Namanya sering dikenang dalam sejarah awal eksperimen penerbangan."
    ],
    kata_baru: [
      {
        kata: "Penerbangan",
        arti: "Kegiatan bergerak atau melakukan perjalanan melalui udara."
      },
      {
        kata: "Inovasi",
        arti: "Gagasan atau cara baru untuk membuat sesuatu menjadi lebih baik."
      },
      {
        kata: "Mekanika",
        arti: "Ilmu yang mempelajari gerak dan gaya pada benda."
      }
    ],
    skill: "Berani Mencoba & Berinovasi",
    skill_ikon: "🪽 💡",
    discoveryDest: "golden_age_science",
    praktik: [
      "Berani mencoba proyek baru dengan pengawasan orang dewasa.",
      "Belajar dari kesalahan tanpa langsung menyerah.",
      "Mencari cara baru untuk menyelesaikan masalah."
    ],
    kuis: [
      {
        q: "Apa eksperimen terkenal Ibn Firnas?",
        opts: [
          "Eksperimen penerbangan",
          "Eksperimen membuat kapal selam",
          "Eksperimen membuat kereta"
        ],
        a: 0
      },
      {
        q: "Di wilayah mana Ibn Firnas hidup dan berkarya?",
        opts: [
          "Andalusia",
          "India",
          "Cina"
        ],
        a: 0
      },
      {
        q: "Apa pelajaran dari keberanian Ibn Firnas?",
        opts: [
          "Jangan pernah mencoba",
          "Berani mencoba sambil belajar dari hasilnya",
          "Selalu terburu-buru"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan mencoba satu hal baru dengan aman dan belajar dari hasil percobaanku."
  },
  {
    id: "ibn_khaldun",
    kategori: "scientist",
    nama: "Abdurrahman Ibn Khaldun",
    julukan: "Pelopor Ilmu Sosial dan Historiografi (1332–1406 M)",
    tema: "Sejarah, Masyarakat, dan Berpikir Kritis",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu bertanya mengapa sebuah kerajaan bisa menjadi kuat, lalu suatu hari menjadi lemah?",
      "Ibn Khaldun adalah pemikir besar yang mempelajari sejarah dan masyarakat untuk mencari tahu mengapa peradaban bisa tumbuh, berkembang, dan berubah."
    ],
    belajar: {
      siapa: "Ibn Khaldun adalah sejarawan, pemikir, dan ilmuwan sosial dari Afrika Utara.",
      kapan: "Ia hidup pada abad ke-14 hingga awal abad ke-15 M.",
      dilakukan: "Ia mengamati masyarakat dan menulis Muqaddimah, sebuah karya penting tentang sejarah dan kehidupan manusia.",
      kontribusi: "Pemikirannya membantu membentuk cara baru dalam mempelajari sejarah dengan melihat sebab, kondisi masyarakat, ekonomi, dan perubahan sosial.",
      tantangan: "Ia hidup di masa penuh perubahan politik. Ia menggunakan pengalaman dan pengamatan untuk memahami mengapa masyarakat berubah."
    },
    fakta: [
      "Ibn Khaldun lahir di Tunis.",
      "Karya terkenalnya adalah Muqaddimah.",
      "Ia tidak hanya mencatat peristiwa, tetapi juga mencari alasan di balik peristiwa tersebut.",
      "Pemikirannya sering dianggap sebagai salah satu dasar penting ilmu sosial."
    ],
    kata_baru: [
      {
        kata: "Peradaban",
        arti: "Kehidupan masyarakat yang berkembang dalam ilmu, budaya, pemerintahan, dan kehidupan sosial."
      },
      {
        kata: "Historiografi",
        arti: "Cara menulis dan mempelajari sejarah."
      },
      {
        kata: "Masyarakat",
        arti: "Sekumpulan orang yang hidup bersama dan saling berhubungan."
      }
    ],
    skill: "Menganalisis & Berpikir Kritis",
    skill_ikon: "📜 🧠",
    discoveryDest: "golden_age_science",
    praktik: [
      "Mencari alasan di balik sebuah peristiwa sebelum membuat kesimpulan.",
      "Mendengarkan cerita sejarah lalu bertanya apa pelajarannya.",
      "Membandingkan informasi dari beberapa sumber dengan bantuan orang dewasa."
    ],
    kuis: [
      {
        q: "Ibn Khaldun terkenal sebagai pemikir dalam bidang...",
        opts: [
          "Sejarah dan ilmu sosial",
          "Penerbangan",
          "Kimia"
        ],
        a: 0
      },
      {
        q: "Apa nama karya terkenal Ibn Khaldun?",
        opts: [
          "Muqaddimah",
          "Al-Qanun",
          "Al-Jabr"
        ],
        a: 0
      },
      {
        q: "Apa yang dilakukan Ibn Khaldun saat mempelajari sejarah?",
        opts: [
          "Hanya menghafal tanggal",
          "Mencari sebab di balik perubahan masyarakat",
          "Mengabaikan fakta"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan bertanya 'mengapa' sebelum membuat kesimpulan dan mencoba memahami alasan di balik sebuah kejadian."
  },
  {
    id: "imam_abu_hanifah",
    kategori: "knowledge",
    nama: "Imam Abu Hanifah",
    julukan: "Imam Mazhab Hanafi (699–767 M)",
    tema: "Ilmu, Ketelitian, dan Kebijaksanaan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu menemukan sebuah masalah lalu mencoba memikirkannya dengan tenang sebelum menentukan jawaban?",
      "Imam Abu Hanifah adalah ulama besar yang terkenal karena kecerdasannya dalam memahami hukum Islam dan menjadi pendiri mazhab Hanafi."
    ],
    belajar: {
      siapa: "Imam Abu Hanifah adalah ulama besar dari Kufah yang menjadi salah satu imam mazhab paling terkenal dalam sejarah Islam.",
      kapan: "Ia hidup pada abad ke-7 hingga ke-8 M, pada masa akhir pemerintahan Bani Umayyah dan awal Bani Abbasiyah.",
      dilakukan: "Ia mempelajari Al-Qur'an, hadis, dan hukum Islam dengan sangat mendalam serta mengajarkan ilmunya kepada banyak murid.",
      kontribusi: "Pemikiran dan metode belajarnya menjadi dasar penting bagi berkembangnya mazhab Hanafi yang kemudian dianut oleh banyak umat Islam.",
      tantangan: "Ia menghadapi tekanan politik dan tetap berusaha menjaga prinsip serta kebebasan dalam menyampaikan ilmu."
    },
    fakta: [
      "Nama lengkapnya adalah Nu'man bin Tsabit.",
      "Ia lahir dan banyak berkembang sebagai ulama di Kufah.",
      "Ia dikenal sebagai orang yang cerdas dan kuat dalam berpikir.",
      "Mazhab Hanafi kemudian berkembang luas di berbagai wilayah dunia Islam."
    ],
    kata_baru: [
      {
        kata: "Mazhab",
        arti: "Cara atau metode ulama dalam memahami dan menjelaskan hukum Islam."
      },
      {
        kata: "Ijtihad",
        arti: "Usaha sungguh-sungguh seorang ahli untuk memahami hukum dari sumber-sumber Islam."
      },
      {
        kata: "Ulama",
        arti: "Orang yang mendalami ilmu agama."
      }
    ],
    skill: "Berpikir Kritis & Belajar",
    skill_ikon: "🧠 📖",
    discoveryDest: "age_of_knowledge",
    praktik: [
      "Memikirkan masalah dengan tenang sebelum menjawab.",
      "Rajin bertanya kepada guru ketika belum memahami pelajaran.",
      "Mendengarkan pendapat orang lain dengan sopan."
    ],
    kuis: [
      {
        q: "Mazhab apa yang didirikan oleh Imam Abu Hanifah?",
        opts: [
          "Mazhab Maliki",
          "Mazhab Hanafi",
          "Mazhab Syafi'i"
        ],
        a: 1
      },
      {
        q: "Apa yang sangat ditekuni Imam Abu Hanifah?",
        opts: [
          "Hukum dan ilmu Islam",
          "Pembuatan kapal",
          "Ilmu penerbangan"
        ],
        a: 0
      },
      {
        q: "Apa pelajaran dari Imam Abu Hanifah?",
        opts: [
          "Menjawab tanpa berpikir",
          "Tak perlu belajar",
          "Berpikir dengan teliti sebelum mengambil keputusan"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan berpikir dengan tenang sebelum menjawab dan bertanya jika ada sesuatu yang belum kupahami."
  },
  {
    id: "imam_malik",
    kategori: "knowledge",
    nama: "Imam Malik bin Anas",
    julukan: "Imam Darul Hijrah (711–795 M)",
    tema: "Hadis, Ketelitian, dan Keteladanan",
    pengantar: [
      "Halo, Young Hero!",
      "Bagaimana jika kamu harus mengingat dan menjaga ribuan pelajaran agar tidak berubah atau salah ketika disampaikan kepada orang lain?",
      "Imam Malik adalah ulama besar di Madinah yang sangat teliti dalam mempelajari hadis dan menjadi pendiri mazhab Maliki."
    ],
    belajar: {
      siapa: "Imam Malik bin Anas adalah ulama besar, ahli hadis, dan pendiri mazhab Maliki.",
      kapan: "Ia hidup pada abad ke-8 M dan sebagian besar hidupnya berkarya di Madinah.",
      dilakukan: "Ia mengajarkan hadis dan ilmu agama serta menyusun kitab Al-Muwatta yang menjadi salah satu karya penting dalam sejarah hadis.",
      kontribusi: "Ia membantu menjaga dan menyebarkan ilmu hadis serta membangun metode keilmuan yang menjadi dasar mazhab Maliki.",
      tantangan: "Ia pernah menghadapi tekanan karena pendapat keagamaannya. Ia tetap menjaga prinsip dan tidak mudah menyerah dalam memegang ilmu."
    },
    fakta: [
      "Imam Malik lahir di Madinah.",
      "Ia sangat menghormati hadis Nabi Muhammad ﷺ.",
      "Kitab Al-Muwatta merupakan salah satu karya terkenalnya.",
      "Mazhab Maliki berkembang luas terutama di Afrika Utara dan wilayah lainnya."
    ],
    kata_baru: [
      {
        kata: "Hadis",
        arti: "Perkataan, perbuatan, dan keteladanan Nabi Muhammad ﷺ."
      },
      {
        kata: "Al-Muwatta",
        arti: "Kitab terkenal yang disusun oleh Imam Malik berisi hadis dan pembahasan hukum."
      },
      {
        kata: "Ketelitian",
        arti: "Sikap memeriksa sesuatu dengan cermat agar tidak mudah salah."
      }
    ],
    skill: "Menghafal & Teliti",
    skill_ikon: "📚 🔍",
    discoveryDest: "age_of_knowledge",
    praktik: [
      "Memeriksa kembali tugas sebelum dikumpulkan.",
      "Mendengarkan penjelasan guru dengan sungguh-sungguh.",
      "Tidak menyebarkan informasi sebelum memastikan kebenarannya."
    ],
    kuis: [
      {
        q: "Mazhab apa yang didirikan Imam Malik?",
        opts: [
          "Mazhab Hanafi",
          "Mazhab Hanbali",
          "Mazhab Maliki"
        ],
        a: 2
      },
      {
        q: "Apa nama kitab terkenal yang disusun Imam Malik?",
        opts: [
          "Al-Muwatta",
          "Al-Jabr",
          "Al-Qanun"
        ],
        a: 0
      },
      {
        q: "Sikap apa yang dapat diteladani dari Imam Malik?",
        opts: [
          "Tergesa-gesa",
          "Teliti dalam mencari dan menyampaikan ilmu",
          "Mudah percaya pada semua berita"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan memeriksa kembali pekerjaanku agar tidak terburu-buru dan tidak mudah melakukan kesalahan."
  },
  {
    id: "imam_al_syafii",
    kategori: "knowledge",
    nama: "Imam Muhammad bin Idris Al-Syafi'i",
    julukan: "Imam Mazhab Syafi'i (767–820 M)",
    tema: "Ilmu, Logika, dan Ketekunan",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu berpindah tempat demi belajar dari guru-guru terbaik dan tidak berhenti mencari ilmu?",
      "Imam Al-Syafi'i adalah ulama besar yang melakukan perjalanan untuk menuntut ilmu dan kemudian menjadi pendiri mazhab Syafi'i."
    ],
    belajar: {
      siapa: "Imam Al-Syafi'i adalah ulama besar yang menguasai hadis, fikih, bahasa Arab, dan ilmu lainnya.",
      kapan: "Ia hidup pada abad ke-8 hingga awal abad ke-9 M.",
      dilakukan: "Ia belajar kepada banyak ulama, menyusun pemikiran hukum Islam secara sistematis, dan mengajarkan ilmunya kepada banyak murid.",
      kontribusi: "Ia memberikan sumbangan besar dalam perkembangan ilmu usul fikih dan menjadi pendiri mazhab Syafi'i.",
      tantangan: "Ia harus menempuh perjalanan jauh dan belajar kepada banyak guru. Ketekunannya membuat pengetahuannya semakin luas."
    },
    fakta: [
      "Imam Al-Syafi'i lahir di Gaza dan tumbuh besar di Makkah.",
      "Ia belajar kepada Imam Malik di Madinah.",
      "Ia dikenal sangat kuat dalam bahasa Arab dan ilmu hadis.",
      "Mazhab Syafi'i berkembang luas di Indonesia dan berbagai wilayah dunia."
    ],
    kata_baru: [
      {
        kata: "Fikih",
        arti: "Ilmu yang membahas cara memahami hukum dan aturan dalam Islam."
      },
      {
        kata: "Usul Fikih",
        arti: "Ilmu tentang prinsip dan cara memahami hukum Islam."
      },
      {
        kata: "Menuntut Ilmu",
        arti: "Berusaha sungguh-sungguh untuk mendapatkan pengetahuan."
      }
    ],
    skill: "Belajar & Berpikir Logis",
    skill_ikon: "📖 🧠",
    discoveryDest: "age_of_knowledge",
    praktik: [
      "Belajar dari beberapa sumber yang baik.",
      "Tidak mudah menyerah ketika pelajaran terasa sulit.",
      "Membuat catatan agar ilmu yang dipelajari lebih mudah diingat."
    ],
    kuis: [
      {
        q: "Mazhab apa yang didirikan Imam Al-Syafi'i?",
        opts: [
          "Mazhab Syafi'i",
          "Mazhab Hanafi",
          "Mazhab Maliki"
        ],
        a: 0
      },
      {
        q: "Kepada siapa Imam Al-Syafi'i pernah belajar di Madinah?",
        opts: [
          "Imam Malik",
          "Imam Ahmad",
          "Imam Muslim"
        ],
        a: 0
      },
      {
        q: "Apa pelajaran utama dari perjalanan Imam Al-Syafi'i?",
        opts: [
          "Ilmu bisa didapat tanpa belajar",
          "Ketekunan dalam menuntut ilmu sangat penting",
          "Belajar hanya perlu dilakukan ketika ujian"
        ],
        a: 1
      }
    ],
    misi: "Hari ini aku akan belajar dengan sungguh-sungguh meskipun ada pelajaran yang terasa sulit."
  },
  {
    id: "imam_ahmad_bin_hanbal",
    kategori: "knowledge",
    nama: "Imam Ahmad bin Hanbal",
    julukan: "Imam Mazhab Hanbali (780–855 M)",
    tema: "Keteguhan, Ilmu, dan Kesabaran",
    pengantar: [
      "Halo, Young Hero!",
      "Pernahkah kamu harus mempertahankan sesuatu yang kamu yakini benar meskipun banyak orang memberikan tekanan?",
      "Imam Ahmad bin Hanbal adalah ulama besar yang dikenal karena keteguhan dalam memegang prinsip dan menjadi pendiri mazhab Hanbali."
    ],
    belajar: {
      siapa: "Imam Ahmad bin Hanbal adalah ahli hadis dan fikih yang menjadi salah satu imam besar dalam sejarah Islam.",
      kapan: "Ia hidup pada abad ke-8 hingga ke-9 M dan banyak berkarya di Baghdad.",
      dilakukan: "Ia mengumpulkan dan mempelajari hadis dalam perjalanan panjang serta menyusun Musnad Ahmad.",
      kontribusi: "Ia membantu menjaga warisan hadis dan menjadi pendiri mazhab Hanbali.",
      tantangan: "Ia menghadapi tekanan berat ketika mempertahankan keyakinan ilmiahnya. Ia tetap sabar dan tidak mudah menyerah."
    },
    fakta: [
      "Imam Ahmad lahir di Baghdad.",
      "Ia melakukan perjalanan jauh untuk mempelajari hadis.",
      "Kitab Musnad Ahmad merupakan salah satu karya terkenalnya.",
      "Ia dikenal sangat sabar ketika menghadapi ujian."
    ],
    kata_baru: [
      {
        kata: "Musnad",
        arti: "Kumpulan hadis yang disusun dengan cara tertentu berdasarkan para periwayatnya."
      },
      {
        kata: "Keteguhan",
        arti: "Tetap kuat memegang prinsip yang diyakini benar."
      },
      {
        kata: "Sabar",
        arti: "Tetap tenang dan tidak mudah menyerah saat menghadapi kesulitan."
      }
    ],
    skill: "Sabar & Teguh",
    skill_ikon: "🛡️ 📚",
    discoveryDest: "age_of_knowledge",
    praktik: [
      "Tetap berusaha ketika mendapatkan soal yang sulit.",
      "Berani mengatakan yang benar dengan sopan.",
      "Tidak menyerah hanya karena mengalami kegagalan."
    ],
    kuis: [
      {
        q: "Mazhab apa yang dikaitkan dengan Imam Ahmad bin Hanbal?",
        opts: [
          "Mazhab Maliki",
          "Mazhab Hanbali",
          "Mazhab Syafi'i"
        ],
        a: 1
      },
      {
        q: "Apa nama karya terkenal Imam Ahmad?",
        opts: [
          "Musnad Ahmad",
          "Al-Muwatta",
          "Al-Qanun"
        ],
        a: 0
      },
      {
        q: "Sifat apa yang sangat terkenal dari Imam Ahmad?",
        opts: [
          "Mudah menyerah",
          "Suka berlebihan",
          "Sabar dan teguh memegang prinsip"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan tetap sabar dan tidak menyerah ketika menghadapi tugas yang sulit."
  },
  {
    id: "imam_muslim",
    kategori: "knowledge",
    nama: "Imam Muslim bin Al-Hajjaj",
    julukan: "Penyusun Sahih Muslim (sekitar 821–875 M)",
    tema: "Hadis, Ketelitian, dan Kejujuran",
    pengantar: [
      "Halo, Young Hero!",
      "Bayangkan kamu harus memeriksa ribuan cerita dan hanya memilih yang benar-benar dapat dipercaya. Apakah kamu akan melakukannya dengan tergesa-gesa?",
      "Imam Muslim adalah ulama ahli hadis yang terkenal karena ketelitiannya dalam mengumpulkan dan menyusun hadis Nabi Muhammad ﷺ."
    ],
    belajar: {
      siapa: "Imam Muslim bin Al-Hajjaj adalah ulama besar dan ahli hadis yang berasal dari wilayah Naisabur.",
      kapan: "Ia hidup pada abad ke-9 M.",
      dilakukan: "Ia melakukan perjalanan untuk belajar hadis dan meneliti sanad serta isi hadis sebelum memasukkannya ke dalam kitabnya.",
      kontribusi: "Ia menyusun Sahih Muslim, salah satu kitab hadis paling penting yang menjadi rujukan umat Islam.",
      tantangan: "Mengumpulkan hadis dari berbagai tempat membutuhkan perjalanan panjang dan ketelitian yang luar biasa. Ia tetap tekun memeriksa setiap informasi."
    },
    fakta: [
      "Nama lengkapnya adalah Muslim bin Al-Hajjaj Al-Qusyairi.",
      "Ia melakukan perjalanan ke berbagai wilayah untuk mempelajari hadis.",
      "Sahih Muslim termasuk Kutubus Sittah, yaitu enam kitab hadis utama dalam tradisi Sunni.",
      "Ia sangat memperhatikan keakuratan sanad hadis."
    ],
    kata_baru: [
      {
        kata: "Sanad",
        arti: "Rangkaian orang yang menyampaikan sebuah hadis dari satu generasi ke generasi berikutnya."
      },
      {
        kata: "Sahih",
        arti: "Dalam ilmu hadis, berarti hadis yang memenuhi syarat-syarat keautentikan tertentu."
      },
      {
        kata: "Periwayat",
        arti: "Orang yang menyampaikan hadis dari satu generasi kepada generasi berikutnya."
      }
    ],
    skill: "Meneliti & Memeriksa",
    skill_ikon: "🔍 📜",
    discoveryDest: "age_of_knowledge",
    praktik: [
      "Memeriksa sumber informasi sebelum membagikannya kepada teman.",
      "Membandingkan jawaban sebelum memilih yang paling tepat.",
      "Tidak langsung percaya pada berita yang belum jelas kebenarannya."
    ],
    kuis: [
      {
        q: "Apa kitab hadis terkenal yang disusun Imam Muslim?",
        opts: [
          "Sahih Muslim",
          "Al-Muwatta",
          "Musnad Ahmad"
        ],
        a: 0
      },
      {
        q: "Apa yang diperiksa Imam Muslim ketika mempelajari hadis?",
        opts: [
          "Warna buku",
          "Sanad dan isi hadis",
          "Ukuran rumah"
        ],
        a: 1
      },
      {
        q: "Apa pelajaran utama dari Imam Muslim?",
        opts: [
          "Percaya semua berita",
          "Menyebarkan berita secepat mungkin",
          "Memeriksa informasi dengan teliti sebelum menyampaikannya"
        ],
        a: 2
      }
    ],
    misi: "Hari ini aku akan memeriksa kebenaran sebuah informasi sebelum membagikannya kepada orang lain."
  }
];

// Fondasi Data untuk Journey Map â€” The Great Hero Voyage
const DESTINATIONS = [
  {
    id: "prophetic_gen",
    nama: "The Prophetic Generation",
    lokasi: "⛺ Madinah",
    ikon: "🌙",
    syaratXP: 0,
    heroes: ["abu_bakr", "umar_khattab", "utsman_affan", "ali_thalib", "bilal_rabah", "saad_abi_waqqas", "hamzah", "khadijah_binti_khuwailid", "aisyah_binti_abu_bakar", "salman_al_farisi", "abu_hurairah"]
  },
  {
    id: "age_of_knowledge",
    nama: "The Age of Knowledge",
    lokasi: "🏛️ Baghdad",
    ikon: "🔭",
    syaratXP: 15,
    heroes: ["bukhari", "ibn_haytham", "ibnu_sina", "imam_abu_hanifah", "imam_malik", "imam_al_syafii", "imam_ahmad_bin_hanbal", "imam_muslim"]
  },
  {
    id: "golden_age_science",
    nama: "The Golden Age of Science",
    lokasi: "🏰 Cordoba",
    ikon: "🏰",
    syaratXP: 30,
    heroes: ["al_khwarizmi", "al_biruni", "al_zahrawi", "al_razi", "jabir_bin_hayyan", "ibnu_rushd", "al_farabi", "al_kindi", "nasir_al_din_al_tusi", "al_jazari", "abbas_ibn_firnas", "ibn_khaldun"]
  },
  {
    id: "leaders_defenders",
    nama: "Leaders & Defenders",
    lokasi: "⚔️ Damascus",
    ikon: "⚔️",
    syaratXP: 60,
    heroes: ["khalid_walid", "muhammad_alfatih", "thoriq_bin_ziyad", "umar_bin_abdul_aziz", "abu_ubaidah_bin_al_jarrah", "amr_bin_ash", "ikrimah_bin_abu_jahl", "al_qaqa_bin_amr_at_tamimi", "musa_bin_nushair", "muhammad_bin_qasim", "salahuddin_al_ayyubi"]
  },
  {
    id: "builders_civ",
    nama: "Builders of Civilization",
    lokasi: "🏛️ Cairo",
    ikon: "🏛️",
    syaratXP: 90,
    heroes: ["harun_ar_rasyid", "nuruddin_zengi"]
  }
];

// Misi harian
const MISI = [
  { kunci: "baca_semua", target: 3, judul: "Membaca Kisah", desc: "Baca 3 kisah pahlawan apa saja", ikon: "📖" },
  { kunci: "baca_companion", target: 1, judul: "Sahabat Nabi", desc: "Baca 1 kisah dari kategori The Companions", ikon: "🛡️" },
  { kunci: "baca_scientist", target: 1, judul: "Ilmuwan", desc: "Baca 1 kisah dari kategori Scientists", ikon: "🔭" },
  { kunci: "baca_commander", target: 1, judul: "Panglima", desc: "Baca 1 kisah dari kategori Commanders", ikon: "⚔️" },
  { kunci: "baca_builder", target: 1, judul: "Pembangun", desc: "Baca 1 kisah dari kategori Builders", ikon: "🏛️" },
  { kunci: "baca_knowledge", target: 1, judul: "Ulama", desc: "Baca 1 kisah dari kategori Muslim Knowledge", ikon: "📖" },
  { kunci: "kuis_sempurna", target: 2, judul: "Kuis Sempurna", desc: "Jawab kuis dengan benar 100% dua kali", ikon: "💯" }
];

const PANGKAT = [
  { id: 1, nama: "Pencari Ilmu", min: 0, ikon: "🌱", desc: "Baru memulai petualangan." },
  { id: 2, nama: "Hero Magang", min: 10, ikon: "🚶", desc: "Mulai memahami jejak pahlawan." },
  { id: 3, nama: "Sang Penjelajah", min: 30, ikon: "🧭", desc: "Telah menjelajahi banyak sejarah." },
  { id: 4, nama: "Pewaris Kebijaksanaan", min: 60, ikon: "📜", desc: "Memiliki ilmu sejarah yang luas." },
  { id: 5, nama: "The Great Hero", min: 100, ikon: "👑", desc: "Berjiwa pahlawan sejati!" }
];

if(typeof module !== 'undefined') module.exports = { KATEGORI, HEROES, MISI, PANGKAT };




