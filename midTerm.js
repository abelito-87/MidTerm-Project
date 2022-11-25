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

