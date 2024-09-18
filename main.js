const skipBtn = document.getElementById('skip'),
      userEm = document.getElementById('user-email'),
      passIn = document.getElementById('pass');
      
      
skipBtn.addEventListener('click',()=>{
    userEm.classList.add('in');
    passIn.classList.add('in');
})

const loginBtn = document.getElementById('login-btn');

loginBtn.onclick = function() {
    if (userEm.value.length = 2) {
        userEm.classList.remove('in');
        passIn.classList.remove('in');
    }
}

 const closeEye = document.getElementById('close-eye');
    
    
    closeEye.addEventListener('click',()=>{
        if (passIn.type = "password") {
            passIn.type = "text";
            closeEye.src = "/image/open-eye.png";
        } else {
            passIn.type = "password";
        }
    })