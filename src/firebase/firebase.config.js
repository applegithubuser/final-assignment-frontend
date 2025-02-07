// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQibVLbVPSffF05Ub9Nn8IUpl-QIL0Rqg",
  authDomain: "final-assignment-b8f54.firebaseapp.com",
  projectId: "final-assignment-b8f54",
  storageBucket: "final-assignment-b8f54.firebasestorage.app",
  messagingSenderId: "168420939881",
  appId: "1:168420939881:web:f2c7bfe9ddd1b44664eaf8",
  measurementId: "G-4E0ZCBDS10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;