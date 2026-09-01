{"step_index":5,"source":"MODEL","type":"VIEW_FILE","status":"DONE","created_at":"2026-08-31T14:02:33Z","content":"Created At: 2026-08-31T21:02:33+07:00
Completed At: 2026-08-31T21:02:34+07:00
File Path: `file:///d:/Aplikasi%20WebApp/The%20Great%20Hero%20Muslim%20V1/js/data.js`
Total Lines: 514
Total Bytes: 25561
Showing lines 1 to 514
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: /* ============================================================
2:    DATA TOKOH â€” The Great Hero Muslim
3:    Semua data terpisah dari mesin utama agar mudah ditambah.
4: ============================================================ */
5: 
6: const KATEGORI = [
7:   { id: "companion", nama: "The Companions", warna: "#2E7D32", ikon: "ðŸ›¡ï¸" },
8:   { id: "scientist", nama: "Muslim Scientists", warna: "#0277BD", ikon: "ðŸ”­" },
9:   { id: "commander", nama: "Muslim Commanders", warna: "#B71C1C", ikon: "âš”ï¸" },
10:   { id: "builder", nama: "Builders of Civilization", warna: "#F57F17", ikon: "ðŸ›ï¸" }
11: ];
12: 
13: const HEROES = [
14:   {
15:     id: "abu_bakr",
16:     kategori: "companion",
17:     nama: "Abu Bakr As-Siddiq",
18:     julukan: "Sahabat Terdekat & Khalifah Pertama (573 â€“ 634 M)",
19:     tema: "Kebenaran, Kesetiaan, dan Pengorbanan Tanpa Batas",
20:     pengantar: [
21:       "Halo, Young Hero!",
22:       "Pernahkah kamu memiliki teman yang selalu membelamu apa pun yang terjadi? Teman yang percaya padamu bahkan ketika semua orang meragukanmu?",
23:       "Lebih dari seribu tahun yang lalu, ada seorang pria yang menjadi teman terbaik bagi manusia terbaik, yaitu Nabi Muhammad ï·º. Beliau adalah Abu Bakr, pahlawan kesetiaan yang sejati."
24:     ],
25:     belajar: {
26:       siapa: "Abu Bakr adalah sahabat terdekat Nabi Muhammad ï·º. Nama aslinya adalah Abdullah bin Abi Quhafah.",
27:       kapan: "Beliau hidup di Makkah dan Madinah, pada masa awal kelahiran Islam, dan menjadi Khalifah pertama setelah wafatnya Nabi ï·º.",
28:       dilakukan: "Beliau menemani Nabi ï·º dalam perjalanan hijrah yang berbahaya ke Madinah, dan menyumbangkan seluruh hartanya untuk Islam.",
29:       kontribusi: "Sebagai Khalifah, beliau menyelamatkan umat Islam dari perpecahan dan memerintahkan pengumpulan Al-Qur'an dalam satu mushaf untuk pertama kalinya.",
30:       tantangan: "Beliau menghadapi masa krisis besar ketika Nabi ï·º wafat, namun ia tetap tenang dan memimpin umat melewati masa tersulit tersebut."
31:     },
32:     fakta: [
33:       "Diberi gelar 'As-Siddiq' (Yang Membenarkan) karena langsung mempercayai peristiwa Isra Mi'raj.",
34:       "Menemani Nabi ï·º bersembunyi di Gua Tsur saat dikejar musuh.",
35:       "Khalifah pertama dari Khulafaur Rasyidin.",
36:       "Menginfakkan seluruh harta kekayaannya untuk perjuangan Islam."
37:     ],
38:     kata_baru: [
39:       { kata: "As-Siddiq", arti: "Orang yang sangat membenarkan dan jujur" },
40:       { kata: "Khalifah", arti: "Pemimpin umat Islam" },
41:       { kata: "Hijrah", arti: "Perpindahan untuk menjaga keimanan" }
42:     ],
43:     skill: "Kesetiaan & Keberanian",
44:     skill_ikon: "â¤ï¸",
45:     discoveryDest: "prophetic_gen",
46:     praktik: [
47:       "Menjadi teman yang baik dan setia di saat teman kita sedang kesulitan.",
48:       "Selalu berkata jujur meskipun itu terasa sulit.",
49:       "Membantu sesama dengan sebagian harta yang kita miliki (bersedekah)."
50:     ],
51:     kuis: [
52:       {
53:         q: "Gelar apa yang diberikan kepada Abu Bakr karena kejujurannya?",
54:         opts: ["Al-Faruq", "As-Siddiq", "Al-Amin"],
55:         a: 1
56:       },
57:       {
58:         q: "Apa salah satu jasa terbesar Abu Bakr saat menjadi Khalifah?",
59:         opts: ["Membangun kota Baghdad", "Mengumpulkan mushaf Al-Qur'an", "Menemukan ilmu aljabar"],
60:         a: 1
61:       },
62:       {
63:         q: "Sikap utama apa yang bisa kita teladani dari Abu Bakr kepada Nabi ï·º?",
64:         opts: ["Kecerdasannya dalam matematika", "Kesetiaan tanpa batas", "Kecepatan berlarinya"],
65:         a: 1
66:       }
67:     ],
68:     misi: "Hari ini aku akan membela dan membantu temanku yang sedang kesulitan, dan berkata jujur di segala keadaan."
69:   },
70:   {
71:     id: "umar_khattab",
72:     kategori: "companion",
73:     nama: "Umar bin Khattab",
74:     julukan: "Al-Faruq (Pembeda Kebenaran & Kebatilan)",
75:     tema: "Keadilan, Ketegasan, dan Kepedulian Pemimpin",
76:     pengantar: [
77:       "Halo, Young Hero!",
78:       "Pernahkah kamu melihat orang yang sangat ditakuti, namun ternyata memiliki hati yang paling lembut saat melihat orang kelaparan?",
79:       "Beliau adalah Umar bin Khattab, seorang pemimpin besar yang keadilannya dikenang sepanjang sejarah."
80:     ],
81:     belajar: {
82:       siapa: "Umar bin Khattab adalah Khalifah kedua setelah Abu Bakr. Ia diberi gelar 'Al-Faruq' oleh Nabi ï·º.",
83:       kapan: "Menjadi Khalifah selama 10 tahun (634 â€“ 644 M) pada masa kejayaan awal penyebaran Islam.",
84:       dilakukan: "Beliau yang mengusulkan pengumpulan Al-Qur'an dan menetapkan kalender Hijriah.",
85:       kontribusi: "Membangun sistem pemerintahan yang sangat rapi, mendirikan pengadilan, dan mengatur jaminan sosial untuk rakyat miskin.",
86:       tantangan: "Beliau harus memimpin perluasan wilayah Islam yang sangat cepat sambil memastikan tidak ada satupun rakyatnya, bahkan seekor keledai pun, yang celaka karena kelalaiannya."
87:     },
88:     fakta: [
89:       "Mendapat gelar 'Al-Faruq' karena bisa membedakan kebenaran dan kebatilan dengan tegas.",
90:       "Sering berpatroli malam hari sendirian untuk memastikan rakyatnya tidak ada yang kelaparan.",
91:       "Menetapkan kalender Hijriah yang kita gunakan saat ini.",
92:       "Sangat hidup sederhana meski menjadi pemimpin dari imperium besar."
93:     ],
94:     kata_baru: [
95:       { kata: "Al-Faruq", arti: "Sang Pembeda (antara benar dan salah)" },
96:       { kata: "Kalender Hijriah", arti: "Sistem penanggalan Islam" }
97:     ],
98:     skill: "Keadilan & Tanggung Jawab",
99:     skill_ikon: "âš–ï¸",
100:     discoveryDest: "prophetic_gen",
101:     praktik: [
102:       "Bersikap adil saat bermain bersama teman-teman.",
103:       "Bertanggung jawab atas tugas yang diberikan kepada kita."
104:     ],
105:     kuis: [
106:       {
107:         q: "Gelar apa yang diberikan kepada Umar bin Khattab?",
108:         opts: ["As-Siddiq", "Al-Faruq", "Al-Amin"],
109:         a: 1
110:       },
111:       {
112:         q: "Siapa yang mengusulkan penetapan kalender Hijriah?",
113:         opts: ["Abu Bakr", "Umar bin Khattab", "Ali bin Abi Thalib"],
114:         a: 1
115:       },
116:       {
117:         q: "Kebiasaan apa yang sering dilakukan Umar di malam hari?",
118:         opts: ["Tidur pulas", "Berpatroli melihat kondisi rakyatnya", "Menghitung harta"],
119:         a: 1
120:       }
121:     ],
122:     misi: "Hari ini aku akan bersikap adil, misalnya memastikan semua orang mendapat giliran yang sama saat bermain."
123:   },
124:   {
125:     id: "utsman_affan",
126:     kategori: "companion",
127:     nama: "Utsman bin Affan",
128:     julukan: "Pemilik Dua Cahaya (Dzunnurain)",
129:     tema: "Kedermawanan, Rasa Malu, dan Kesabaran",
130:     pengantar: [
131:       "Halo, Young Hero!",
132:       "Bayangkan kamu adalah orang yang paling kaya di kotamu, tapi kamu memilih memakai hartamu untuk membelikan air minum bagi semua orang tanpa bayaran.",
133:       "Itulah yang dilakukan oleh Utsman bin Affan, sahabat Nabi yang terkenal dengan kedermawanan dan rasa malunya."
134:     ],
135:     belajar: {
136:       siapa: "Utsman bin Affan adalah Khalifah ketiga. Ia diberi gelar 'Dzunnurain' karena menikahi dua putri Nabi ï·º secara berurutan.",
137:       kapan: "Menjadi Khalifah selama 12 tahun (644 â€“ 656 M).",
138:       dilakukan: "Menyumbangkan banyak sekali hartanya, seperti membeli sumur Raumah dari seorang Yahudi untuk diwakafkan kepada umat Islam yang kesulitan air.",
139:       kontribusi: "Jasa terbesarnya adalah membukukan dan menyatukan bacaan Al-Qur'an (Mushaf Utsmani) yang kita baca sampai hari ini.",
140:       tantangan: "Pada akhir masa jabatannya, muncul fitnah dan pemberontakan, namun ia memilih bersabar dan tidak melawan agar tidak terjadi pertumpahan darah antar Muslim."
141:     },
142:     fakta: [
143:       "Membeli sumur dengan harga mahal untuk diberikan gratis kepada penduduk Madinah.",
144:       "Membiayai pasukan Jaisyul 'Usrah saat umat Islam sedang dalam kesulitan keuangan.",
145:       "Membukukan Al-Qur'an agar bacaannya seragam (Mushaf Utsmani).",
146:       "Sangat pemalu, bahkan malaikat pun merasa malu kepadanya."
147:     ],
148:     kata_baru: [
149:       { kata: "Dzunnurain", arti: "Pemilik dua cahaya" },
150:       { kata: "Mushaf Utsmani", arti: "Standar penulisan Al-Qur'an" }
151:     ],
152:     skill: "Kedermawanan & Kesabaran",
153:     skill_ikon: "ðŸª™",
154:     discoveryDest: "prophetic_gen",
155:     praktik: [
156:       "Membagikan makanan atau rezeki kepada teman yang membutuhkan.",
157:       "Menahan diri dan bersabar saat ada yang menjelek-jelekkan kita."
158:     ],
159:     kuis: [
160:       {
161:         q: "Apa nama sumur yang dibeli Utsman bin Affan untuk umat Islam?",
162:         opts: ["Sumur Zamzam", "Sumur Raumah", "Sumur Badar"],
163:         a: 1
164:       },
165:       {
166:         q: "Apa jasa terbesar Utsman terkait Al-Qur'an?",
167:         opts: ["Menjadi orang pertama yang menghafalnya", "Menyatukan penulisannya menjadi Mushaf Utsmani", "Menemukan Al-Qur'an di gua"],
168:         a: 1
169:       },
170:       {
171:         q: "Gelar Utsman bin Affan adalah Dzunnurain, yang artinya?",
172:         opts: ["Pemilik dua pedang", "Pemilik dua cahaya", "Pemilik dua sumur"],
173:         a: 1
174:       }
175:     ],
176:     misi: "Hari ini aku akan menyisihkan sebagian uang jajanku untuk bersedekah atau berbagi makanan dengan seseorang."
177:   },
178:   {
179:     id: "ali_thalib",
180:     kategori: "companion",
181:     nama: "Ali bin Abi Thalib",
182:     julukan: "Gerbang Ilmu Pengetahuan (Babul Ilm)",
183:     tema: "Keberanian, Kecerdasan, dan Hikmah",
184:     pengantar: [
185:       "Halo, Young Hero!",
186:       "Jika ada anak kecil yang berani mempertaruhkan nyawanya tidur di kasur Nabi ï·º agar Nabi bisa lolos dari kepungan musuh, dia adalah pahlawan sejati.",
187:       "Itulah Ali bin Abi Thalib, sepupu sekaligus menantu Nabi, sang pendekar berani dan cendekiawan yang luar biasa cerdas."
188:     ],
189:     belajar: {
190:       siapa: "Ali bin Abi Thalib adalah anak dari paman Nabi, Abu Thalib, dan merupakan Khalifah keempat. Ia memeluk Islam sejak masih anak-anak.",
191:       kapan: "Ia tumbuh besar di rumah Nabi ï·º dan menjadi Khalifah pada 656 â€“ 661 M.",
192:       dilakukan: "Menggantikan posisi tidur Nabi ï·º saat malam hijrah, dan menjadi pemegang panji utama dalam berbagai pertempuran penting.",
193:       kontribusi: "Selain keberaniannya, Ali dikenal sebagai sumber ilmu pengetahuan, hikmah, dan peradilan dalam Islam. Banyak kata-kata bijaknya (nahjul balaghah) yang dipelajari hingga kini.",
194:       tantangan: "Menjadi Khalifah pada masa fitnah dan perang saudara yang paling sulit dalam sejarah awal Islam, namun ia tetap teguh memegang prinsip kebenaran."
195:     },
196:     fakta: [
197:       "Salah satu dari kelompok pertama yang masuk Islam (Assabiqunal Awwalun) dari kalangan anak-anak.",
198:       "Pemegang pedang Zulfiqar yang legendaris.",
199:       "Menantu Nabi Muhammad ï·º, suami dari Fatimah Az-Zahra.",
200:       "Dikenal dengan julukan 'Babul Ilm' (Pintunya Ilmu)."
201:     ],
202:     kata_baru: [
203:       { kata: "Babul Ilm", arti: "Pintu/Gerbang Ilmu Pengetahuan" },
204:       { kata: "Zulfiqar", arti: "Nama pedang legendaris milik Ali" }
205:     ],
206:     skill: "Keberanian & Pengetahuan",
207:     skill_ikon: "ðŸ¦",
208:     discoveryDest: "prophetic_gen",
209:     praktik: [
210:       "Berani membela teman yang dijahati atau di-bully.",
211:       "Giat menuntut ilmu dan suka membaca buku."
212:     ],
213:     kuis: [
214:       {
215:         q: "Siapa yang menggantikan tidur di ranjang Nabi ï·º pada malam hijrah?",
216:         opts: ["Abu Bakr", "Ali bin Abi Thalib", "Umar bin Khattab"],
217:         a: 1
218:       },
219:       {
220:         q: "Julukan apa yang sering dikaitkan dengan kecerdasan Ali bin Abi Thalib?",
221:         opts: ["As-Siddiq", "Babul Ilm (Pintu Ilmu)", "Saifullah (Pedang Allah)"],
222:         a: 1
223:       },
224:       {
225:         q: "Dari kalangan mana Ali masuk Islam pertama kali?",
226:         opts: ["Wanita", "Anak-anak", "Lansia"],
227:         a: 1
228:       }
229:     ],
230:     misi: "Hari ini aku akan membela satu kebenaran atau belajar satu hal baru yang bermanfaat."
231:   },
232:   {
233:     id: "bilal_rabah",
234:     kategori: "companion",
235:     nama: "Bilal bin Rabah",
236:     julukan: "Muazin Pertama Rasulullah",
237:     tema: "Keteguhan Iman dan Kesetaraan",
238:     pengantar: [
239:       "Halo, Young Hero!",
240:       "Pernahkah kamu mendengar suara azan yang indah memanggil orang untuk salat? Tahukah kamu siapa orang pertama di dunia yang mengumandangkan azan?",
241:       "Dia adalah Bilal bin Rabah, seorang mantan budak yang derajatnya diangkat tinggi oleh Islam karena keteguhan imannya."
242:     ],
243:     belajar: {
244:       siapa: "Bilal bin Rabah adalah seorang sahabat dari Habasyah (Ethiopia) yang awalnya merupakan budak Umayyah bin Khalaf.",
245:       kapan: "Ia mengalami penyiksaan berat di awal mula Islam di Makkah sebelum akhirnya dibebaskan oleh Abu Bakr.",
246:       dilakukan: "Meskipun disiksa dengan batu besar di padang pasir yang panas, ia tetap mengulang kata 'Ahad, Ahad' (Allah Maha Esa).",
247:       kontribusi: "Menjadi muazin (pengumandang azan) pertama dalam sejarah Islam karena memiliki suara yang sangat lantang dan merdu.",
248:       tantangan: "Harus bertahan dari siksaan fisik yang luar biasa demi mempertahankan keyakinannya saat menjadi budak."
249:     },
250:     fakta: [
251:       "Orang pertama yang mengumandangkan azan di dalam sejarah Islam.",
252:       "Dimerdekakan (dibeli dan dibebaskan) oleh Abu Bakr As-Siddiq.",
253:       "Kata 'Ahad! Ahad!' menjadi simbol keteguhan iman yang tak tergoyahkan.",
254:       "Suara terompahnya terdengar di surga menurut hadis Nabi ï·º."
255:     ],
256:     kata_baru: [
257:       { kata: "Muazin", arti: "Orang yang mengumandangkan azan" },
258:       { kata: "Ahad", arti: "Yang Maha Esa (Satu)" }
259:     ],
260:     skill: "Keteguhan Iman & Suara Lantang",
261:     skill_ikon: "ðŸ—£ï¸",
262:     discoveryDest: "prophetic_gen",
263:     praktik: [
264:       "Tetap melakukan kebaikan (seperti salat) meskipun sedang lelah.",
265:       "Tidak membeda-bedakan teman berdasarkan warna kulit atau status keluarga."
266:     ],
267:     kuis: [
268:       {
269:         q: "Siapa orang pertama yang mengumandangkan azan dalam Islam?",
270:         opts: ["Abu Bakr", "Bilal bin Rabah", "Umar bin Khattab"],
271:         a: 1
272:       },
273:       {
274:         q: "Kata apa yang terus diucapkan Bilal saat disiksa oleh majikannya?",
275:         opts: ["Ampun!", "Ahad, Ahad!", "Tolong!"],
276:         a: 1
277:       },
278:       {
279:         q: "Siapa sahabat yang membeli dan memerdekakan Bilal?",
280:         opts: ["Utsman bin Affan", "Abu Bakr As-Siddiq", "Ali bin Abi Thalib"],
281:         a: 1
282:       }
283:     ],
284:     misi: "Hari ini aku akan mengajak satu orang temanku (atau saudaraku) untuk melakukan suatu kebaikan bersama, seperti salat tepat waktu."
285:   },
286:   {
287:     id: "ibn_haytham",
288:     kategori: "scientist",
289:     discoveryDest: "age_of_knowledge",
290:     nama: "Ibn al-Haytham",
291:     julukan: "Bapak Optika Modern (965 â€“ 1040 M)",
292:     tema: "Belajar melihat dunia dengan teliti",
293:     pengantar: [
294:       "Halo, Young Hero!",
295:       "Pernahkah kamu bertanya mengapa kita bisa melihat benda? Bagaimana cahaya masuk ke mata? Dan apakah semua dugaan yang kita miliki pasti benar?",
296:       "Lebih dari seribu tahun yang lalu, seorang ilmuwan Muslim bernama Ibn al-Haytham mengajukan pertanyaan-pertanyaan semacam itu dan mengubah dunia sains selamanya."
297:     ],
298:     belajar: {
299:       siapa: "Ibn al-Haytham (dikenal di Barat sebagai Alhazen) adalah ilmuwan hebat yang ahli di bidang matematika, astronomi, dan fisika.",
300:       kapan: "Beliau lahir di Basra (Irak) sekitar tahun 965 M dan banyak berkarya di Kairo, Mesir.",
301:       dilakukan: "Ia mempelajari sifat cahaya dan membuktikan bahwa kita bisa melihat karena cahaya memantul dari benda dan masuk ke mata kita.",
302:       kontribusi: "Menulis Kitab al-Manazir (Buku Optik) yang menjadi rujukan dunia. Ia juga perintis 'Metode Ilmiah' (Observasi â†’ Eksperimen â†’ Kesimpulan).",
303:       tantangan: "Untuk menghindari amarah penguasa yang memintanya membendung Sungai Nil (yang saat itu mustahil), ia pura-pura gila selama bertahun-tahun, yang memberinya waktu untuk menulis mahakaryanya."
304:     },
305:     fakta: [
306:       "Lahir sekitar 965 M, dikenal di dunia Latin sebagai Alhazen.",
307:       "Menulis Kitab al-Manazir yang sangat tebal tentang cahaya.",
308:       "Menggunakan kamera obscura (kamar gelap) untuk membuktikan sifat cahaya.",
309:       "Selalu menggunakan eksperimen nyata untuk menguji dugaannya."
310:     ],
311:     kata_baru: [
312:       { kata: "Optika", arti: "Ilmu yang mempelajari cahaya dan penglihatan" },
313:       { kata: "Eksperimen", arti: "Percobaan untuk membuktikan kebenaran suatu teori" },
314:       { kata: "Kamera Obscura", arti: "Ruang gelap yang memproyeksikan gambar terbalik melalui lubang kecil" }
315:     ],
316:     skill: "Berpikir Kritis & Teliti",
317:     praktik: [
318:       "Jangan terburu-buru mengambil kesimpulan dari sebuah berita.",
319:       "Periksa informasi atau lakukan percobaan sebelum mempercayainya.",
320:       "Jangan takut bertanya jika ada hal yang membuatmu penasaran."
321:     ],
322:     kuis: [
323:       {
324:         q: "Di dunia Latin, Ibn al-Haytham dikenal dengan nama...",
325:         opts: ["Avicenna", "Averroes", "Alhazen"],
326:         a: 2
327:       },
328:       {
329:         q: "Bagaimana teori penglihatan menurut Ibn al-Haytham?",
330:         opts: ["Mata memancarkan cahaya ke benda", "Cahaya memantul dari benda masuk ke mata", "Benda bersinar dari dalam mata"],
331:         a: 1
332:       },
333:       {
334:         q: "Apa nama buku paling terkenal karyanya?",
335:         opts: ["Kitab al-Manazir", "The Canon of Medicine", "Al-Jabr"],
336:         a: 0
337:       }
338:     ],
339:     misi: "My Little Scientist Journal: Hari ini aku akan mengamati satu benda di rumah, membuat dugaan tentang cara kerjanya, lalu mencarinya di ensiklopedia!"
340:   },
341:   {
342:     id: "khalid_walid",
343:     kategori: "commander",
344:     nama: "Khalid ibn al-Walid",
345:     julukan: "Pedang Allah yang Terhunus (585 â€“ 642 M)",
346:     tema: "Pemimpin tangguh yang taat pada aturan",
347:     pengantar: [
348:       "Halo, Young Hero!",
349:       "Jika kamu bermain game strategi, pasti kamu butuh jenderal yang hebat untuk memenangkan pertandingan, bukan?",
350:       "Dalam sejarah Islam, ada seorang jenderal jenius yang tidak pernah kalah dalam ratusan pertempuran. Namun, pelajaran terbesarnya bukanlah tentang perang, melainkan tentang ketaatan dan keikhlasan."
351:     ],
352:     belajar: {
353:       siapa: "Khalid ibn al-Walid adalah salah satu panglima militer terhebat sepanjang masa, bergelar 'Saifullah' (Pedang Allah).",
354:       kapan: "Ia hidup di zaman Nabi Muhammad ï·º hingga masa pemerintahan Khalifah Abu Bakr dan Umar bin Khattab.",
355:       dilakukan: "Ia memimpin pasukan Muslim dalam pertempuran-pertempuran epik melawan dua kekaisaran raksasa sekaligus: Romawi dan Persia.",
356:       kontribusi: "Menyatukan berbagai wilayah di bawah panji Islam dan menciptakan strategi militer brilian yang dipelajari hingga hari ini.",
357:       tantangan: "Saat berada di puncak kejayaan, Khalifah Umar memberhentikannya dari jabatan panglima utama. Alih-alih marah, Khalid menerima dengan ikhlas dan tetap bertempur sebagai prajurit biasa."
358:     },
359:     fakta: [
360:       "Tidak pernah kalah dalam lebih dari seratus pertempuran penting.",
361:       "Gelar 'Pedang Allah yang Terhunus' diberikan langsung oleh Rasulullah ï·º.",
362:       "Terkenal dengan strategi serangan kilat dan mobilitas pasukan yang luar biasa.",
363:       "Rela turun pangkat demi ketaatan kepada pemimpin (Khalifah Umar)."
364:     ],
365:     kata_baru: [
366:       { kata: "Strategi", arti: "Rencana cermat untuk mencapai tujuan" },
367:       { kata: "Saifullah", arti: "Pedang Allah" },
368:       { kata: "Ikhlas", arti: "Melakukan sesuatu murni karena Allah, tanpa mengharap pujian manusia" }
369:     ],
370:     skill: "Kepemimpinan & Keikhlasan",
371:     praktik: [
372:       "Belajar mengambil keputusan yang tenang dalam situasi sulit.",
373:       "Tetap rendah hati saat menang, tidak sombong atas prestasi.",
374:       "Menerima aturan dan keputusan pemimpin/guru dengan lapang dada."
375:     ],
376:     kuis: [
377:       {
378:         q: "Apa gelar yang diberikan kepada Khalid ibn al-Walid?",
379:         opts: ["Singa Padang Pasir", "Pedang Allah yang Terhunus", "Penakluk Dua Samudra"],
380:         a: 1
381:       },
382:       {
383:         q: "Sikap apa yang ditunjukkan Khalid ketika diberhentikan dari jabatan panglima oleh Khalifah Umar?",
384:         opts: ["Marah dan memberontak", "Keluar dari pasukan militer", "Ikhlas dan tetap berjuang sebagai prajurit biasa"],
385:         a: 2
386:       },
387:       {
388:         q: "Pelajaran utama dari kisah Khalid adalah...",
389:         opts: ["Kepahlawanan bukan cuma menang perang, tapi ketaatan dan keikhlasan", "Cara menyerang dengan kuda yang cepat", "Selalu menuntut posisi tertinggi"],
390:         a: 0
391:       }
392:     ],
393:     misi: "Hari ini aku akan berbesar hati mengalah demi teman atau saudaraku, dan melaksanakan tugas dari orang tua tanpa mengeluh!"
394:   },
395:   {
396:     id: "bukhari",
397:     kategori: "builder",
398:     nama: "Imam Al-Bukhari",
399:     julukan: "Penjaga Kata-Kata Nabi (810 â€“ 870 M)",
400:     tema: "Ketelitian, Disiplin, dan Standar Tinggi dalam Ilmu",
401:     pengantar: [
402:       "Halo, Young Hero!",
403:       "Bayangkan jika ada sebuah pesan berantai yang disampaikan ke ribuan orang. Bagaimana kamu bisa memastikan pesan itu tidak berubah dari aslinya?",
404:       "Inilah tugas raksasa yang diambil oleh Imam Al-Bukhari. Ia menghabiskan hidupnya bepergian ke berbagai negara demi mengumpulkan dan menyeleksi keaslian kata-kata Nabi ï·º (Hadis)."
405:     ],
406:     belajar: {
407:       siapa: "Muhammad ibn Ismail Al-Bukhari adalah seorang ulama ahli hadis paling terkenal dalam sejarah Islam.",
408:       kapan: "Lahir di Bukhara (sekarang Uzbekistan) pada tahun 810 M.",
409:       dilakukan: "Ia menghafal ratusan ribu hadis, lalu menyeleksi dengan sangat ketat mana yang benar-benar sahih (valid) bersumber dari Nabi Muhammad ï·º.",
410:       kontribusi: "Menyusun kitab Shahih Al-Bukhari, yang diakui oleh umat Islam sebagai kitab paling tepercaya setelah Al-Qur'an.",
411:       tantangan: "Ia harus berjalan kaki dan berkuda melintasi berbagai benua selama puluhan tahun, seringkali jatuh miskin demi membiayai perjalanan mencari ilmu."
412:     },
413:     fakta: [
414:       "Hanya memasukkan sekitar 7.000-an hadis dari 600.000 lebih riwayat yang ia hafal, karena standarnya yang sangat ketat.",
415:       "Setiap kali akan menuliskan satu hadis dalam kitabnya, ia selalu mandi dan salat dua rakaat terlebih dahulu.",
416:       "Punya memori fotografis yang luar biasa sejak anak-anak.",
417:       "Perjalanan menuntut ilmunya meliputi wilayah Bukhara, Mekkah, Madinah, Irak, Mesir, hingga Suriah."
418:     ],
419:     kata_baru: [
420:       { kata: "Hadis", arti: "Perkataan, perbuatan, atau ketetapan Nabi Muhammad ï·º" },
421:       { kata: "Sahih", arti: "Valid, benar, dan tepercaya sumbernya" },
422:       { kata: "Memori Fotografis", arti: "Kemampuan mengingat sesuatu dengan sangat detail hanya dengan melihatnya" }
423:     ],
424:     skill: "Ketekunan & Disiplin Belajar",
425:     praktik: [
426:       "Sabar dan disiplin saat mempelajari hal yang baru.",
427:       "Tidak menyebarkan berita atau pesan jika kita tidak yakin kebenarannya (anti-hoax).",
428:       "Menghargai para ilmuwan dan ulama yang menjaga ilmu pengetahuan."
429:     ],
430:     kuis: [
431:       {
432:         q: "Karya terbesar Imam Al-Bukhari bernama...",
433:         opts: ["Kitab al-Manazir", "Shahih Al-Bukhari", "Al-Qanun fi at-Tibb"],
434:         a: 1
435:       },
436:       {
437:         q: "Mengapa dari ratusan ribu hadis yang dihafal, hanya sebagian kecil yang dimasukkan ke kitabnya?",
438:         opts: ["Karena kertasnya habis", "Karena ia lupa hadis yang lain", "Karena standarnya sangat ketat untuk memastikan keaslian"],
439:         a: 2
440:       },
441:       {
442:         q: "Sebelum menulis satu hadis di kitabnya, apa yang biasa dilakukan Imam Al-Bukhari?",
443:         opts: ["Makan besar", "Mandi dan shalat dua rakaat", "Berlari mengelilingi lapangan"],
444:         a: 1
445:       }
446:     ],
447:     misi: "Hari ini aku akan memeriksa dua kali (double check) kebenaran suatu informasi sebelum mempercayainya, dan fokus belajar satu bab pelajaran tanpa gangguan!"
448:   }
449: ];
450: 
451: // Fondasi Data untuk Journey Map â€” The Great Hero Voyage
452: const DESTINATIONS = [
453:   {
454:     id: "prophetic_gen",
455:     nama: "The Prophetic Generation",
456:     lokasi: "ðŸ•Œ Madinah",
457:     ikon: "ðŸŒ™",
458:     syaratXP: 0,
459:     heroes: ["abu_bakr", "umar_khattab", "utsman_affan", "ali_thalib", "bilal_rabah"]
460:   },
461:   {
462:     id: "age_of_knowledge",
463:     nama: "The Age of Knowledge",
464:     lokasi: "ðŸ›ï¸ Baghdad",
465:     ikon: "ðŸ“š",
466:     syaratXP: 15,
467:     heroes: ["bukhari", "ibn_haytham"]
468:   },
469:   {
470:     id: "golden_age_science",
471:     nama: "The Golden Age of Science",
472:     lokasi: "ðŸ”­ Cordoba",
473:     ikon: "ðŸ”­",
474:     syaratXP: 30,
475:     heroes: []
476:   },
477:   {
478:     id: "leaders_defenders",
479:     nama: "Leaders & Defenders",
480:     lokasi: "âš”ï¸ Damascus",
481:     ikon: "âš”ï¸",
482:     syaratXP: 60,
483:     heroes: ["khalid_walid"]
484:   },
485:   {
486:     id: "builders_civ",
487:     nama: "Builders of Civilization",
488:     lokasi: "ðŸ—ï¸ Cairo",
489:     ikon: "ðŸ›ï¸",
490:     syaratXP: 90,
491:     heroes: []
492:   }
493: ];
494: 
495: // Misi harian
496: const MISI = [
497:   { kunci: "baca_semua", target: 3, judul: "Membaca Kisah", desc: "Baca 3 kisah pahlawan apa saja", ikon: "ðŸ“–" },
498:   { kunci: "baca_companion", target: 1, judul: "Sahabat Nabi", desc: "Baca 1 kisah dari kategori The Companions", ikon: "ðŸ›¡ï¸" },
499:   { kunci: "baca_scientist", target: 1, judul: "Ilmuwan", desc: "Baca 1 kisah dari kategori Scientists", ikon: "ðŸ”­" },
500:   { kunci: "baca_commander", target: 1, judul: "Panglima", desc: "Baca 1 kisah dari kategori Commanders", ikon: "âš”ï¸" },
501:   { kunci: "baca_builder", target: 1, judul: "Pembangun", desc: "Baca 1 kisah dari kategori Builders", ikon: "ðŸ›ï¸" },
502:   { kunci: "kuis_sempurna", target: 2, judul: "Kuis Sempurna", desc: "Jawab kuis dengan benar 100% dua kali", ikon: "ðŸŽ¯" }
503: ];
504: 
505: const PANGKAT = [
506:   { id: 1, nama: "Pencari Ilmu", min: 0, ikon: "ðŸŽ’", desc: "Baru memulai petualangan." },
507:   { id: 2, nama: "Hero Magang", min: 10, ikon: "ðŸ…", desc: "Mulai memahami jejak pahlawan." },
508:   { id: 3, nama: "Sang Penjelajah", min: 30, ikon: "ðŸ§­", desc: "Telah menjelajahi banyak sejarah." },
509:   { id: 4, nama: "Pewaris Kebijaksanaan", min: 60, ikon: "ðŸ“œ", desc: "Memiliki ilmu sejarah yang luas." },
510:   { id: 5, nama: "The Great Hero", min: 100, ikon: "ðŸ†", desc: "Berjiwa pahlawan sejati!" }
511: ];
512: 
513: if(typeof module !== 'undefined') module.exports = { KATEGORI, HEROES, MISI, PANGKAT };
514: 
The above content shows the entire, complete file contents of the requested file.
"}
{"step_index":177,"source":"MODEL","type":"VIEW_FILE","status":"DONE","created_at":"2026-08-31T15:15:21Z","content":"Created At: 2026-08-31T22:15:21+07:00
Completed At: 2026-08-31T22:15:22+07:00
File Path: `file:///d:/Aplikasi%20WebApp/The%20Great%20Hero%20Muslim%20V1/js/data.js`
Total Lines: 514
Total Bytes: 25561
Showing lines 1 to 60
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: /* ============================================================
2:    DATA TOKOH â€” The Great Hero Muslim
3:    Semua data terpisah dari mesin utama agar mudah ditambah.
4: ============================================================ */
5: 
6: const KATEGORI = [
7:   { id: "companion", nama: "The Companions", warna: "#2E7D32", ikon: "ðŸ›¡ï¸" },
8:   { id: "scientist", nama: "Muslim Scientists", warna: "#0277BD", ikon: "ðŸ”­" },
9:   { id: "commander", nama: "Muslim Commanders", warna: "#B71C1C", ikon: "âš”ï¸" },
10:   { id: "builder", nama: "Builders of Civilization", warna: "#F57F17", ikon: "ðŸ›ï¸" }
11: ];
12: 
13: const HEROES = [
14:   {
15:     id: "abu_bakr",
16:     kategori: "companion",
17:     nama: "Abu Bakr As-Siddiq",
18:     julukan: "Sahabat Terdekat & Khalifah Pertama (573 â€“ 634 M)",
19:     tema: "Kebenaran, Kesetiaan, dan Pengorbanan Tanpa Batas",
20:     pengantar: [
21:       "Halo, Young Hero!",
22:       "Pernahkah kamu memiliki teman yang selalu membelamu apa pun yang terjadi? Teman yang percaya padamu bahkan ketika semua orang meragukanmu?",
23:       "Lebih dari seribu tahun yang lalu, ada seorang pria yang menjadi teman terbaik bagi manusia terbaik, yaitu Nabi Muhammad ï·º. Beliau adalah Abu Bakr, pahlawan kesetiaan yang sejati."
24:     ],
25:     belajar: {
26:       siapa: "Abu Bakr adalah sahabat terdekat Nabi Muhammad ï·º. Nama aslinya adalah Abdullah bin Abi Quhafah.",
27:       kapan: "Beliau hidup di Makkah dan Madinah, pada masa awal kelahiran Islam, dan menjadi Khalifah pertama setelah wafatnya Nabi ï·º.",
28:       dilakukan: "Beliau menemani Nabi ï·º dalam perjalanan hijrah yang berbahaya ke Madinah, dan menyumbangkan seluruh hartanya untuk Islam.",
29:       kontribusi: "Sebagai Khalifah, beliau menyelamatkan umat Islam dari perpecahan dan memerintahkan pengumpulan Al-Qur'an dalam satu mushaf untuk pertama kalinya.",
30:       tantangan: "Beliau menghadapi masa krisis besar ketika Nabi ï·º wafat, namun ia tetap tenang dan memimpin umat melewati masa tersulit tersebut."
31:     },
32:     fakta: [
33:       "Diberi gelar 'As-Siddiq' (Yang Membenarkan) karena langsung mempercayai peristiwa Isra Mi'raj.",
34:       "Menemani Nabi ï·º bersembunyi di Gua Tsur saat dikejar musuh.",
35:       "Khalifah pertama dari Khulafaur Rasyidin.",
36:       "Menginfakkan seluruh harta kekayaannya untuk perjuangan Islam."
37:     ],
38:     kata_baru: [
39:       { kata: "As-Siddiq", arti: "Orang yang sangat membenarkan dan jujur" },
40:       { kata: "Khalifah", arti: "Pemimpin umat Islam" },
41:       { kata: "Hijrah", arti: "Perpindahan untuk menjaga keimanan" }
42:     ],
43:     skill: "Kesetiaan & Keberanian",
44:     skill_ikon: "â¤ï¸",
45:     discoveryDest: "prophetic_gen",
46:     praktik: [
47:       "Menjadi teman yang baik dan setia di saat teman kita sedang kesulitan.",
48:       "Selalu berkata jujur meskipun itu terasa sulit.",
49:       "Membantu sesama dengan sebagian harta yang kita miliki (bersedekah)."
50:     ],
51:     kuis: [
52:       {
53:         q: "Gelar apa yang diberikan kepada Abu Bakr karena kejujurannya?",
54:         opts: ["Al-Faruq", "As-Siddiq", "Al-Amin"],
55:         a: 1
56:       },
57:       {
58:         q: "Apa salah satu jasa terbesar Abu Bakr saat menjadi Khalifah?",
59:         opts: ["Membangun kota Baghdad", "Mengumpulkan mushaf Al-Qur'an", "Menemukan ilmu aljabar"],
60:         a: 1
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
"}
{"step_index":303,"source":"MODEL","type":"PLANNER_RESPONSE","status":"DONE","created_at":"2026-08-31T15:28:22Z","thinking":"**Prioritizing Specific Tools**

I'm focusing on the importance of selecting the most appropriate tool for each task. The goal is to maximize efficiency. I am making an active effort to ensure that I always choose the correct approach to each problem or challenge, such as choosing a relevant 'view_file' utility where possible.


**Refining Tool Usage**

I'm now implementing strict rules regarding tool selection, particularly avoiding `cat` for file creation/appending, and preferring `grep_search` over in-line `grep`. I'm committed to always listing potential tools before execution, only choosing a set when more generic options are unsuitable. However, I've noticed an issue â€“ a file update seems to have persisted despite my intentions, suggesting a potential editor-related conflict.


","tool_calls":[{"name":"run_command","args":{"CommandLine":"$lines = Get-Content "C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\1c0efbff-9874-4507-b27f-b1544309490d\\.system_generated\\logs\\transcript_full.jsonl"
foreach ($line in $lines) {
    if ($line -match "Muslim Scientists") {
        $line | Out-File -Append "scientists_matches.txt" -Encoding utf8
    }
}
Write-Host "Done"","Cwd":"d:\\Aplikasi WebApp\\The Great Hero Muslim V1","WaitMsBeforeAsync":500,"toolAction":"Searching transcript for Muslim Scientists","toolSummary":"Search transcript for Muslim Scientists"}}]}

