// import firebase libraries
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase config object from firebase console
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

// initialize firebase app
firebase.initializeApp(config);

// store user data in firebase database --- firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

// export some firebase libraries
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// add provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
