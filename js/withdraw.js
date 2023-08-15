
document.getElementById('Withdraw-btn').addEventListener('click',function(){
    
    const userWithdraw = document.getElementById('user-withdraw')
    const userWithdrawValue = userWithdraw.value;
    const userWithdrawNumber = parseFloat(userWithdrawValue);
    
    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountValue = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountValue);

    const withdrawAmountTotal = withdrawAmountNumber + userWithdrawNumber;

    withdrawAmount.innerText = withdrawAmountTotal;

    const totalAmount = document.getElementById('total-amount');
    const totalAmountValue = totalAmount.innerText;
    const totalAmountBalance = parseFloat(totalAmountValue);

    const totalCurrentBalance = totalAmountBalance - userWithdrawNumber;
    totalAmount.innerText = totalCurrentBalance;

    userWithdraw.value = '';
})