// sign-in email input
const emailUser = document.createElement('input');
emailUser.placeholder = 'Email';
emailUser.classList.add('createAcc', 'email');
document.getElementById('userSign-container').appendChild(emailUser);

// code input
const emailCode = document.createElement('input');
emailCode.placeholder = '123456';
emailCode.classList.add('createAcc', 'emailCode');
document.getElementById('codeSign-container').appendChild(emailCode);

// submit email button
const submit = document.createElement('button');
submit.textContent = 'Submit';
submit.className = 'submit';
document.getElementById('submit-container').appendChild(submit);

// verify code button
const submitCode = document.createElement('button');
submitCode.textContent = 'Submit Code';
submitCode.className = 'submitCode';
document.getElementById('submitCode-container').appendChild(submitCode);
submitCode.disabled = true;

submit.addEventListener('click', async () => {
  const email = emailUser.value;

  if (!email) {
    alert('Please enter the correct email address.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/send-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email}),
    });

    if (response.ok) {
        alert('Verification code sent to your email.');
        submitCode.disabled = false;
    } else {
        alert('Failed to send code. Please try again.');
    }
    
  } catch (error) {
    console.error('Error sending code:', error);
    alert('An error occurred while sending the code.');
  }
});

submitCode.addEventListener('click', async() => {
    const code = emailCode.value;
    const email = emailUser.value;
    
    try {
    const response = await fetch('http://localhost:3000/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, code: code })
    });

    

    const data = await response.json();

    if (data.redirect) {
      alert('Confirmation Success C:');
      window.location.href = data.redirect;
      
    } else if (data.error) {
      alert(data.error);
    }

  } catch (err) {
    console.error('Verification failed:', err);
    alert('An error occurred while verifying the code. Please try again.');
  }
});

