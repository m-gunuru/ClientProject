
const accountPass = document.createElement('input');
accountPass.placeholder = 'xxxxxx';
accountPass.className = 'accpassword'
document.getElementById('accpassword-container').appendChild(accountPass);

// submit email button
const submitpass = document.createElement('button');
submitpass.textContent = 'Submit';
submitpass.className = 'submitP';
document.getElementById('submitpass-container').appendChild(submitpass);

submitpass.addEventListener('click', function () {
  window.location.href = 'GamePage.html';
});