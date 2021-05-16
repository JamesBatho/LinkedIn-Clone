import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpkmmQpNq3AVZlgqa27f_80RnrtFN23L0",
  authDomain: "linkedin-clone-4cf1f.firebaseapp.com",
  projectId: "linkedin-clone-4cf1f",
  storageBucket: "linkedin-clone-4cf1f.appspot.com",
  messagingSenderId: "271555393884",
  appId: "1:271555393884:web:6db60293c5655fca5d2999",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
