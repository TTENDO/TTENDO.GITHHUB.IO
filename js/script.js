//variables
const inputBlog = document.querySelector(".inputBlog");
const doneBtn = document.querySelector(".doneBtn");
const myBlog = document.querySelector(".myBlog");
const myStorage = window.localStorage;
const blogContent = [];

//! creating a blog store
function createBlogStore() {
  let blogstore = JSON.parse(localStorage.getItem("myBlog"));
  if (blogstore === null) {
    localStorage.setItem("myBlog", JSON.stringify([]));
    return blogstore;
  } else {
    return blogstore;
  }
}
createBlogStore();

//! delete blog
function deleteBlog() {
  const deleteBtns = document.querySelectorAll(".delBtn");
  let blogstore = createBlogStore();
  console.log(deleteBtns);
  deleteBtns.forEach(function (button, index) {
    button.onclick = function () {
      const deleteBlog = confirm("want to delete?");
      if (deleteBlog) {
        blogstore.splice(index, 1);

        localStorage.setItem("myBlog", JSON.stringify(blogstore));
        console.log(blogstore);
        displayBlog();
        location.reload();
      }
    };
  });
}

//! create Blog
function createBlog() {
  let blogstore = createBlogStore();
  const bloginputValue = inputBlog.value;

  if (bloginputValue.trim().length !== 0) {
    blogstore.push(bloginputValue);
    localStorage.setItem("myBlog", JSON.stringify(blogstore));

    displayBlog();
    deleteBlog();
    updateBlog();
  } else {
    //     alert("Please enter something in your blog");
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "Please enter something in your blog";

    return;
  }
}

//! update Blog
function updateBlog() {
  const updateBtns = document.querySelectorAll(".updateBtn");
  let blogstore = createBlogStore();

  updateBtns.forEach(function (button, index) {
    button.onclick = function () {
      const blog = this.parentElement.children[0];
      const updateBlog = prompt(`Update Blog Content : ${blog.innerText}`);

      // const updateBlog = `Update Blog Content : ${blog.innerText}`;
      // document.getElementById("updateSpace").innerHTML = blog.innerText;
      blogstore.splice(index, 1, updateBlog);
      localStorage.setItem("myBlog", JSON.stringify(blogstore));
      console.log(blogstore);
      displayBlog();
      location.reload();
    };
  });
}
// doneBtn.onclick = createBlog;

// if ((createBlog = true)) {
//   doneBtn.onclick = clear;

//! display blog
function displayBlog() {
  let blogstore = createBlogStore();
  myBlog.innerHTML = "";
  blogstore.forEach(function (blogitem, itemid) {
    const singleBlog = document.createElement("p");
    const delbtn = document.createElement("button");
    const updatebtn = document.createElement("button");

    delbtn.innerHTML = "Delete Content";
    delbtn.className = "btn btn-danger delBtn";
    delbtn.style.marginLeft = "20px";

    updatebtn.innerHTML = `Edit Content`;
    updatebtn.className = "btn btn-warning updateBtn";
    updatebtn.style.marginLeft = "20px";

    singleBlog.innerHTML = `<span>${blogitem}</span>`;
    singleBlog.appendChild(delbtn);
    singleBlog.appendChild(updatebtn);

    delbtn.className = `btn btn-danger delBtn ${itemid}`;

    myBlog.appendChild(singleBlog); //injecting a blog into the div of class
  });
}

displayBlog();
deleteBlog();
updateBlog();

doneBtn.onclick = createBlog;
