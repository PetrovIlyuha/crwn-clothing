import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_4BBJLnILn6fKHTdYQlfvFgiBqaCtVV4",
  authDomain: "crwn-db-a2024.firebaseapp.com",
  databaseURL: "https://crwn-db-a2024.firebaseio.com",
  projectId: "crwn-db-a2024",
  storageBucket: "",
  messagingSenderId: "204295976616",
  appId: "1:204295976616:web:6e7c36eec55d1736dfb49d",
  measurementId: "G-Q5BM9GJLND"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;