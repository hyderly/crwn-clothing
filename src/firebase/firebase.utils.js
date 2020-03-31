import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAl-E7TezE_hUH9QLXVegrG9w3X72tlBSs",
  authDomain: "crwn-db-65f80.firebaseapp.com",
  databaseURL: "https://crwn-db-65f80.firebaseio.com",
  projectId: "crwn-db-65f80",
  storageBucket: "crwn-db-65f80.appspot.com",
  messagingSenderId: "92304636614",
  appId: "1:92304636614:web:7cf30df27d77b20714f5c7",
  measurementId: "G-TN40FHGKV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
