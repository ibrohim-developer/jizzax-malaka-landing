const newsSection = document.getElementById('news')
import { data } from '../javascipt/news.js'
async function getNews () {
  console.log(data)
  mapNews(data)
}
getNews()

function mapNews (data) {
  return data.forEach(item => {
    newsSection.innerHTML += `
        <div key="${
          item.id
        }" class="col-lg-4 col-sm-6 col-md-6" style="cursor: pointer" onclick="window.location.href='blog.html?id=${
      item.documentId
    }'">
          <div
            class="activities-card style-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
              <div class="image">
                <img
                  src="http://localhost:1337${item.image}"
                  alt="image"
                  style="height: 250px; object-fit: cover"
                />
                </div>
                <div class="content">
                <h2>${item.name}</h2>
                <p>
                  ${truncateText(item.description, 18)}
                </p>
                <div style="display: flex; align-items: center">
                  <i class="bx bxs-time" style="color: #2eca7f"></i>
                  <p style="margin-left: 5px; color: #2eca7f">
                    ${item.createdAt}
                  </p>
                </div>
              </div>
          </div>
        </div>
      `
  })
}

function truncateText (text, wordLimit = 20) {
  const words = text.split(' ')
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'
  }
  return text
}

function handleCategoryClick (event, categoryId, categoryName = 'departments') {
  event.preventDefault()

  // Redirect to academics.html with the category ID
  window.location.href = `${categoryName}.html?category=${categoryId}`
}
window.handleCategoryClick = handleCategoryClick;