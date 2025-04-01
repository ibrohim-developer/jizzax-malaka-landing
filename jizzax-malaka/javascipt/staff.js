const staffContainer = document.getElementById('staffContainer')
const staff = [
  {
    id: 1,
    image: './assets/img/staff/category-1.jpg',
    name: 'Abdusalomov Sardor Abduqodir oʻgʻli',
    description: "Jizzax viloyati pedagogik mahorat markazi Inson resurslarini rivojlantirish bo‘yicha bosh mutaxassisi. 2022-yil  Sh.Rashidov nomidagi Samarqand davlat universitetining inson resurslarini rivojlantirish fakultetini kadrlar menejmenti ixtisosligi bo‘yicha tamomlagan. Ko‘p yillar ta’lim sohasida - dastlab Samarqand viloyati Oqdaryo tumani “Oltin-kuz” MCHJda bosh menejer, Paxtakor tuman ixtisoslashtirilgan maktabida HR-menejer bo‘lib ishlagan. Hududiy markazda mehnat faoliyati 2025-yildan Inson resurslarini rivojlantirish bo‘yicha bosh mutaxassis sifatida boshlagan",
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
    description: " Jizzax viloyati pedagogik mahorat markazi moliya-iqtisod va buxgalteriya bo‘limi bosh hisobchisi. Ma’lumoti oliy.  2018-yildan shu lavozimda ishlab kelmoqda.",
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
    position: 'Ingliz tili metodisti',
    phone: '+998915691108',
    email: 'zokirova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 10
  },
  {
    id: 10,
    image: './assets/img/staff/category-10-4.png',
    name: 'Xolbo ‘tayeva Dilfuza Usmon qizi',
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
    name: 'Ibragimov Maxmud Akram o`g`li',
    position: 'Bosh mutaxassis',
    phone: '+998915933337',
    email: 'ibragimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 13
  }
]

function displayStaff (category) {
  staffContainer.innerHTML = ''
  const currentStaff = staff.filter(item => item.categoryNumber === category)

  return currentStaff.forEach(item => {
    staffContainer.innerHTML += `
            <li class="news-item" style="display: block; margin-bottom: 24px; border-radius: 5px; padding: 25px 30px; background-color: #fff; box-shadow: 0px 5px 12px 0px rgb(227, 226, 226);" data-aos="fade-up" data-aos-delay="100">
              <div style="display: flex; margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 20px">
                <div class="image" style="width: unset; margin-right: 10px;">
                    <img
                    src="${item.image}"
                    alt="image"
                    style="height: 200px; width: 200px; object-fit: cover; border-radius: 5px; border: 1px solid #0000000f;"
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
              <p>
                ${item.description}
              </p>
            </li>
        `
  })
}

displayStaff(1)

function setActiveCategory(category) {
  const currentElement = document.getElementById(`${category}`)

  // Remove 'active' class from all categories
  document.querySelectorAll('li a').forEach(element => {
    element.classList.remove('active')
  })

  // Add 'active' class to the clicked category
  currentElement.classList.add('active')
  displayStaff(category)

  const url = new URL(window.location.href);
  url.searchParams.set("category", category);

  // Update the URL without reloading the page
  window.history.pushState({}, "", url);

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
