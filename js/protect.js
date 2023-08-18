const password = Math.round(Math.random() * (999999 - 100000 + 1)) + 100000;

function getPassword() {
    const userPassword = parseInt(prompt(`Please enter the OTP ${password} to access dashboard`));

    if (userPassword === password) {
        return showContent();
    } else {
        return show404();
    }
}

function showContent() {
    return document.body;
}
function show404() {
    return window.location.href = '404.html';
}
getPassword();
