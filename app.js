let user_profile = []
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {
        name : name,
        email : email,
        password : password
    }

    user_profile.push(JSON.stringify(user));
    alert("Bright Submitted His Details Successfully");

})

document.getElementsByClassName("admin")[0].addEventListener("click",  function(){
    document.getElementsByClassName('wrapper')[0].style.display = "block";
    document.getElementsByClassName("form")[0].style.display = 'none'
})

document.getElementById("admin_login").addEventListener('click', function(){
    if(document.getElementById("admin_password").value == "admin"){
        alert("Welcome Admin");
        document.getElementsByClassName('details')[0].innerText = user_profile;
        document.getElementsByClassName("display")[0].style.display = "block";
        document.getElementsByClassName("wrapper")[0].style.display = "none"

    }
    else{
        alert("Wrong Admin Password")
    }
})