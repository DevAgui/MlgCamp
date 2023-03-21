// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvfEI3I1Vc7KrHBkheSYf2HxG4Q8nZDSY",
  authDomain: "mlgcamp.firebaseapp.com",
  projectId: "mlgcamp",
  storageBucket: "mlgcamp.appspot.com",
  messagingSenderId: "57625057105",
  appId: "1:57625057105:web:d0e61cb8344a1bc46d2570",
  measurementId: "G-XY650ZZFF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);