// Import needed Firebase functions from CDN URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your Firebase config — replace with your actual config
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// This function gets called when the button is clicked
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

  // Send email verification
  await sendEmailVerification(user);
  alert("Account created! A verification email has been sent to " + email + ". Please verify your email before logging in.");

  // Redirect to another page
  window.location.href = "GamePage.html";  // Change to your desired page

} catch (error) {
  alert("Error: " + error.message);
}
};
