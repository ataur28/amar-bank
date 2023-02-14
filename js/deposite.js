const btnDeposit = document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDepositValue = getInputValue('deposit-field');
    if(isNaN(inputDepositValue)){
        alert('Please Enter The Value')
        return;
    }
    const previousDepoditeValue = getPreviosValue('deposit-total');
    
    const currentDepositeTotal = previousDepoditeValue + inputDepositValue;
    setValueElement('deposit-total',currentDepositeTotal );
    // console.log(currentDepositeTotal);

    const previousBalanceTotal = getPreviosValue('balance-total');

    const currentBalancetotal = previousBalanceTotal + inputDepositValue;

    setValueElement('balance-total',currentBalancetotal );
    
})