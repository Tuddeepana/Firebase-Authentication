
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEJ5lb1Y3o2Eg3qyzynTbcGAChJ36pLGU",
  authDomain: "test2-c1449.firebaseapp.com",
  projectId: "test2-c1449",
  storageBucket: "test2-c1449.appspot.com",
  messagingSenderId: "479599139071",
  appId: "1:479599139071:web:fd225a5cde21fe9baa54ca"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

//new add
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
