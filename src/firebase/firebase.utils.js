import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ3B8s-cn8S-lVoT4gYs5nD5FXBNVFzPA",
    authDomain: "crwn-db-e00e9.firebaseapp.com",
    databaseURL: "https://crwn-db-e00e9.firebaseio.com",
    projectId: "crwn-db-e00e9",
    storageBucket: "crwn-db-e00e9.appspot.com",
    messagingSenderId: "1035724587296",
    appId: "1:1035724587296:web:da82d746b3445922445745"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;