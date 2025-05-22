
// sign-up button
const signB = document.createElement('button');
signB.textContent = 'Sign Up';
signB.className = 'signUpB';

// when button is clicked a new page is loaded
signB.addEventListener('click', function () {
  window.location.href = 'SignInPage.html';
});

// append to container
document.getElementById('button-container').appendChild(signB);


//log-in textboxes
const logUser = document.createElement('input');
logUser.placeholder = 'Username';
logUser.classList.add('log', 'logUser');


// append to container
document.getElementById('user-container').appendChild(logUser);


const logPass = document.createElement('input');
logPass.placeholder = 'Password';
logPass.classList.add('log', 'logPass');
document.getElementById('password-container').appendChild(logPass);
