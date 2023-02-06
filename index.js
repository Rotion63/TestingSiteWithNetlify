/*
const headerTabs = document.querySelectorAll(".header-tab");
const blogName = document.querySelectorAll(".blog-name");
const blogNameText = document.querySelector("#blog-name-text");
const blogContentsText = document.querySelector("#blog-contents-text");
const blogHeadingsList = document.querySelector("#blog-headings-list");

// Array of blog objects
const blogs = [{name: "Blog1"},{name: "Blog2"}];
////////////////

/////////////// this is for netlify extracted blogs.
fetch('/.netlify/functions/get-blog-names')
  .then(response => response.json())
  .then(data => {
    const fileNames = data.fileNames;
    const blogs = [];
    for (const fileName of fileNames) {
      const blogs = fileName.replace('.html', '');
      blogs.push(blogs);
    }
    console.log(blogs);
  });
///////////////////upto this point.


const ul = document.createElement("ul");
for (let i = 0; i < blogs.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = blogs[i].name;
  a.setAttribute("href", "#");
  a.addEventListener("click", function() {
    updateBlogInfo(i);
  });
  li.appendChild(a);
  ul.appendChild(li);
}
blogName[0].appendChild(ul);

//////////////////////////////////

function updateBlogInfo(blogIndex) {
    const blog = blogs[blogIndex];
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", `blogs/${blog.name}.html`, true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        blogNameText.textContent = blog.name;
        blogContentsText.innerHTML = xhr.responseText;
  
        // Extract headings from the blog HTML
        const parser = new DOMParser();
        const blogHtml = parser.parseFromString(xhr.responseText, "text/html");
        const headings = blogHtml.querySelectorAll("h2");
  
        // Clear previous headings
        blogHeadingsList.innerHTML = "";
  
        // Add new headings
        for (const heading of headings) {
          const li = document.createElement("li");
          li.textContent = heading.textContent;
          blogHeadingsList.appendChild(li);
        }
      }
    };
  
    xhr.send();
  }


  updateBlogInfo(0);
  
// Show the first blog information on page load
*/

const headerTabs = document.querySelectorAll(".header-tab");
const blogName = document.querySelectorAll(".blog-name");
const blogNameText = document.querySelector("#blog-name-text");
const blogContentsText = document.querySelector("#blog-contents-text");
const blogHeadingsList = document.querySelector("#blog-headings-list");

let blogs = []; // Change the type to let, so that it can be re-assigned later

fetch('/.netlify/functions/get-blog-names')
  .then(response => response.json())
  .then(data => {
    const fileNames = data.fileNames;
    for (const fileName of fileNames) {
      const blog = fileName.replace('.html', '');
      blogs.push({ name: blog });
    }
    // Re-render the list of blogs after fetching data from the server
    renderBlogsList();
  });

function renderBlogsList() {
  const ul = document.createElement("ul");
  for (let i = 0; i < blogs.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = blogs[i].name;
    a.setAttribute("href", "#");
    a.addEventListener("click", function() {
      updateBlogInfo(i);
    });
    li.appendChild(a);
    ul.appendChild(li);
  }
  blogName[0].appendChild(ul);
}

function updateBlogInfo(blogIndex) {
    const blog = blogs[blogIndex];
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", `blogs/${blog.name}.html`, true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        blogNameText.textContent = blog.name;
        blogContentsText.innerHTML = xhr.responseText;
  
        // Extract headings from the blog HTML
        const parser = new DOMParser();
        const blogHtml = parser.parseFromString(xhr.responseText, "text/html");
        const headings = blogHtml.querySelectorAll("h2");
  
        // Clear previous headings
        blogHeadingsList.innerHTML = "";
  
        // Add new headings
        for (const heading of headings) {
          const li = document.createElement("li");
          li.textContent = heading.textContent;
          blogHeadingsList.appendChild(li);
        }
      }
    };
  
    xhr.send();
  }


