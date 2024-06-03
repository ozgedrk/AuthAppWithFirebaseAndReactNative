// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTZmx003LJhNsQAzJy20BivsVSIXN5mu0",
  authDomain: "login-d3a22.firebaseapp.com",
  projectId: "login-d3a22",
  storageBucket: "login-d3a22.appspot.com",
  messagingSenderId: "925910614245",
  appId: "1:925910614245:web:a4bb93b393bfbc16bf140c"
};

// Initialize Firebase

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
};
const auth = firebase.auth();

export { auth };