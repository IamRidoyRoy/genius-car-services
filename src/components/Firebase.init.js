// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASxBiFVTYEu2mn7ogTCDiJ3b-HtFIb1rI",
    authDomain: "genius-car-services-8a1d4.firebaseapp.com",
    projectId: "genius-car-services-8a1d4",
    storageBucket: "genius-car-services-8a1d4.appspot.com",
    messagingSenderId: "95420592557",
    appId: "1:95420592557:web:e8023f7640b11a9ffff124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 