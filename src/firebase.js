// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgiszdxIR78wH_nfiuEah34du5TZ560Mk",
  authDomain: "robotsforhire1.firebaseapp.com",
  projectId: "robotsforhire1",
  storageBucket: "robotsforhire1.firebasestorage.app",
  messagingSenderId: "722903652075",
  appId: "1:722903652075:web:eaaafbd02161539e01d0ae",
  measurementId: "G-FVQBT2X6GY",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

