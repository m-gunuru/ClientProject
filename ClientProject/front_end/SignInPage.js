
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registerUser = async function() {
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  

  await sendEmailVerification(user);
  alert("Account created! A verification email has been sent to " + email + ". Please verify your email before logging in.");
  
  await signOut(auth);

  window.location.href = "FrontPage.html";  

} catch (error) {
  alert("Error: " + error.message);
}
};
