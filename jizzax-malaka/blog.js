// ✅ Get blog ID from URL
function getBlogIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  // ✅ Fetch blog details
  async function fetchBlog() {
    const blogId = getBlogIdFromUrl();
    if (!blogId) {
      document.getElementById("blogContainer").innerHTML =
        "<h2>Blog not found</h2>";
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogs/${blogId}?populate=image`
      );
      const data = await response.json();
      const blog = data.data;
  
      if (!blog) {
        document.getElementById("blogContainer").innerHTML =
          "<h2>Blog not found</h2>";
        return;
      }
  
      // ✅ Construct Blog HTML
      const imageUrl = blog.attributes.image?.data?.attributes?.url
        ? `http://localhost:1337${blog.attributes.image.data.attributes.url}`
        : "https://via.placeholder.com/150";
  
      document.getElementById("blogContainer").innerHTML = `
        <h1>${blog.attributes.name}</h1>
        <img src="${imageUrl}" alt="${blog.attributes.name}" style="max-width: 100%; height: auto;">
        <p>${blog.attributes.description}</p>
        <p><strong>Published on:</strong> ${formatDate(blog.attributes.createdAt)}</p>
      `;
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }
  
  // ✅ Format date to MM_DD_YYYY
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}_${day}_${year}`;
  }
  
  // ✅ Fetch blog on page load
  fetchBlog();
  