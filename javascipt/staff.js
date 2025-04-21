const staffContainer = document.getElementById('staffContainer')
const staff = [
  {
    id: 1,
    image: './assets/img/staff/category-1.jpg',
    name: 'Abdusalomov Sardor Abduqodir oʻgʻli',
    description:
      'Jizzax viloyati pedagogik mahorat markazi Inson resurslarini rivojlantirish bo‘yicha bosh mutaxassisi. 2022-yil  Sh.Rashidov nomidagi Samarqand davlat universitetining inson resurslarini rivojlantirish fakultetini kadrlar menejmenti ixtisosligi bo‘yicha tamomlagan. Ko‘p yillar ta’lim sohasida - dastlab Samarqand viloyati Oqdaryo tumani “Oltin-kuz” MCHJda bosh menejer, Paxtakor tuman ixtisoslashtirilgan maktabida HR-menejer bo‘lib ishlagan. Hududiy markazda mehnat faoliyati 2025-yildan Inson resurslarini rivojlantirish bo‘yicha bosh mutaxassis sifatida boshlagan',
    position: 'Bosh mutaxassis',
    phone: '+998958119400',
    email: 'ismimsardor@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 2,
    image: './assets/img/staff/category-2.jpeg',
    name: 'To ‘rayev Shuxrat Tajiboyevich',
    description:
      ' Jizzax viloyati pedagogik mahorat markazi moliya-iqtisod va buxgalteriya bo‘limi bosh hisobchisi. Ma’lumoti oliy.  2018-yildan shu lavozimda ishlab kelmoqda.',
    position: 'Bosh hisobchi',
    phone: '+998915993200',
    email: 'sh_turayev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 3,
    image: './assets/img/staff/category-3.png',
    name: 'Karomatov Axliddin Xamzayevich',
    description: "Jizzax viloyati pedagogik mahorat markazining Axbo- rot-resurs markazi bosh mutaxassisi. 2013-yil Jizzax davlat pedagogika institutini Biologiya va inson fao- liyati muhofazasi mutaxassisligi, 2025-yil Toshkent davlat iqtisodiyot universitetini Bank ishi va audit mutaxassisligi bo‘yicha tamomlagan.",
    position: 'Bosh mutaxassis',
    phone: '+998996235359',
    email: 'karomatov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 4,
    image: './assets/img/staff/category-4.png',
    name: 'Abdurashidov Sharofiddin Do’smatovich',
    description:
      'Jizzax viloyati Pedagogik mahorat markazi Fanlarni rivojlantirish bo‘limi boshlig‘i. 1992-yil Jizzax Davlat pedagogika institutini mehnat ta’limi va fizika o‘qituvchisi mutaxassisligi bo‘yicha tamomlagan. Maktabgacha va maktab ta’limi vazirligining “Xalq ta’limi a’lochisi” va “Xalq ta’limi fidoyisi” tarmoq unvonlari sohibi. Mehnat faoliyatini 1992-yilda Zomin tumanidagi 9-umumta’lim maktabida o‘qituvchilkdan boshlagan. Hududiy markazda 1997-yildan buyon faoliyat ko‘rsatib kelmoqda. 1997-2017-yillarda Test-o‘quv bo‘limi, Malaka oshirish diagnostikasi va monitoringi bo‘limi, Masofadan o‘qitishni hududiy muvofiqlashtirish bo‘limi boshlig‘i lavozimlarida faoliyat ko‘rsatgan. 2018-2024-yillarda markaz direktorining o‘quv va metodik ishlar bo‘yicha o‘rinbosari bo‘lib ishlagan. 2025-yil yanvar oyidan boshlab Fanlarni rivojlantirish bo‘limi boshlig‘i lavozimida ish olib bormoqda. 1 ta o‘quv qo‘llanma, 4 ta uslubiy qo‘llanma, 50 ga yaqin xalqaro va Respublika ilmiy-amaliy anjumanlarida ilmiy maqolalar muallifi.',
    position: 'Bo’lim boshlig’i',
    phone: '+998990144790',
    email: 'abdurashidov.sh@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 5,
    image: './assets/img/staff/category-7.png',
    name: 'Tolipov Akbar Saidovich',
    description: "Jizzax viloyati pedagogik mahorat markazi Ta’lim sifati nazorati bo‘limi boshlig‘i. Dast- lab 1979-1980-yillarda Do‘stlik tumanidagi Fayzulla Xo‘jayev nomli 6-umumiy o‘rta ta’lim maktabida boshlang’ich sinf o‘qituvchisi bo‘lib ishladi.",
    position: 'Bo’lim boshlig’i',
    phone: '+998993549415',
    email: 'tolipov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 7
  },
  {
    id: 6,
    image: './assets/img/staff/category-9.png',
    name: 'Sadullayeva Farangiz Saparovna',
    description: "Jizzax viloyati pedagogik mahorat markazi Akademik faoliyatni muvofiqlashtirish bo‘limi boshlig‘i. 2012-yil JDPIning Musiqiy ta’lim fakultetini bakalavr, 2021-yil JDPI magistra- turasini Musiqiy ta’lim va san’at ixtisosligi bo‘yicha tamom- lagan.",
    position: 'Bo’lim boshlig’i',
    phone: '+998996660209',
    email: 'sadullayeva@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 9
  },
  {
    id: 7,
    image: './assets/img/staff/category-10-1.png',
    name: 'Bekmuratova Kamola Xasanovna',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xiz- mat ko‘rsatish bo‘limi geografiya va IBA fani metodisti, PISA xalqaro tadqiqotiga tayyorgarlik ko‘rishda tabiiy fanlar savo- dxonligini oshirish bo‘yicha viloyat koordinatori. Oliy toifaga ega. Geografiya fani bo‘yicha Respublika olimpiadasining uch karra g‘olibi.",
    position: 'Geografiya va iqtisod metodisti',
    phone: '+998952607778',
    email: 'bekmuradova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 8,
    image: './assets/img/staff/category-10-2.png',
    name: 'Xasanova Nigora Nizomovna',
    description: "Jizzax viloyati Pedagogik mahorat markazi metodik xizmat ko‘rsatish bo‘limi musiqa madaniyati fani metodisti. 2018-yil JDPI pedagogika fakulteti Musiqiy ta’lim yo‘nalishini imti- yozli tamomlagan. “Ta’lim e’tirofi-2020” statuetkasi sohibi. Respublika ta’lim markazi huzuridagi “Musiqa madaniyati” ilmiy metodik kengashi a’zosi.",
    position: 'Musiqa metodisti',
    phone: '+998974360627',
    email: 'xasanova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 9,
    image: './assets/img/staff/category-10-3.jpeg',
    name: 'Zokirova Maxmuda',
    description: "Jizzax viloyati pedagogik mahorat markazi ingliz tili fani metodisti. 2011- 2015-yil Jizzax davlat pedagogika institutining xorijiy tillar fakultetida tahsil olgan. 2017-2020-yillar Jizzax viloyati xalq ta’limi xodimlarini qayta tayyorlash va malakasini oshirish institutida ingliz tili fani o‘qituvchisi, 2020-2023-yillar Jizzax davlat pedagogika universiteti xorijiy tillar fakulteti ingliz tili fani o‘qituvchisi bo‘lib ishlagan. 2024-yil fevral oyidan Jizzax viloyat pedagogik mahorat markazida ingliz tili fani metodisti lavozimida ishlab kelmoqda.",
    position: 'Ingliz tili metodisti',
    phone: '+998915691108',
    email: 'zokirova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 10,
    image: './assets/img/staff/category-10-4.png',
    name: 'Xolbo‘tayeva Dilfuza Usmon qizi',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limi tarbiya fani metodisti. 2019-yil JDPIning tarix fakultetini bakalavr, 2021-yil SamDU magistraturasini arxeo- logiya ixtisosligi bo‘yicha tamomlagan.",
    position: 'Tarbiya metodisti',
    phone: '+998938235151',
    email: 'xolbotayeva@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 11,
    image: './assets/img/staff/category-10-5.png',
    name: 'Axmedova Nargiza Bozorovna',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik mahorat markazi biologiya fani metodisti. 2013-yil Nizomiy nomi- dagi TDPU biologiya fakultetini bakalavr, 2015-yil A.Qodiriy nomidagi JDPI magistraturasini Biologiya o‘qitish metodi- kasi bo‘yicha tamomlagan. 2017-2019-yillar Forish tumani 3-sonli umumta’lim maktabida kimyo-biologiya fani o‘qituv- chisi lavozimida faoliyat olib borgan. Hududiy markazdagi mehnat faoliyatini 2024-yil mart oyidan boshlagan. ",
    position: 'Biologiya metodisti',
    phone: '+998973285385',
    email: 'axmedovan@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 12,
    image: './assets/img/staff/category-10-6.jpeg',
    name: 'Mirzabekova Nargiza Qoraqulovna',
    description: "Jizzax viloyati pedagogik mahorat markazi metodik bo‘lim boshlang‘ich ta’lim fani metodisti. 1996-yil Jizzax davlat pedagogika institutining pedagogika va boshlang‘ich ta’lim metodikasi fakultetinini boshlang‘ich sinf o‘qituvchisi mutaxassisligi bo‘yicha tamomlagan. O‘zbekiston Respublikasidagi umum- taʼlim muassasalarida Maktabgacha va maktab ta’limi va Respublika Taʼlim markazi va MChJ “Nestle Food” XK bilan imzolagan hamkorlik memorandumiga asosan MChJ “Nestle Food” XK tomonidan “Salomatlik yo‘nalishlari” loyihasi doirasida ishlab chiqilgan integrativ modulli mashg‘ulotlarni 2024-2025-o‘quv yilidan saylanma tarzda O‘zbekiston Respublikasining barcha hududlaridagi umumta’lim muassasalarining boshlang‘ich sinf- larida “Salomatlik yo‘nalishlari” loyihasini amalga oshirilishi bo‘yicha hududiy koordinator",
    position: 'Boshlang ‘ich metodisti',
    phone: '-',
    email: 'mirzabekova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 13,
    image: './assets/img/staff/category-10-7.jpeg',
    name: 'Yuldasheva Gulbahor Shakarovna',
    description: "Jizzax viloyati pedagogik mahorat markazining Metodik bo‘lim texnologiya fani metodisti. 2007-yil Nizomiy nomidagi Toshkent davlat pedagogika uni- versiteti Kasb ta’limi fakultetini tamomlagan. Ko‘p yillar davo- mida ta’lim sohasida, jumladan Toshkent shahar Hamza tu- mani 215-umumiy o‘rta ta’lim maktabida maktab direktorining oquv ishlari bo‘yicha o‘rinbosari bo‘lib ishlagan. Hududiy markazdagi faoliyatini 2024-yil 1-apreldan texnologiya fani metodisti lavozimidan boshlagan.",
    position: 'Texnologiya fani metodisti',
    phone: '+998993553319',
    email: 'yuldasheva@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 14,
    image: './assets/img/staff/category-10-8.jpeg',
    name: 'Qodirov Bekmurod Nurillayevich',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limi matematika fani metodisti. 2009-yil SamDUning fizika-matematika fakultetini bakalavr, 2017-yil Sam-DU magistraturasini Ta’limda axborot texnologiyalaril ixtisosligi bo‘yicha tamomlagan. Dastlab Samarqand viloyati Tayloq va Samarqand tumanlarida IDUM da ishlagan. Hududiy markazdagi mehnat faoliyatini 2017-yilda o‘qituvchi sifatida boshlagan. 2024-yildan buyon Metodik xizmat ko‘rsatish bo‘limi matematika fani metodisti lavozimida ishlab kelmoqda.",
    position: 'Matematika metodsti',
    phone: '+998932992265',
    email: 'qodirovb@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },

  {
    id: 15,
    image: './assets/img/staff/category-10-9.jpeg',
    name: 'Quvvatov Maxkam',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limi nemis va fransuz tili metodisti. 1984-yil Toshkent davlat jahon tillari universiteti nemis tili fakultetini nemis va ingliz tillari ixtisosligi bo‘yicha tamomlagan. Ko‘p yillar da- vomida ta’lim sohasida faoliyat olib borgan. Dastlab Jizzax tumani 31- umumiy o‘rta ta’lim maktabida dars bergan.",
    position: 'Matematika metodisti',
    phone: '+998992880062',
    email: 'quvvatovm@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 16,
    image: './assets/img/staff/category-11.jpg',
    name: 'Narbekov Sanjar',
    description: "1984-yil Toshkent shahrida tug‘ilgan. 2005-yil JDPI- ning tarix fakultetini, 2011-yil O‘zbekiston Milliy universite- ti magistraturasini jurnalistika bo‘yicha tamomlagan. Ko‘p yillar ta’lim sohasida – Jizzax tuman iqtisodiyot kolleji, Jizzax politexnika instituti, “Jizzax haqiqati” – “Джизакская правда” gazetalarida ishlagan. www.jizzaxnews.uz sayti, tahririyat va markazning rasmiy ijtimoiy tarmoqlardagi sahifalarini yuritadi.",
    position: 'Matbuot kotibi',
    phone: '+998332221005',
    email: 'narbekov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 11
  },
  {
    id: 17,
    image: './assets/img/staff/category-12.jpg',
    name: 'Turgunov Xabibulla XXX',
    position: 'Yuriskonsult',
    phone: '+998941907152',
    email: 'turgunov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 12
  },
  {
    id: 18,
    image: './assets/img/staff/category-13.jpg',
    name: 'Ibragimov Mahmud Akram o`g`li',
    description:
      'Jizzax viloyati Pedagogik mahorat markazi Ijro intizom bo‘yicha bosh mutaxassisi. 1994-yilda tug‘ilgan. Jizzax davlat pedagogika institutida pedagogika va psixologiya yo‘nalishini tamomlagan. Mazkur vazifada 2024-yildan buyon ishlab kelmoqda.',
    position: 'Bosh mutaxassis',
    phone: '+998915933337',
    email: 'ibragimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 13
  },
  {
    id: 19,
    image: './assets/img/staff/category-5.jpg',
    name: 'Anorboyev Bunyod Shavkat o‘g‘li',
    description:
      'Jizzax davlat pedagogika institutini 2017-2021-yillar tarix fakultetini tamomlagan. Jizzax davlat pedagogika Universitetini 2021-2023-yillarda tarix fakultetinaning magistratura bosqichida taxsil olgan. O‘z faoliyatini 2020-yil Jizzax davlat pedagogika institutida “Yoshlar ittifoqi boshlang‘ich tashkiloti” yetakchisi sifatida boshlagan. 2021-yilning oktabr oyidan boshlab Jizzax shahridagi Prezident maktabida “Yoshlar ittifoqi yetakchisi”, so‘ngra 2022-yilning fevral oyidan boshlab “Tarbiyachi-pedagog” vazifasida ishlagan. 2023-yil sentyabr oyidan boshlab Jizzax shahar 2-son ixtisoslashtirilgan maktab-internatining “Ma’naviy va ma’rifiy ishlar bo‘yicha direktor o‘rinbosari” lavozimida faoliyat olib borgan. 2025-yildan Jizzax viloyati pedagogik mahorat markazida “Maktabgacha ta’limni muvofiqlashtirish” bo‘limida bo‘lim boshlig‘i lavozimida ishlaydi.',
    position: 'Bo`lim boshlig`i',
    phone: '+998915679399',
    email: 'bunyodanorboyev7@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 19,
    image: './assets/img/staff/category-5-2.png',
    name: 'Musurmonova Mariya Burxonovna',
    description:
      '1981-yil Jizzax pedagogika bilim yurtining maktabgacha ta’lim fakultetini, 1989-yil JDPIning o‘zbek tili va adabiyoti fakultetini, 2004-yil Qori Niyoziy nomidagi O‘zPFITIning maktabgacha ta’lim bo‘limini tamomlagan. Dastlab ish faoliyatini Forish tumanidagi “G‘uncha” bolalar bog‘chasida tarbiyachilikdan boshlagan. Mazkur dargohdagi ish faoliyatini esa 1989-yilda boshlagan.',
    position: 'Bosh mutaxassis',
    phone: '+998975211952',
    email: 'mariya@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 20,
    image: './assets/img/staff/category-2-2.jpg',
    name: 'Muqumova Halima Muminovna',
    description:
      'Jizzax viloyati pedagogik mahorat markazi moliya-iqtisod va buxgalteriya bo‘limi yetakchi mutaxasissi. Ma’lumoti tugallanmagan oliy, 2018-yildan Jizzax viloyat pedagogik mahorat markazi iqtisodchisi. 2024-yildan markazning yetakchi mutaxassisi.',
    position: 'Yetakchi mutaxasissi',
    phone: '+998915993200',
    email: 'muqumova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 21,
    image: './assets/img/staff/category-2-3.jpg',
    name: 'Hasanov Avazjon Alijon o‘g‘li',
    description:
      'Jizzax viloyati pedagogik mahorat markazi moliya-iqtisod va buxgalteriya bo‘limi bosh mutaxassisi. Ma’lumoti tugallanmagan oliy, 2018-yildan Jizzax viloyat pedagogik mahorat markazi hisobchisi. 2024-yildan markaz bosh mutaxassisi lavozimida ishlab kelmoqda.',
    position: 'Bosh hisobchi',
    phone: '+998915993200',
    email: 'sh_turayev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 22,
    image: './assets/img/staff/category-2-4.jpg',
    name: 'Ochilov Abduqodir Farxod o‘g‘li',
    description:
      'Jizzax viloyati pedagogik mahorat markazi g‘aznachisi. Ma’lumoti tugallanmagan oliy. 2024-yildan buyon shu vazifada ishlab kelmoqda.',
    position: 'Xisobchi',
    phone: '+998915993200',
    email: 'abduqodir@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 23,
    image: './assets/img/staff/category-6-2.jpg',
    name: 'Ubaydullayev Abbos Hakim o‘g‘li',
    description:
      '2021-yil, Muhammad Al-Xorazmiy nomidagi Toshkent Axbo- rot texnologiyalari universiteti “Axborot xavfsizligi” yo‘nalishini ta- momlagan (Bakalavr). 2021-2024-yillar Jizzax viloyat Jizzax shahridagi Prezident maktabida “Muhandis-dasturchi” lavozimida ishlagan. 2025-yildan – Jizzax viloyati pedagogik mahorat markazi “Raqamli texnologiyalarni rivojlantirish” bo‘limi boshlig‘i lavozimida ishlab kelmoqda.',
    position: 'Bosh mutaxassisi',
    phone: '+998939662223',
    email: 'norboyev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 6
  },
  {
    id: 24,
    image: './assets/img/staff/category-6-1.png',
    name: 'Norboyev Nekro‘z Nurboy o‘g‘li',
    description:
      '2020-yil Jizzax Davlat Pedagogika Instituti “Informatika o‘qitish metodi- kasi” yo‘nalishini tamomlagan (Bakalavr). 2022 yil Jizzax Davlat Pedagogika Instituti “Ta’limda axborot texnologiyalari” yo‘nalishini tamomlagan (Magistr). 2022-2022-yillar Jizzax viloyat pedagoglarni yangi metodika- larga o‘rgatish milliy markazi “O‘quv jarayonini tashkil etish” bo‘limi uslubchisi. 2022-2024-yillar Jizzax viloyat pedagoglarni yangi metodikalarga o‘rgatish milliy markazi “AKT va texnik ta’minot” bo‘limi boshligi. 2025-yildan – Jizzax viloyati pedagogik mahorat markazi “Raqamli texnologiyalarni rivojlantirish” bo‘limi bosh mutaxassisi.',
    position: 'Yetakchi mutaxassisi',
    phone: '+998939662223',
    email: 'norboyev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 6
  },
  {
    id: 25,
    image: './assets/img/staff/category-4-2.png',
    name: 'Olloyorov Ulug‘bek',
    description:
      '1996-yilda Toshkent arxitektura qurilish insti- tuti Iqtisodiyot fakultetini tamomlagan. 2009-yilda iqtisod fanlari nomzodi ilmiy darajasini olgan. Mehnat faoliyatini 1996-yildan O‘zMU qoshidagi S.Sirojiddinov nomidagi aka- demik litseyda iqtisod fani o‘qituvchi lavozimida boshlagan. So‘ng direktor o‘rinbosari lavozimida ishlagan. ',
    position: 'Bosh mutaxassis',
    phone: '+998994545919',
    email: 'ulugbek@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 26,
    image: './assets/img/staff/category-7-2.png',
    name: 'Jalolov Sardor Xonnazar o‘g‘li',
    description: "Jizzax viloyati pedagogik mahorat markazi Ta’lim sifati nazorati bo‘limi bosh mutaxassisi. 2013-yil JDPIning Geografiya va IBA fakulteti bakalavriya- tini tamomlagan. Hududiy markazdagi mehnat faoliyatini 2023-yilda iqtisodiy bilim asoslari fani metodisti sifatida boshlagan. 2025-yildan buyon Ta’lim sifati nazorati bo‘limi bosh mutaxasisi lavozimida ishlab kelmoqda.",
    position: 'Bosh mutaxassis',
    phone: '+998915993757',
    email: 'jalolov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 7
  },
  {
    id: 27,
    image: './assets/img/staff/category-7-3.jpg',
    name: 'Barakayev Elbekjon Abdulla o‘g‘li',
    description: "Jizzax viloyati pedagogik mahorat markazida 2025-yildan “Ta’lim sifati nazorati” bo‘limi bosh mutaxasisi lavozimida ishlab kelmoqda. 2016-2020-yillar Jizzax Davlat Pedagogika universi- teti talabasi. 2018-yil O‘zbekistan kasaba uyushmalari stipendianti, 2019-yil O‘zbekiston yoshlar ittifoqi stipendi- anti, 2017-2018-yillar “O‘zbekistan oromgohlari” eng faol ye- takchi nominatsiyasi golibi bo‘lgan. 2022-2024-yillar Janubiy Koreya davlati Daegu University magistranti",
    position: 'Bosh mutaxassis',
    phone: '+998919449490',
    email: 'elbekbarakayev5@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 7
  },
  {
    id: 28,
    image: './assets/img/staff/category-8.jpg',
    name: 'Voqqosov Sobir Saydaliyevich',
    description: "Jizzax viloyati pedagogik mahorat markazida 2025-yil- dan Uzluksiz kasbiy ta’limni tashkil etish bo‘limi boshlig‘i. 1995-yil Nizomiy nomidagi Toshkent davlat pedagogika institutining matematika fakulteti matematika-informatika bo‘limini bitirgan.",
    position: 'Bo’lim boshlig’i',
    phone: '+998994550703',
    email: 'voqqosov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 8
  },
  {
    id: 29,
    image: './assets/img/staff/category-8-2.png',
    name: 'Fayziyev Obloqul Unarovich',
    description: "Jizzax viloyati pedagogik mahorat markazi Uzluksiz kasbiy ta’limni tashkil etish bo‘limi bosh mutaxassisi. 1991-yil Nizomiy nomidagi Toshkent davlat pedagogika instituti tabiat-geografiya fakultetining biologiya va qishloq xo‘jalik asoslari bo‘limini bitirgan.",
    position: 'Bosh mutaxassis',
    phone: '+998995821516',
    email: 'fayziyev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 8
  },
  {
    id: 30,
    image: './assets/img/staff/category-9-2.jpg',
    name: 'Pardayev Jaloliddin Ahrorqul o‘g‘li',
    description: "Jizzax viloyati pedagogik mahorat markazi “Akademik faoliyatni muvofiqlashtirish bo‘limi” Bosh mutaxassisi. 2015-yil O‘zMU Huquqshunoslik fakultetining bakalavr, 2017-yil O‘zMU Falsafa fakultetining magistratura ixtisosligi- ni tamomlagan 2022-2024-yillarda JDPU O‘zbektiston tarixi ixtisosligi bo‘yicha doktoranturada o‘qigan",
    position: 'Bosh mutaxassis',
    phone: '+998911880881',
    email: 'pardayev@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 9
  },
  {
    id: 31,
    image: './assets/img/staff/category-9-3.png',
    name: 'Turanov Sardor Abduraimovich',
    description: "Jizzax viloyati pedagogik mahorat markazi Akademik faoliyatni muvofiqlashtirish bo‘limi yetakchi mutaxassisi. 2015-yilda JDPIning Mehnat ta’limi fakultetini bakalavr, 2023-yil shu universitet magistraturasini Texnologik ta’lim ixtisosligi bo‘yicha tamomlagan. Hududiy markazdagi faoliyatini 2015-yil mutaxassis sifatida boshlagan. 2024-yildan buyon Akademik faoliyatni muvofiqlashtirish bo‘limida yetakchi mutaxassis bo‘lib ishlamoqda.",
    position: 'Yetakchi mutaxassis',
    phone: '+998339068989',
    email: 'turanov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 9
  },
  {
    id: 32,
    image: './assets/img/staff/category-9-4.jpg',
    name: 'Yusupov Akbar Sahob o‘g‘li',
    description: "Jizzax viloyati pedagogik mahorat markazi Akademik faoliyatni muvofiqlashtirish bo‘limi yetakchi mutaxassisi. 2000-yil Jizzax shahrida tug‘ilgan. 2023-yil JDPUning Informatika va matematika fakulte- tini tamomlagan. Hududiy markazdagi mehnat faoliyatini 2024-yil bo‘lim yetakchi mutaxassisi sifatida boshlagan.",
    position: 'Yetakchi mutaxassis',
    phone: '+998915902019',
    email: 'yusupov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 9
  },
  {
    id: 33,
    image: './assets/img/staff/category-10-10.jpg',
    name: 'Turaxujayeva Madina Norpulatovna',
    description: "Jizzax viloyati pedagogik mahorat markazi metodik xizmat ko‘rsatish bo‘limi maktabgacha ta’lim metodisti. 2014-yil JDPIning Milliy istiqlol g‘oyasi, ma’naviyat asos- lari va huquq ta’limi fakultetini, 2018-yil JDPI huzuridagi XTXQTMO hududiy markazi Maktabgacha ta’lim yo‘nalishini tamomlagan. 2024-yildan Metodik xizmat ko‘rsatish bo‘li- mi maktabgacha ta’lim metodisti. 2022-yilda “O‘zbekiston Respublikasi Konstitutsiyasining 30 yilligi” ko‘krak nishoni sohibasi.",
    position: 'Maktabgacha ta’lim metodisti',
    phone: '+998904970486',
    email: 'turaxujayeva@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 34,
    image: './assets/img/staff/category-10-11.png',
    name: 'Saidova Rizvon Mustofo qizi',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limi ona tili va adabiyot fani metodisti. 2016-yil JDPUning o‘zbek tili va adabiyoti fakultetini bakalavr, 2020-yil JDPU magistraturasi o‘zbek tili va adabiyoti yo‘nalishini tamom- lagan. 2022-yil ona tili va adabiyot fani bo‘yicha oliy toifa sertifikatini qo‘lga kiritgan. Ingliz tilidan xalqaro TOEFL B2 sertifikatiga ega.",
    position: 'Ona tili fan metodisti ',
    phone: '+998905391591',
    email: 'saidova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 35,
    image: './assets/img/staff/category-10-12.png',
    name: 'Kamoljonova Go‘zal Axmadjonovna',
    description: "Jizzax viloyati pedagogik mahorat markazi o‘zbek tili fani metodisti. 2005- 2009-yil Jizzax davlat Pedagogika institutining ona tili va adabiyot fakultetida tahdil olgan. 2011-2021 yillar Jizzax shahar 22-IDUMda ona tili va adabiyot fani o‘qituvchisi, 2021-2023-yillar viloyat xalq ta’limi boshqarmasi qoshida- gi Metodik xizmat ko‘rsatish bo‘limida ona tili va adabiyot, o‘zbek tili fani metodisti bo‘lib ishlagan. 2024-yil mart oyidan Jizzax viloyat pedagogik mahorat markazida o‘zbek tili fani metodisti lavozimida ishlab kelmoqda.",
    position: 'O‘zbek tili metodisti',
    phone: '+998915667566',
    email: 'kamoljonova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 36,
    image: './assets/img/staff/category-10-13.png',
    name: 'Jabborov Maqsud Mashrabovich',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limi kimyo fani metodisti. 2006-yil JizPI “Ekologiya va tabiatdan foydalanish” yo‘na- lishida bakalavr, 2008-yil JDPIning magistraturasini kimyo ixtisosligi bo‘yicha tamomlagan.",
    position: 'Kimyo fan metodisti',
    phone: '+9989915642023',
    email: 'quvvatovm@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 37,
    image: './assets/img/staff/category-10-14.png',
    name: 'Abdugaffarov Mirjalol Abduraximovich',
    description: "Jizzax viloyati pedagogik mahorat markazi Metodik xizmat ko‘rsatish bo‘limida fizika fani metodisti. 2014- yil Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy Universiteti Fizika va Astronomiya fakultetini tamomlagan. Toshkent mehmonhona va kasb hunar kollejida bo‘lim boshlig‘i kabi mas’ul vazifalarda ishlagan.",
    position: 'Fizik fan metodisti',
    phone: '+998938287771',
    email: 'abdugaffarov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 38,
    image: './assets/img/staff/category-10-15.png',
    name: 'Sodiqov Jalol Jamolovich',
    description: "Jizzax viloyati pedagogik mahorat markazi “Metodik xizmat ko‘rsatish bo‘limi” Jismoniy tarbiya va CHQBT fani metodisti. 2013-yil JDPIning jismoniy tarbiya va jismoniy madaniyat fakultetini tamomlagan. 2024-yil SAMBXRAM universiteti magistraturasi “Biznesni boshqarish” yo‘nalishi 1 bosqich talabasi. 2022-yil O‘zbekiston Respublikasi xalq ta’lim vazirining buyrug‘iga ko‘ra “Xalq ta’limi a’lochisi” unvonini olgan. Faoliyati davomida 2 ta uslu- biy qo‘llanma, 10 ga yaqin Respublika ilmiy-amaliy anjumanlarida maqola muallifi.",
    position: 'Jis.tarbiya va ChQBT metodisti',
    phone: '+998993352221',
    email: 'sodiqov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 39,
    image: './assets/img/staff/category-10-16.jpg',
    name: 'Saidmurodov Shohrux AKBARXO‘JA O‘G‘LI',
    description: "Jizzax viloyati pedagogik mahorat markazi “Metodik xizmat ko‘rsatish” bo‘limi ijtimoiy fanlar metodisti lavozi- mida 2025-yildan ishlab kelmoqda. 2016-yil JDPIning milliy g‘oya, ma’naviyat asoslari va huquq ta’limi mutaxassisligi, 2022-yil ijtimoiy-gumanitar fanlarni o‘qitish metodikasi (tarix) mutaxassisligi bo‘yicha tamomlagan.",
    position: 'Tarix va huquq fan metodisti',
    phone: '+998995820625',
    email: 'saidmurodov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 40,
    image: './assets/img/staff/user-image.jpg',
    name: "Eryigitova Mag'firat",
    position: "Boshlang'ich ta'lim fani metodisti",
    phone: '-',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 41,
    image: './assets/img/staff/user-image.jpg',
    name: 'Umirkulova Gulnoz Xidirovna',
    position: "Tasviriy san'at va chizmachilik fani metodisti",
    phone: '-',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 42,
    image: './assets/img/staff/category-10-19.jpg',
    name: "Abduqayumov Shohruh Jamolxon o'gli",
    position: "Informatika va AT fani metodisti",
    phone: '+998947297778',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  }
]

function displayStaff (category) {
  staffContainer.innerHTML = ''
  const currentStaff = staff.filter(item => item.categoryNumber === category)

  return currentStaff.forEach(item => {
    const html = `
    ${item.description ? `<p>${item.description}</p>` : ''}
  `
    const style = item.description
      ? 'margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 20px;'
      : ''

    staffContainer.innerHTML += `
            <li class="news-item" style="display: block; margin-bottom: 24px; border-radius: 16px; padding: 25px 30px; background-color: #fff; box-shadow: 0px 5px 12px 0px rgb(227, 226, 226);" data-aos="fade-up" data-aos-delay="100">
              <div class="row" style="${style}">
                <div class="col-lg-6 col-md-4 col-sm-12 staff-image-container" style="width: unset; margin-right: 10px;">
                    <img
                    src="${item.image}"
                    alt="image"
                    class="staff-image"
                    />
                </div>
                <div class="content col-lg-6 col-md-7 col-sm-12">
                    <h2>${item.name}</h2>
                    <div style="display: flex; align-items: center">
                    <h6>Lavozimi:</h6>
                    <p style="margin-bottom: 8px; margin-left: 8px;">${item.position}</p>
                    </div>
                    <div style="display: flex; align-items: center">
                        <h6>Telefon:</h6>
                        <p style="margin-bottom: 8px; margin-left: 8px;">${item.phone}</p>
                    </div>
                    <div style="display: flex; align-items: center">
                        <h6>Email:</h6>
                        <p style="margin-bottom: 8px; margin-left: 8px;">${item.email}</p>
                    </div>
                    <div style="display: flex; align-items: center">
                        <h6>Ish vaqti:</h6>
                        <p style="margin-bottom: 8px; margin-left: 8px;">${item.workTime}</p>
                    </div>
                </div>
              </div>
              ${html}
             
            </li>
        `
  })
}

displayStaff(1)

function setActiveCategory (category) {
  const currentElement = document.getElementById(`${category}`)

  // Remove 'active' class from all categories
  document.querySelectorAll('li a').forEach(element => {
    element.classList.remove('active')
  })

  // Add 'active' class to the clicked category
  currentElement.classList.add('active')
  displayStaff(category)

  const url = new URL(window.location.href)
  url.searchParams.set('category', category)

  // Update the URL without reloading the page
  window.history.pushState({}, '', url)
}

function getActiveCategoryWithUrl () {
  const params = new URLSearchParams(window.location.search)
  const categoryId = params.get('category')

  const currentElement = document.getElementById(`${categoryId}`)
  // Remove 'active' class from all categories
  document.querySelectorAll('li a').forEach(element => {
    element.classList.remove('active')
  })

  currentElement.classList.add('active')
  displayStaff(parseInt(categoryId))
}

getActiveCategoryWithUrl()
