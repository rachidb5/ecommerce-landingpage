const saveButton = document.getElementById('salvar-email')
const emailInput = document.getElementById('email-input')
let emailList = [];

function salvarEmail() {
    console.log(emailInput.value)
    emailList.push(emailInput.value)
    localStorage.setItem('Email', emailList);

    let storedEmails = JSON.parse(localStorage.getItem("Email"));
    console.log(storedEmails)
  }

 saveButton.addEventListener('click', salvarEmail);

 window.onload = () => {
    emailList.push(localStorage.getItem('Email'));
  };
  