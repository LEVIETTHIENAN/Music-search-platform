if (localStorage.getItem("currentUser")){
    location.href = "./index.html"
}
//lay the form dau tien
let form = document.querySelector("form")

form.addEventListener("submit",function(event){
event.preventDefault();//dung toan bo chuc nang mac dinh

let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
let email = document.getElementById("email").value.trim();

if (password.length < 8 || password.length > 20 || username.length < 6 || username.length > 18 ){
    alert("Ten can tu 6-18 ki tu va mat khau can tu 8-20 ki tu")
    return;
} else {
    if (localStorage.getItem("users")){
        let users = JSON.parse(localStorage.getItem("users"))
        users.push({
            username,
            password,
            email,
        })
        localStorage.setItem("users", JSON.stringify(users));

    }else{
        localStorage.setItem(
            "users",
            JSON.stringify([{
                username,
                password,
                email,

            }])
        )
    }
    alert("ban da dang ki thanh cong");
    location.href = "./login.html";
}


});