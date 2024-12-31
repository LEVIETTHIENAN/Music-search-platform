if (localStorage.getItem("currentUser")) {
    location.href = "./index.html";
}

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();

    // Check if the user exists
    let existingUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (existingUser) {
        // Save current user to localStorage and redirect
        localStorage.setItem("currentUser", JSON.stringify(existingUser));
        alert("Đăng nhập thành công!");
        location.href = "./index.html";
    } else {
        alert("Email hoặc mật khẩu không chính xác.");
    }
});
