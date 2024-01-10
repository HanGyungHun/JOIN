import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCRR8aKTd_tSI_Nzmj7aAjqVtuu2cnVAc",
  authDomain: "my-project-20541-406501.firebaseapp.com",
  projectId: "my-project-20541-406501",
  storageBucket: "my-project-20541-406501.appspot.com",
  messagingSenderId: "24126479842",
  appId: "1:24126479842:web:f50a0430a7a33512f52dbb",
  measurementId: "G-KGV1MEL0Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



createApp(App).use(router).mount('#app')
