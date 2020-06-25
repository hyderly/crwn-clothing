// import firebase libraries
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase config object from firebase console
const config = {
  apiKey: "AIzaSyCr6KfNcCFn3pB-ouOg0phQNIrH6t7SNv4",
  authDomain: "crwn-clothing-f6a5d.firebaseapp.com",
  databaseURL: "https://crwn-clothing-f6a5d.firebaseio.com",
  projectId: "crwn-clothing-f6a5d",
  storageBucket: "crwn-clothing-f6a5d.appspot.com",
  messagingSenderId: "396722052102",
  appId: "1:396722052102:web:dcfb62c2efc14150f43787",
  measurementId: "G-TRE6XNGSM3",
};

// initialize firebase app
firebase.initializeApp(config);

// store user data in firebase database --- firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get reference object of document
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Get shatshot object from document reference
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
      alert("error creating user", error);
    }
  }

  return userRef;
};

// code for adding all shops items into firestore once
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//Get snapshot object and convert into actual object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // convert our data into orignal form  -- check data in shop.data.js file
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// export some firebase libraries
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// add provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
