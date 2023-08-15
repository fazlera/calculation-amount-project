// submit btn for login 
document.getElementById('login-btn').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;
    // console.log(userEmailValue);

    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    // console.log(userPasswordValue);

    if(userEmailValue === 'example@gmail.com' && userPasswordValue === '123456789'){
        window.location.href='amount.html'
    }
    else{
        alert('Invalid Info')
    }
    
})