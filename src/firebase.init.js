// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkTdDzJDOFqpvyl1iPtMDcP_NDqX-jCCM",
  authDomain: "todoapp-87215.firebaseapp.com",
  projectId: "todoapp-87215",
  storageBucket: "todoapp-87215.appspot.com",
  messagingSenderId: "97349445970",
  appId: "1:97349445970:web:37c4e578ce940fe17fb28b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;