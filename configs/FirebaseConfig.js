// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCa-WttC21ctNjWzaUDATEX8m3nj_TcDgg",
    authDomain: "ai-traveler-react-native.firebaseapp.com",
    projectId: "ai-traveler-react-native",
    storageBucket: "ai-traveler-react-native.appspot.com",
    messagingSenderId: "51169075911",
    appId: "1:51169075911:web:ba602468ccc172fe08d4e2",
    measurementId: "G-CH24ERCDQE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);