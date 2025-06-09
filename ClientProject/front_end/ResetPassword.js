import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseConfig } from './firebaseConfig.js';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitB = document.createElement('button');
signB.textContent = 'Submit';
signB.className = 'submitB';

signB.addEventListener('click', function () {
  window.location.href = 'SignInPage.html';
});

document.getElementById('button-container').appendChild(signB);

const email = "user@example.com";

sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("Password reset email sent!");
  })
  .catch((error) => {
    console.error("Error sending password reset email:", error.message);
  });


