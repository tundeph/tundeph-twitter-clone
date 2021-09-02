import firebase from "firebase";
// import "firebase/database";
// import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0fhczDX5UulMj1xjVjWhKhUzS4UeBUeA",
  authDomain: "tundeph-twitter-clone-e7b44.firebaseapp.com",
  projectId: "tundeph-twitter-clone-e7b44",
  storageBucket: "tundeph-twitter-clone-e7b44.appspot.com",
  messagingSenderId: "159967224964",
  appId: "1:159967224964:web:9e894c8cfb47c798b74ed1",
  measurementId: "G-P4R3LWSC5P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
