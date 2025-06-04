import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signB = document.createElement('button');
signB.textContent = 'Sign Up';
signB.className = 'signUpB';

signB.addEventListener('click', function () {
  window.location.href = 'SignInPage.html';
});

document.getElementById('button-container').appendChild(signB);

const logUser = document.createElement('input');
logUser.placeholder = 'Username';
logUser.classList.add('log', 'logUser');
logUser.id = 'emailInput';
document.getElementById('user-container').appendChild(logUser);


const logPass = document.createElement('input');
logPass.placeholder = 'Password';
logPass.classList.add('log', 'logPass');
logPass.id = 'passInput';
logPass.type = 'password';
document.getElementById('password-container').appendChild(logPass);


const logB = document.createElement('button');
logB.textContent = 'Submit';
logB.className = 'logB';
document.getElementById('login-container').appendChild(logB);

logB.addEventListener('click', checkUser);


async function checkUser() {
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passInput').value.trim();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      alert("Login Successful! Loading you into the game...");
      window.location.href = "PlayerScreen.html";
    } else {
      alert("Verify your email before logging in.");
    }
  } catch {
    alert("Login failed: ", error.message);
  }
}


