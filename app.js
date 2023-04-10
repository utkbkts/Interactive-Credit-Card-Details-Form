let number = document.querySelector(".number");
let namecard = document.querySelector(".jane");
let monthcard = document.querySelector("#months");
let yearcard = document.querySelector("#years");
let button = document.querySelector(".buttons");
let backnumber = document.querySelector(".back-number");
let inputcard = document.querySelector("#cardname");
let inputnumber = document.querySelector("#cardnumber");
let monthinput = document.querySelector("#month");
let yearinput = document.querySelector("#year");
let cvcinput = document.querySelector("#cvc");
let inputs = document.querySelectorAll("input");
let cvccard = document.querySelector(".zzero");
let btns = document.querySelector(".btns")
let complete = document.querySelector(".complete")
let form = document.querySelector("form")




inputcard.addEventListener("input", function() {
    namecard.innerHTML = inputcard.value.match("^[a-zA-Z]+$").join("");

    
  
  });
  
  inputnumber.addEventListener("input", function() {
    number.innerHTML = inputnumber.value.match(/.{1,4}/g).join(" ");
  });

monthinput.addEventListener("input",function(){
    monthcard.innerHTML = monthinput.value;
})

yearinput.addEventListener("input",function(){
    yearcard.innerHTML = yearinput.value;
})
cvcinput.addEventListener("input",function(){
    cvccard.innerHTML=cvcinput.value;
})


function setCardNumber(e) {
  inputnumber.innerText = format(e.target.value);
}
function setCardName(e) {
  inputcard.innerText = format(e.target.value);
}
function setCardMonth(e) {
  monthinput.innerText = format(e.target.value);
}
function setCardYear(e) {
  yearinput.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cvccard.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!inputcard.value) {
    inputcard.classList.add('error');
    inputcard.parentElement.classList.add("error_message")
  } else {
    inputcard.classList.remove("error");
    inputcard.parentElement.classList.remove("error_message");
  }
  if (!inputnumber.value) {
    inputnumber.classList.add('error')
    inputnumber.parentElement.classList.add("error_message");
  } else if (inputnumber.value.length < 16) {
    inputnumber.classList.add("error")
  } else {
    inputnumber.classList.remove("error");
    inputnumber.parentElement.classList.remove("error_message");
  }
  if (!monthinput.value) {
    monthinput.classList.add("error")
    monthinput.parentElement.classList.add("error_message");
  } else {
    monthinput.classList.remove("error");
    monthinput.parentElement.classList.remove("error_message");
  }
  if (!yearinput.value) {
    yearinput.classList.add("error")
    yearinput.parentElement.classList.add("error_message");
  } else {
    yearinput.classList.remove("error");
    yearinput.parentElement.classList.remove("error_message");
  }
  if (!cvcinput.value) {
    cvcinput.classList.add("error")
    cvcinput.parentElement.classList.add("error_message");
  } else {
    cvcinput.classList.remove("error");
    cvcinput.parentElement.classList.remove("error_message");
  }
  if (
    inputcard.value &&
    inputnumber.value &&
    monthinput.value &&
    yearinput.value &&
    cvcinput.value &&
    inputnumber.value.length == 16
  ) {
    btns.classList.remove("hidden");
    form.classList.add("hidden");
  }

}
function format(s) {
return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}



inputnumber.addEventListener("keyup", setCardNumber);
inputcard.addEventListener("keyup", setCardName);
monthinput.addEventListener("keyup", setCardMonth);
yearinput.addEventListener("keyup", setCardYear);
cvcinput.addEventListener("keyup", setCardCvc);
button.addEventListener("click", handleSubmit);