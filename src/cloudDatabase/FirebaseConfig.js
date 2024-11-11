// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNxAe55GZqmQwtVFjGrqpHiUvhzVc7i64",
  authDomain: "bookapp-87b64.firebaseapp.com",
  projectId: "bookapp-87b64",
  storageBucket: "bookapp-87b64.firebasestorage.app",
  messagingSenderId: "174814775119",
  appId: "1:174814775119:web:f71c7088111a075167e73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
