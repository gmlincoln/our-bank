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
    if (currentDeposit > 0 || !isNaN === currentDeposit) {

        const totalDeposit = previousDeposit + currentDeposit;
        displayDeposit.innerText = totalDeposit;

        const totalBalance = currentBalance + currentDeposit;
        displayBalance.innerText = totalBalance;

        depositField.value = '';
    } else {
        alert('Enter a valid number!');
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

    //Balance  
    const displayBalance = document.getElementById('display-balance');
    const currentBalanceStr = displayBalance.innerText;
    const currentBalance = parseFloat(currentBalanceStr);

    // Validate withdraw input field
    if (currentWithdraw > 0 || !isNaN === currentWithdraw) {
        const totalWithdraw = previousWithdraw + currentWithdraw;
        displayWithdraw.innerText = totalWithdraw;

        const totalBalance = currentBalance - currentWithdraw;
        displayBalance.innerText = totalBalance;

        withdrawField.value = '';
    } else {
        alert('Enter a valid number!');
    }

});
