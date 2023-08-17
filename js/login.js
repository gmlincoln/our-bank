const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('password').value;

    //    Danger: Do not verify email or password this way
    if (userEmail === 'abc@ourbank.com' && userPassword === '12345') {
        window.location.href = 'bank.html';
    } else {
        alert('Please enter valid email and password.');
    }

});





