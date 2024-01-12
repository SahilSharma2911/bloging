// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloging-625a7.firebaseapp.com",
  projectId: "bloging-625a7",
  storageBucket: "bloging-625a7.appspot.com",
  messagingSenderId: "321999697633",
  appId: "1:321999697633:web:84623b15e01f12bcd7a9a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);