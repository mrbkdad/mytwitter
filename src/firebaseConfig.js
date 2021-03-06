import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

// import { getAuth, onAuthStateChanged as onStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
const myService = {
  firebase,
  authService: {
    auth: auth.getAuth(),
    GithubAuthProvider: auth.GithubAuthProvider,
    GoogleAuthProvider: auth.GoogleAuthProvider,
    onAuthStateChanged: auth.onAuthStateChanged,
    createUserWithEmailAndPassword: auth.createUserWithEmailAndPassword,
    signInWithEmailAndPassword: auth.signInWithEmailAndPassword,
    signInWithPopup: auth.signInWithPopup,
    signOut: auth.signOut,
  },
  dbService: {
    db: firestore.getFirestore(app),
    timestamp: firestore.Timestamp,
    collection: firestore.collection,
    doc: firestore.doc,
    getDocs: firestore.getDocs,
    setDoc: firestore.setDoc,
    addDoc: firestore.addDoc,
    onSnapshot: firestore.onSnapshot,
  },
};

export default myService;
