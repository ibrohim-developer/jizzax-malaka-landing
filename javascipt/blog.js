// ✅ Get blog ID from URL
function getBlogIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  // ✅ Fetch blog details
  async function fetchBlog() {
    const blogId = getBlogIdFromUrl();
    if (!blogId) {
      document.getElementById("blog").innerHTML =
        "<h2>Blog not found</h2>";
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogs/${blogId}?populate=image`
      );
      const data = await response.json();
      const blog = data.data;
      console.log("blog", blog)
  
      if (!blog) {
        document.getElementById("blog").innerHTML =
          "<h2>Blog not found</h2>";
        return;
      }
  
      document.getElementById("blog").innerHTML = `
      <div>
        <img src="http://localhost:1337${blog.image.url}" alt="" style="max-width: 100%; height: auto;">
       <div style="display: flex; align-items: center; margin: 16px 0;">
          <i class="bx bxs-time" style="color: #2eca7f"></i>
          <p style="margin-left: 5px; color: #2eca7f">
            ${formatDate(blog.createdAt)}
          </p>
        </div>
        <h1>${blog.name}</h1>
        <p>${blog.description}</p>
      </div>
      `;
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }
  
  // ✅ Format date to MM_DD_YYYY
  function formatDate(dateString) {
    const date = new Date(dateString);
    
    const uzbekMonths = [
      "Yan", "Fev", "Mart", "Apr", "May", "Iyun", 
      "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"
    ];
  
    const month = uzbekMonths[date.getMonth()]; // Get month in Uzbek
    const day = date.getDate(); // Get day
    const year = date.getFullYear(); // Get year
  
    return `${month} ${day}, ${year}`;
  }
  
  // ✅ Fetch blog on page load
  fetchBlog();
  