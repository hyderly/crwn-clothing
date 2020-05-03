// import firebase libraries
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase config object from firebase console
const config = {
  apiKey: "AIzaSyALHzHMCs4m4v_ZwPst3VKoU6Ul2GSIUNw",
  authDomain: "crwn-clothing-d00e7.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d00e7.firebaseio.com",
  projectId: "crwn-clothing-d00e7",
  storageBucket: "crwn-clothing-d00e7.appspot.com",
  messagingSenderId: "982643492493",
  appId: "1:982643492493:web:7ba63ebca078e437f944c4",
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
        ...additionalData,
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
