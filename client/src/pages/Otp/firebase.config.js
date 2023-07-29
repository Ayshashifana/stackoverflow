
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7YpWGcFegyjBqHAJ5tkPtuUUXmeNuKs",
  authDomain: "otp-verify-460ec.firebaseapp.com",
  projectId: "otp-verify-460ec",
  storageBucket: "otp-verify-460ec.appspot.com",
  messagingSenderId: "909893999122",
  appId: "1:909893999122:web:aeb9ccd39629c05ba556cb",
  measurementId: "G-RMJBSWVLE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
