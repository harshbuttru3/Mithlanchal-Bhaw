// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD37D0JrN7ckPc1JwG_hGDaHv-DOtxp6c",
  authDomain: "mithlanchal-bhaw.firebaseapp.com",
  projectId: "mithlanchal-bhaw",
  storageBucket: "mithlanchal-bhaw.firebasestorage.app",
  messagingSenderId: "266446972291",
  appId: "1:266446972291:web:0ee7eadcc410c4cb11c2b6",
  measurementId: "G-K2HSZ665RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);