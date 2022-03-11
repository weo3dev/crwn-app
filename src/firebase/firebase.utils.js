import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC1sQKxkdhGfsxTx2sx6rde8IOQ5BIs8BY",
    authDomain: "crown-appy.firebaseapp.com",
    projectId: "crown-appy",
    storageBucket: "crown-appy.appspot.com",
    messagingSenderId: "706991777675",
    appId: "1:706991777675:web:1a0963101dec0f5c77f18e",
    measurementId: "G-Y0F3KQJ581"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;