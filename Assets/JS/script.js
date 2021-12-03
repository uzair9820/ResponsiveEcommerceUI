//Scroll Top Starts
var mybutton = document.getElementById("scroll-but");
mybutton.style.display = "none";
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Scroll Top Ends
function contactUsValidation(){
  const csform = document.getElementById("contactus");
  const fname = document.getElementById("firstname");
  const lname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message")

  csform.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
  });
  function checkInputs(){
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    var fnvalid;
    var lnvalid;
    var evalid;
    var mvalid;

    if(fnameValue === ''){
      document.getElementById('fname-parent').innerHTML = `<small style="color:red">First Name Cannot Be Empty</small>`
      fnvalid = false;
    }
    else{
      document.getElementById('fname-parent').innerHTML = ``
      fnvalid = true;
    }

    if(lnameValue === ''){
      document.getElementById('lname-parent').innerHTML = `<small style="color:red">Last Name Cannot Be Empty</small>`
      lnvalid = false;
    }
    else{
      document.getElementById('lname-parent').innerHTML = ``
      lnvalid = true;
    }

    if(emailValue === ''){
      document.getElementById('email-parent').innerHTML = `<small style="color:red">Email Cannot Be Empty</small>`
      evalid = false;
    }
    else if(!isEmail(emailValue)){
      document.getElementById('email-parent').innerHTML = `<small style="color:red">Email is invalid</small>`
      evalid = false;
    }
    else{
      document.getElementById('email-parent').innerHTML = ``
      evalid = true;
    }

    if(messageValue === ''){
      document.getElementById('message-parent').innerHTML = `<small style="color:red">Message Cannot Be Empty</small>`
      mvalid = false;
    }
    else{
      document.getElementById('message-parent').innerHTML = ``
      mvalid = true;
    }
   
    if(fnvalid === true && lnvalid === true && evalid === true && mvalid===true){
      csform.submit()
    }
  }
  /*
  function setErrorFor(input,message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small')
    
    small.innerText = message;

    formGroup.className ='form-group';
  }

  function setSuccessFor(input){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small')
    //formGroup.className = 'form-control'
    small.innerText = "";
  }*/

  function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}


