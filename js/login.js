function loginInformation(information){
    const fieldElement = document.getElementById(information);
    const fieilString = fieldElement.value;
    return fieilString;
   

}

const btnSubmit = document.getElementById('btn-submit').addEventListener('click', function(){
//    const emailFieldElement = document.getElementById('email-field');
//    const emailFieilString = emailFieldElement.value;
//    console.log(emailFieilString);
const emailFieldString = loginInformation('email-field');
const passwordFieldString = loginInformation('password-field');
console.log(emailFieldString);
console.log(passwordFieldString);

if((emailFieldString === 'ataur@gmail.com') && (passwordFieldString === 'ataur')){
    window.location.href = 'bank.html'
}
else{
    alert('Please Provided Correct Information')
}

})