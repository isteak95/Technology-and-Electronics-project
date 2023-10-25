// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXoxYC74hBs8RT1szix6Kgr5FjGiIw5G4",
  authDomain: "electronic-web-clint.firebaseapp.com",
  projectId: "electronic-web-clint",
  storageBucket: "electronic-web-clint.appspot.com",
  messagingSenderId: "917686187044",
  appId: "1:917686187044:web:537d2fa8db07e61a8994b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;