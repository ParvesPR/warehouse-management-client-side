// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
    
    // apiKey: "AIzaSyApvQrB-oAIj9lEpJkUtajs7kBEsA7Wq30",
    // authDomain: "warehouse-ae59e.firebaseapp.com",
    // projectId: "warehouse-ae59e",
    // storageBucket: "warehouse-ae59e.appspot.com",
    // messagingSenderId: "527868194590",
    // appId: "1:527868194590:web:2642e2af2a1500e79aa30f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;