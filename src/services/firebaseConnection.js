import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyARD-OQo_R4KQ0kZW5hijFKzYrkrp7SEAY",
  authDomain: "meuapp-6c170.firebaseapp.com",
  databaseURL: "https://meuapp-6c170-default-rtdb.firebaseio.com",
  projectId: "meuapp-6c170",
  storageBucket: "meuapp-6c170.appspot.com",
  messagingSenderId: "629714287756",
  appId: "1:629714287756:web:ceb6bdd2b3a5b524e6cfa9",
  measurementId: "G-JD45P5WJQD",
};

if (firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
