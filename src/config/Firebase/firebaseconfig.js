// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0pqkoWVKBLuL1W6f-LLKpU4nC8cmU94",
  authDomain: "car-booking-b6bb5.firebaseapp.com",
  projectId: "car-booking-b6bb5",
  storageBucket: "car-booking-b6bb5.appspot.com",
  messagingSenderId: "468709730501",
  appId: "1:468709730501:web:a1d025c6e67431b3c268ac",
  measurementId: "G-GY2M2WQN3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;