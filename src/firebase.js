import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4uP3K_06xlYsjEUd4yVvdVTJwLXmg9ro",
  authDomain: "mytwitter-12ba0.firebaseapp.com",
  projectId: "mytwitter-12ba0",
  storageBucket: "mytwitter-12ba0.appspot.com",
  messagingSenderId: "495429577760",
  appId: "1:495429577760:web:a6d28184dced5f2794a045",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export default initializeApp(firebaseConfig);
