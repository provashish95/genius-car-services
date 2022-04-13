// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTCZZLgZFt9ms4rdymDuBEuiCtYqV7E4I",
    authDomain: "genius-car-services-9b2db.firebaseapp.com",
    projectId: "genius-car-services-9b2db",
    storageBucket: "genius-car-services-9b2db.appspot.com",
    messagingSenderId: "833472355657",
    appId: "1:833472355657:web:9e319ab547e95d5cf74e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;