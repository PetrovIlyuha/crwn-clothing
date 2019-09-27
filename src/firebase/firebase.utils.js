import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_4BBJLnILn6fKHTdYQlfvFgiBqaCtVV4",
  authDomain: "crwn-db-a2024.firebaseapp.com",
  databaseURL: "https://crwn-db-a2024.firebaseio.com",
  projectId: "crwn-db-a2024",
  storageBucket: "crwn-db-a2024.appspot.com",
  messagingSenderId: "204295976616",
  appId: "1:204295976616:web:6e7c36eec55d1736dfb49d",
  measurementId: "G-Q5BM9GJLND"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;