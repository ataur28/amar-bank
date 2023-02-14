function getInputValue(inputId){
    const inputValueElement = document.getElementById(inputId);
    const inputValueString = inputValueElement.value ;
    const inputValue = parseFloat(inputValueString);
    inputValueElement.value = '';
    return inputValue;
}

function getPreviosValue(preiviosId){
    const previourValueElement = document.getElementById(preiviosId);
    const preiviosValueString = previourValueElement.innerText;
    const preiviosValue = parseFloat(preiviosValueString);
    return preiviosValue;
}

function setValueElement(setId, setValue){
     const newValueElement = document.getElementById(setId);
     newValueElement.innerText = setValue;
    //  const currentValueElement = document.getElementById(setId);
    //  const currentValueString = currentValueElement.innerText;
    //  const currentValue = parseFloat(currentValueString);
    //  return currentValue;
}