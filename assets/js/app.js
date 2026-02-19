const password = document.getElementById('password');
const email = document.getElementById('email');
const loginform = document.getElementById('loginform');

function redirectToDashBoard(){
   
}

function login(emailValue, passwordValue){
    setTimeout(()=>{
        if(emailValue === 'snpathdi6765@gmail.com' && passwordValue === "shivraj14"){
            
            Swal.fire({
                text: "Login Successfully !!!",
                icon: "success",
                timer: 3000
            });

            redirectToDashBoard();

        } else {
            Swal.fire({
                text: "Invalid Email or Password ???",
                icon: "error",
                timer: 3000
            });
        }
    }, 1000);
}

function onsubmit(e){
    e.preventDefault();

        let obj={
            email:email.value,
            password:password.value
        }

        loginform.reset();
    login(obj.email, obj.password);
}

loginform.addEventListener('submit', onsubmit);
