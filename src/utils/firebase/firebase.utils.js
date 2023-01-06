/* this is a JS file because we are not returning any JSX element. */
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEV24jgCE7h31sSaexJjPB_srL_L7gEq8",
    authDomain: "my-online-shop-98d51.firebaseapp.com",
    projectId: "my-online-shop-98d51",
    storageBucket: "my-online-shop-98d51.appspot.com",
    messagingSenderId: "738828789689",
    appId: "1:738828789689:web:299068ea65104643fab868"
};


/* getAuth returns a promise --> get promise means we are going to use .then return a unique
 user id and ane mail   */

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// setting up Google Auth - first we need to set the provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(); // retrieves the current authentication of the user.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
