const btnWithDrow = document.getElementById('btn-withdrow').addEventListener('click', function(){
    const inputWithdrowValue = getInputValue('withdrow-field');
    if(isNaN(inputWithdrowValue)){
        alert('Please Enter The Value')
        return;
    }
    const previousWithdrowValue = getPreviosValue('withdrow-total');

    const currentWithdrowTotal = previousWithdrowValue + inputWithdrowValue;
    setValueElement('withdrow-total',currentWithdrowTotal );
    // console.log(currentDepositeTotal);

    const previousBalanceTotal = getPreviosValue('balance-total');

    if(inputWithdrowValue >previousBalanceTotal){
        alert('Your account has insufficient balance');
        return;
    }
    

    const currentBalancetotal = previousBalanceTotal - inputWithdrowValue;
    setValueElement('balance-total',currentBalancetotal );
})