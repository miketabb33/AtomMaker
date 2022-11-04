import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0e18D4ahkkvk1-H9N6fGh9WjyOhrYHNs",
  authDomain: "react-lvl1.firebaseapp.com",
  projectId: "react-lvl1",
  storageBucket: "react-lvl1.appspot.com",
  messagingSenderId: "442944055096",
  appId: "1:442944055096:web:b2bb89bc314745843843cd",
  measurementId: "G-Y5MCZTX9PH",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authentication = getAuth(app);
