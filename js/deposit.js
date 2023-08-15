
document.getElementById('deposit-btn').addEventListener('click',function(){

    const  userDepositField = document.getElementById('user-deposit');
    const userDepositValue = userDepositField.value;
    const userDepositAmount = parseFloat(userDepositValue)

    // if(isNaN(userDepositAmount)){
    //     alert('Empty input')
    // }
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.innerText;
    const currentDepositAmount = parseFloat(depositAmountValue);

    if(isNaN(userDepositAmount)){
        alert('Empty input')
    }
    const depositAmountTotal = currentDepositAmount + userDepositAmount;

    depositAmount.innerText = depositAmountTotal;

    const totalAmount = document.getElementById('total-amount');
    const totalAmountValue = totalAmount.innerText;
    const totalAmountBalance = parseFloat(totalAmountValue);

    const totalCurrentBalance = userDepositAmount + totalAmountBalance;

    totalAmount.innerText = totalCurrentBalance;

    userDepositField.value = '';




    
})