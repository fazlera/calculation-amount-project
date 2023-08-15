
document.getElementById('deposit-btn').addEventListener('click',function(){

    const  userDepositField = document.getElementById('user-deposit');
    const userDepositValue = userDepositField.value;
    const userDeposiAmount = parseFloat(userDepositValue)

    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.innerText;
    const currentDepositAmount = parseFloat(depositAmountValue);

    const depositAmountTotal = currentDepositAmount + userDeposiAmount;

    depositAmount.innerText = depositAmountTotal;

    const totalAmount = document.getElementById('total-amount');
    const totalAmountValue = totalAmount.innerText;
    const totalAmountBalance = parseFloat(totalAmountValue);

    const totalCurretBalance = userDeposiAmount + totalAmountBalance;

    totalAmount.innerText = totalCurretBalance;

    userDepositField.value = '';




    
})