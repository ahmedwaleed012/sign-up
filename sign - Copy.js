function reg(){

let password = document.getElementById("password").value;
let email = document.getElementById("email").value;
let username = document.getElementById("username").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

for(let i = 0; i < users.length; i++){
    if(users[i].email === email){
        alert("This email is duplicated, please enter a new email");
        return; 
    }
}
let user = {
    username: username,
    email: email,
    password: password,
    courses :[]
};

users.push(user);
localStorage.setItem("users", JSON.stringify(users));
window.location.href = "login.html";

}