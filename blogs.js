/*const blogs = [];

const fetchBlogs = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'blogs/', true);
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const blogFiles = JSON.parse(this.responseText);

      for (const file of blogFiles) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `blogs/${file}`, true);
        xhr.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const data = this.responseText;

            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const title = doc.getElementsByTagName('title')[0].textContent;

            blogs.push(title);
          }
        };
        xhr.send();
      }
    }
  };
  xhr.send();
};

fetchBlogs();

export default blogs;*/

const blogsFolder = './blogs/';

const fileNames = window.location.pathname.split('/').pop();
const blogData = [];
for (const fileName of fileNames) {
  if (fileName.includes('.html')) {
    blogData.push(fileName.replace('.html', ''));
  }
}

const blogs = {
  blogs: blogData
};

export default blogs;
