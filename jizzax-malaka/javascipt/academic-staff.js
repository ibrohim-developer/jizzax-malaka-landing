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
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 7,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 8,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 9,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 10,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 11,
    image: './assets/img/staff/academic-category-1.jpeg',
    name: 'Tilakova Mavjuda Ashurovna',
    position: 'Kafedra mudiri',
    phone: '+998952555575',
    email: 'tilakova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 1
  },
  {
    id: 12,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 13,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 14,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 15,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 16,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 17,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 18,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 19,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 20,
    image: './assets/img/staff/academic-category-2.jpg',
    name: 'Bakirov Otabek Bo‘ranovich',
    position: 'Kafedra mudiri',
    phone: '+998995575344',
    email: 'bakirov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 2
  },
  {
    id: 21,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 22,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 23,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 24,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 25,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 26,
    image: './assets/img/staff/academic-category-3.jpg',
    name: 'Murodova Umida Abdulnabiyevna',
    position: 'Kafedra mudiri',
    phone: '+998943473029',
    email: 'murodova@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 3
  },
  {
    id: 27,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 28,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 29,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 30,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 31,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 32,
    image: './assets/img/staff/academic-category-4.png',
    name: 'Mardanqulov Jasur Amirddinovich',
    position: 'Kafedra mudiri',
    phone: '+998993560590',
    email: 'mardonqulovj@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 4
  },
  {
    id: 33,
    image: './assets/img/staff/academic-category-5.jpg',
    name: 'Karimov Sanjar Sindorqulovich',
    position: 'Kafedra mudiri',
    phone: '+998902291815',
    email: 'karimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },
  {
    id: 34,
    image: './assets/img/staff/academic-category-5.jpg',
    name: 'Karimov Sanjar Sindorqulovich',
    position: 'Kafedra mudiri',
    phone: '+998902291815',
    email: 'karimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },  {
    id: 35,
    image: './assets/img/staff/academic-category-5.jpg',
    name: 'Karimov Sanjar Sindorqulovich',
    position: 'Kafedra mudiri',
    phone: '+998902291815',
    email: 'karimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
  },  {
    id: 36,
    image: './assets/img/staff/academic-category-5.jpg',
    name: 'Karimov Sanjar Sindorqulovich',
    position: 'Kafedra mudiri',
    phone: '+998902291815',
    email: 'karimov@gmail.com',
    workTime: '8:30 - 16:30',
    categoryNumber: 5
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
