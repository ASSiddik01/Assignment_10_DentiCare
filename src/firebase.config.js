// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe0hoXXHWcqGTV0dLQhIEbPjTLNEU19_g",
  authDomain: "denti-care-fe8eb.firebaseapp.com",
  projectId: "denti-care-fe8eb",
  storageBucket: "denti-care-fe8eb.appspot.com",
  messagingSenderId: "584449969557",
  appId: "1:584449969557:web:f38839ec2147c34dfb3a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
