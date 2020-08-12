import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq7HEZmh1n1X8Kh3hJFKTyQaQteqG9N5E",
  authDomain: "marioplan-caaa9.firebaseapp.com",
  databaseURL: "https://marioplan-caaa9.firebaseio.com",
  projectId: "marioplan-caaa9",
  storageBucket: "marioplan-caaa9.appspot.com",
  messagingSenderId: "942343107517",
  appId: "1:942343107517:web:6c8e6f0a027c58598498d4",
  measurementId: "G-E7QW81HGJF",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCq7HEZmh1n1X8Kh3hJFKTyQaQteqG9N5E",
//   authDomain: "marioplan-caaa9.firebaseapp.com",
//   databaseURL: "https://marioplan-caaa9.firebaseio.com",
//   projectId: "marioplan-caaa9",
//   storageBucket: "marioplan-caaa9.appspot.com",
//   messagingSenderId: "942343107517",
//   appId: "1:942343107517:web:6c8e6f0a027c58598498d4",
//   measurementId: "G-E7QW81HGJF",
// });

// const db = firebaseApp.firestore();

// export default db;
