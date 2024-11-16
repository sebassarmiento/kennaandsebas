// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIJLXpfwPg1CRy0GP4eJ0gpGOa1lYCR4I",
  authDomain: "kennaandsebas.firebaseapp.com",
  projectId: "kennaandsebas",
  storageBucket: "kennaandsebas.firebasestorage.app",
  messagingSenderId: "318857200837",
  appId: "1:318857200837:web:7cb84458cef26d15ca9cac",
  measurementId: "G-R6EE8MX9KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);