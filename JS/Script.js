const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

form.addEventListener('submit',(e)=>{

  e.preventDefault();

  checkInputs();

});

function checkInputs(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

  if(usernameValue ==='' || usernameValue === null){
    setErrorFor(username,'Name cannot be blank');
  }else if(checkLetters(usernameValue) === false){
    setErrorFor(username,'Name cannot contain numbers');
  }
  else{
    setSuccessFor(username);
  }

  if(emailValue ==='' || emailValue === null){
    setErrorFor(email,'Email cannot be blank');
  }else if(!isEmail(emailValue)){
    setErrorFor(email,'Email is unvalide')
  }else{
    setSuccessFor(email);
  }

  if(phoneNumberValue ==='' || phoneNumberValue === null){
    setErrorFor(phoneNumber,'Phone number cannot be blank');
  }else{
    setSuccessFor(phoneNumber);
  }
}
  


function setErrorFor(input, message){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');
  small.innerText = message;
  formControl.className ='form-control error';
}

function setSuccessFor(input){
  const formControl=input.parentElement;
  formControl.className='form-control success';
}

function checkLetters(input){
  for(let i=0; i < input.length; i++){
    if(input.charAt(i) < 10){
        return false;
        break;
    }
  }
}

function isEmail(email){
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}