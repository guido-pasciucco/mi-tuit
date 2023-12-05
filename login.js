const users = [];

const login = document.querySelector("#login");
const register = document.querySelector("#register");

const loginAlert = document.querySelector(".alert-login");
login.style.display = "none";
// Register
register.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const user = { email, username, password };
    users.push(user);
    console.log(users);
    register.reset();
    register.style.display = "none";
    login.style.display = "flex";
});
console.log(users);
// Login
login.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username-login").value;
    const password = document.querySelector("#password-login").value;
    const user = users.find((user) => user.username === username);
    if (user) {
        if (user.password === password) {
            window.location.href = "dashboard.html";
        } else {
            loginAlert.classList.add("p-5");
            loginAlert.innerText = "Password is incorrect";
        }
    } else {
        loginAlert.classList.add("p-5");
        loginAlert.innerText = "Username is incorrect";
    }
    login.reset();
});
