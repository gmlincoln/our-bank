// Deposit Event Handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositValueStr = depositField.value;
    const currentDeposit = parseFloat(depositValueStr);
    // Display Deposit Money
    const displayDeposit = document.getElementById('display-deposit');
    const previousDepositStr = displayDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositStr);

    const displayBalance = document.getElementById('display-balance');
    const currentBalanceStr = displayBalance.innerText;
    const currentBalance = parseFloat(currentBalanceStr);

    // Validate Deposit Value
    if (currentDeposit <= 0 || isNaN(currentDeposit)) {
        alert('Enter a valid number!');
        depositField.value = '';
    }
    else {
        const totalDeposit = previousDeposit + currentDeposit;
        displayDeposit.innerText = totalDeposit;

        const totalBalance = currentBalance + currentDeposit;
        displayBalance.innerText = totalBalance;

        depositField.value = '';
    }

});


// Withdraw Event Handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //Get value from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const currentWithdrawStr = withdrawField.value;
    const currentWithdraw = parseFloat(currentWithdrawStr);

    //innerText of Withdraw
    const displayWithdraw = document.getElementById('display-withdraw');
    const previousWithdrawStr = displayWithdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawStr);
    const totalWithdraw = previousWithdraw + currentWithdraw;
    //Balance  
    const displayBalance = document.getElementById('display-balance');
    const currentBalanceStr = displayBalance.innerText;
    const currentBalance = parseFloat(currentBalanceStr);

    // Validate withdraw input field
    if (currentWithdraw <= 0 || isNaN(currentWithdraw)) {
        alert('Enter a valid number!');
        withdrawField.value = '';
    }
    else if (currentWithdraw > currentBalance) {
        alert('You have not enough money in your account!');
        withdrawField.value = '';
    }
    else {
        displayWithdraw.innerText = totalWithdraw;
        const totalBalance = currentBalance - currentWithdraw;
        displayBalance.innerText = totalBalance;

        withdrawField.value = '';

    }

});


// Logout event handler
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

