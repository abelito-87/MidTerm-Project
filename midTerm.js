// funcion para formulario
const addPost = () => {
    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value;
    let divPhone = document.getElementById("divPhone").value;
    let comment = document.getElementById("comment").value;
    console.log(name);
    console.log(email);
    console.log(divPhone);
    console.log(comment);

    fetch("https://jsonplaceholder.typicode.com/users", 
     {
        method: "POST",
        // headers: {} 
        body: JSON.stringify({name:name,email:email,phone:divPhone})
     }) .then((response) => response.json())
        .then((formData) => console.log(formData))
        .catch((error) => (console.log(error)));
}
window.addEventListener("load", () => {document.getElementById("btn-submit").addEventListener("click",() => {
    addPost();
   })})

// funcion para traer data al index.html

const getExternalApiInfo = async () => {
   await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=3")
   .then((response) => response.json())
   .then((posts) => {
      let externalApiInfo = "";
      posts.forEach((post) => {
         externalApiInfo += `
         <div class="project-card">
         <div class="project-img-1">
           <img
             src="https://res.cloudinary.com/dfwqfes7e/image/upload/v1669374185/midterm/images/projects-section-20221121T165303Z-001/projects-section/${post.id}.jpg"
             alt="cube-img"
           />
         </div>
         <div class="project-content">
           <h4>${post.title.slice(0, 10)}</h4>
           <p>${post.body.slice(0, 30)}</p>
           <a href="./index-project-${post.id}.html">Learn More</a>
         </div>
       </div>
         `
      })
      document.querySelector("#collection-projects").innerHTML = externalApiInfo
   })
   .catch((error) => {console.log(error);})
}

getExternalApiInfo()