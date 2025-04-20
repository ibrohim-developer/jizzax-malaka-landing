const staffContainer = document.getElementById('staffContainer')
const academicStaff = [
  {
    id: 1,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 2,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 3,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 4,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    description: "Jizzax viloyati pedagogik mahorat markazi “Aniq va tabiiy fanlar metodikasi” kafedrasi katta o‘qituvchisi. 2008- yil JDPIning fizika-matematika fakultetini bakalavr, 2010-yil SamDUning magistraturasini Amaliy matematika va axborot texnologiyalari ixtisosligi bo‘yicha tamomlagan.",
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 5,
    image: './assets/img/staff/academic-category-5.jpg',
    name: 'Karimov Sanjar Sindorqulovich',
    position: 'Kafedra mudiri',
    phone: '+998902291815',
    email: 'karimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 6,
    image: './assets/img/staff/academic-category-1-2.png',
    name: 'Akmal Sirliyevich KO‘BAYEV',
    position: 'Dotsent',
    phone: '+998993555551',
    email: 'sirliyevich@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 7,
    image: './assets/img/staff/academic-category-1-3.png',
    name: 'Nuriddin Yahyoqulovich QURBONOV',
    description: "Jizzax viloyati pedagogik mahorat markazi “Pedagogika va psixologiya ta’lim texnologiyalari” kafedrasi dotsenti, p.f.f.d., (PhD), 2005-yil JDPIning mehnat ta’limi fakultetini bakalavr, 2008-yil pedagogika yo‘nalishida magistraturani tamom- lagan.",
    position: 'Dotsent',
    phone: '+998911946060',
    email: 'Yyhyoqulovich@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 8,
    image: './assets/img/staff/academic-category-1-4.jpg',
    name: 'Madina Fayzulla qizi XUDOYNAZAROVA',
    description: "Jizzax viloyati pedagogik mahorat markazi pedagogika va psixologiya ta’lim texnologiyalari kafedrasi o‘qituvchisi. 2020-yil JDPIning pedagogika-psixologiya fakultetini bakalavr, 2022-yil JDPU magistraturasini Pedagogika nazariyasi va tarixi bo‘yicha tamomlagan.",
    position: 'O‘qituvchi',
    phone: '+998997400508',
    email: 'madina@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 9,
    image: './assets/img/staff/user-image.jpg',
    name: 'Soatova Farog`at',
    position: 'Kutubxona rahbarlari o‘qituvchi',
    phone: '-',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 10,
    image: './assets/img/staff/user-image.jpg',
    name: 'Egamnazarov Murod',
    position: 'O‘qituvchi',
    phone: '+998933002824',
    email: 'egamnazarov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 11,
    image: './assets/img/staff/user-image.jpg',
    name: 'Majidov Jasur',
    position: 'Dotsent',
    phone: '+998945722119',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 12,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Nigora Erkinovna ERGASHEVA',
    description: "Kafedra katta o‘qituvchisi N.Ergasheva ko‘p yillik peda- gogik tajriba va mahoratga ega. U ilg‘or pedagog sifatida zamonaviy ta’lim va axborot texnologiyalaridan foydalan- gan holda malaka oshirish tizimida samarali mehnat qilib kelmoqda. Uning dars mashg‘ulotlarini qiziqarli tashkil etish maqsadida yaratgan metodik ishlari “Domino”, “Soyabon”, “Besh barmoq” kabi didaktik o‘yinlari hamda ko‘rgazma- li vositalari markaz professor-o‘qituvchilari va tinglovchilar e’tiborini tortgan.",
    position: 'Dotsent',
    phone: '+998975240075',
    email: 'erkinovna@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 13,
    image: './assets/img/staff/academic-category-2-3.png',
    name: 'Jabborova Zuxra',
    position: 'Katta o‘qituvchi ',
    phone: '+998919446776',
    email: 'jabborova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 14,
    image: './assets/img/staff/academic-category-2-4.jpg',
    name: 'Xolmo‘minova Baxora',
    position: 'O‘qituvchi',
    phone: '+998994487292',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 15,
    image: './assets/img/staff/academic-category-2-5.png',
    name: 'Boyqulov Azamat MAHRAM O‘G‘LI',
    description: "2015-yil Jizzax Davlat pedagogika institutiga Defekto- logiya yo‘nalishiga o‘qishga kirdi va 2019-yilda a’lo baholarga tugatdi. 2019-yil Jizzax viloyat zaif eshituvchi bolalar maxsus maktab internatida surdolog bo‘lib ishladi. 2024-yildan Jizzax viloyat Pedagogik mahorat markazida Maktabgacha, boshlang ‘ich va maxsus ta’lim metodikalari kafedrasi o‘qituvchisi.",
    position: 'O‘qituvchi',
    phone: '+998977934022',
    email: 'boyqulov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 16,
    image: './assets/img/staff/user-image.jpg',
    name: 'Gapparova Zilola NEYMAT Qizi',
    description: "Uning pedagogik faoliyati 2018-yil Jizzax shahar 21-son “Orzu” MTT tarbiyachiligidan boshlangan. 2025-yildan Jizzax viloyati pedagogik mahorat markazi Maktabgacha, boshlang‘ich va maxsus ta’lim kafedrasida o‘qituvchi bo‘lib ishlab kelmoqda.",
    position: 'O‘qituvchi',
    phone: '+998995473337',
    email: 'gapparova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 17,
    image: './assets/img/staff/user-image.jpg',
    name: 'Begmatova Munira TOLIBJON Qizi',
    description: "2014-2024-yillarda Jizzax shah- ridagi 32-maktabgacha ta’lim tashkilotida tarbiyachi bo‘lib, o‘zining pedagogik faoliyatini boshlagan. 2018-2021-yillarida Jizzax davlat pedagogika unversitetining maktabgacha ta’lim yo‘nalishi sirtqi bo‘limida talaba bo‘lgan. 2025-yil yanvar oyidan boshlab Jizzax viloyati pedagogik mahorat markazi Maktabgacha, boshlang‘ich va maxsus ta’lim metodikalari kafedrasida o‘qituvchi bo‘lib ishlab kelmoqda.",
    position: 'O‘qituvchi',
    phone: '+998905396615',
    email: 'begmatova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 18,
    image: './assets/img/staff/user-image.jpg',
    name: 'Ruzikulova Surayyo MUXIDDINOVNA',
    description: "2015-yil Paxtakor tumani Xizmat ko‘rsatish kasb-hunar kollejida o‘qituvchi sifatida faoliyat boshlagan. 2019-2020-yil- lar Uchtepa qishloq xo‘jaligi kasb-hunar kollejida maxsus fan o‘qituvchisi vazifasida ishlagan. 2023-2025-yillar Jizzax shahar 23-sonli davlat makta- bgacha ta’lim tashkiloti uslubchisi. Mahorat markazidagi mehnat faoliyatini 2025-yilda maktabgacha, boshlang‘ich va maxsus ta’lim metodikalari kafedrasi o‘qituvchisi lavozimidan boshlagan.",
    position: 'O‘qituvchi',
    phone: '+998974848577',
    email: 'surayyo@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 19,
    image: './assets/img/staff/user-image.jpg',
    name: 'Dilbar Rustamovna ABDUXOLIQOVA',
    description: "U pedagogik faoliyatini 2017-yil Qashqadaryo viloyati Qarshi shahar 25-umumiy o‘rta ta’lim maktabida boshlan- g‘ich ta’lim o‘qituvchisi lavozimidadan boshlagan. 2025-yil mart oyidan hozirgi kungacha Jizzax viloyati pedagogik mahorat markazi “Maktabgacha boshlang‘ich va maxsus ta’lim” kafedirasi o‘qituvchisi lavozimida ishlab kelmoqda.",
    position: 'Katta o‘qituvchi',
    phone: '-',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 21,
    image: './assets/img/staff/user-image.jpg',
    name: 'Nishonov Shavkat',
    position: 'Katta o‘qituvchi',
    phone: '+998916300067',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 22,
    image: './assets/img/staff/academic-category-3-3.jpg',
    name: 'Ikrom Quchqarovich BURONOV',
    description: "Jizzax viloyati pedagogik mahorat markazi “Tillarni o‘qitish metodikasi” kafedrasi dotsenti. 2011-yil JDPIning o‘zbek tili va adabiyoti fakultetini bakalavr, 2015-yil SamDUning magistraturasini Adabiyotshunoslik (o‘zbek adabiyoti) ixtisosligi bo‘yicha tamomlagan.",
    position: 'Katta o‘qituvchi',
    phone: '+998919415737',
    email: 'ikrom@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 23,
    image: './assets/img/staff/academic-category-3-4.png',
    name: 'Dildora Kaxarovna ISHTAYEVA',
    description: "Jizzax viloyati pedagogik mahorat markazi “Tillarni o‘qi- tish metodika” kafedrasi o‘qituvchisi. 2011-yil JDPI Ingliz tili va adabiyoti fakultetini bakalavr, 2021-yil JDPIning magistraturasini Ingliz tili va adabiyoti bo‘yicha tamomlagan. Ko‘p yillar ta‘lim sohasida dastlab Toshkent shaxar Mirobod tumanida umumiy o‘rta ta‘lim maktabida va Jizzax politexnika institutida ishlagan.",
    position: 'O‘qituvchi',
    phone: '+998990651727',
    email: 'kaxarovna@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 24,
    image: './assets/img/staff/user-image.jpg',
    name: 'Maxammadiyev Xurshid',
    position: 'Dotsent',
    phone: '+998941953838',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 27,
    image: './assets/img/staff/user-image.jpg',
    name: 'Xolboyeva Munisa',
    position: 'Katta o‘qituvchi',
    phone: '+998904850783',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 28,
    image: './assets/img/staff/academic-category-4-3.png',
    name: 'Doston Keldibekovich NORBEKOV',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 30,
    image: './assets/img/staff/academic-category-4-4.png',
    name: 'Mansur Normamatovich TURDALIYEV',
    description: "Jizzax viloyati pedagogik mahorat markazi Aniq va tabi- iy fanlar metodikasi kafedrasi matematika - informatika fani katta o‘qituvchisi. 2011-yil Jizzax davlat pedagogika institutining Fizika- matematika fakulteti “Matematika va informatika” yo‘nalishi bakalavri, 2017-yil SamDUning Amaliy matematika va axbo- rot texnologiyalari ixtisosligi bo‘yicha magistranti.",
    position: 'Katta o‘qituvchi',
    phone: '+998973250554',
    email: 'normamatovich@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 31,
    image: './assets/img/staff/academic-category-4-5.png',
    name: 'Orifjon Ungarovich ERGASHEV',
    description: "Jizzax viloyati mahorat markazi Aniq va tabiiy fanlar me- todikasi kafedrasi geografiya fani katta o‘qituvchisi. 2014-yil Jizzax davlat pedagogika institutining Tabiiy fanlar fakultetining Geografiya va IBA yo‘nalishini bakalavr, 2016-yil Nizomiy no- midagi TDPU magistraturasini “Aniq va tabiiy fanlarni o‘qitish metodikasi” (Geografiya) ixtisosligi bo‘yicha tamomlagan. Hududiy markazdagi mehnat faoliyatini 2018-yilda o‘qituvchi sifatida boshlagan. 2023-yildan Jizzax viloyati pedagogik mahorat markazi Aniq va tabiiy fanlarni o‘qitish metodikasi kafedrasida katta o‘qituvchi lavozimida ishlab kelmoqda.",
    position: 'Katta o‘qituvchi',
    phone: '+998995576690',
    email: 'orifjon@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 32,
    image: './assets/img/staff/academic-category-4-6.png',
    name: 'Egamqulov Sherzod',
    position: 'Katta o‘qituvchi',
    phone: '+998973252580',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 33,
    image: './assets/img/staff/academic-category-5-2.png',
    name: 'Norpulat Akramovich AXMEDJONOV',
    description: "Kafedra dotsenti, tarix fanlari bo‘yicha falsafa doktori (PhD). Ko‘p yillik pedagogik tajriba va mahoratga ega. U ilg‘or pedagog sifatida zamonaviy ta’lim va axborot tex- nologiyalaridan foydalangan holda malaka oshirish tizimida samarali mehnat qilib kelmoqda. Uning dars mashg‘ulotlari- ni qiziqarli tashkil etish maqsadida yaratgan metodik ishlari “Debat”, “Mantiqiy fikrla”, “Adolat o‘lkasiga sayohat” kabi di- daktik o‘yinlari hamda ko‘rgazmali vositalari e’tiborga sazovor.",
    position: 'Dosent',
    phone: '+998911955080',
    email: 'norpulat@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 34,
    image: './assets/img/staff/user-image.jpg',
    name: 'Xujanova Munira',
    position: 'Dotsent',
    phone: '+998909858571',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },  {
    id: 35,
    image: './assets/img/staff/user-image.jpg',
    name: 'Turayev Abror',
    position: 'Dotsent',
    phone: '+998902291815',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },  {
    id: 36,
    image: './assets/img/staff/academic-category-5-5.png',
    name: 'Jamol Juraboyevich YULDASHEV',
    description: "Kafedra katta o‘qituvchisi. 2022-yildan Tillarni o‘qitish metodikasi va ijtimoiy iqtisodiy fanlar kafedrasi katta o‘qi- tuvchisi lavozimida faoliyat yuritib kelmoqda. 2014-yilda “Xalq ta’limi a’lochisi” ko‘krak nishoni bilan taqdirlangan.",
    position: 'Katta o‘qituvchi',
    phone: '+998902291815',
    email: 'jamol@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 32,
    image: './assets/img/staff/academic-category-4-7.jpg',
    name: 'Munojat Oltibekovna MUSTAFOYEVA',
    description: "Jizzax viloyati pedagogik mahorat markazi “Aniq va tabiiy fanlar metodikasi” kafedrasi katta o‘qituvchisi. 2004-yil JDPI fizika-matematika fakulteti fizika astronomiya ta’lim yo‘nalishi bakalavr, 2015-yil SamDUning kondensatsi- yalangan muhitlar fizikasi va materialshunoslik mutaxassis- ligi bo‘yicha magistri.",
    position: 'Katta o‘qituvchi',
    phone: '+998974822710',
    email: '-',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
]

function displayStaff (category) {
  staffContainer.innerHTML = ''
  const currentStaff = academicStaff.filter(
    item => item.categoryNumber === category
  )

  return currentStaff.forEach(item => {
    const html = `
    ${item.description ? `<p>${item.description}</p>` : ''}
  `
    const style = item.description
      ? 'display: flex; margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 20px;'
      : 'display: flex;'

    staffContainer.innerHTML += `
            <li class="news-item" style="display: block; margin-bottom: 24px; border-radius: 16px; padding: 25px 30px; background-color: #fff; box-shadow: 0px 5px 12px 0px rgb(227, 226, 226);" data-aos="fade-up" data-aos-delay="100">
              <div style="display: flex; ${style}">
                <div class="image" style="width: unset; margin-right: 10px;">
                    <img
                    src="${item.image}"
                    alt="image"
                    style="height: 200px; width: 200px; object-fit: cover; border-radius: 16px; border: 1px solid #0000000f;"
                    />
                </div>
                <div class="content">
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
