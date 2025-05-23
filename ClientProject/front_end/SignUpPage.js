// sign-in email input
const emailUser = document.createElement('input');
emailUser.placeholder = 'Email';
emailUser.classList.add('createAcc', 'email');
document.getElementById('userSign-container').appendChild(emailUser);

// code input
const emailCode = document.createElement('input');
emailCode.placeholder = '12345';
emailCode.classList.add('createAcc', 'emailCode');
document.getElementById('codeSign-container').appendChild(emailCode);

// submit button
const submit = document.createElement('button');
submit.textContent = 'Submit';
submit.className = 'submit';
document.getElementById('submit-container').appendChild(submit);

let verified = false;

submit.addEventListener('click', async () => {
  const email = emailUser.value;
  const code = emailCode.value;

  const response = await fetch('http://localhost:5500/verify-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code }),
  });

  const data = await response.json();
  if (data.verified) {
    verified = true;
    const password = prompt("Enter your new password:");

    // Save to Firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Account created successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Failed to create account.');
      });
  } else {
    alert('Incorrect verification code');
  }
});
