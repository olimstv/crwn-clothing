import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSzJ3bmFuqHFGFhL32J-igasHUY010blM",
  authDomain: "crwn-clothing-db-baf58.firebaseapp.com",
  projectId: "crwn-clothing-db-baf58",
  storageBucket: "crwn-clothing-db-baf58.appspot.com",
  messagingSenderId: "625263455024",
  appId: "1:625263455024:web:2a5be8e412862747ed36f5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "consent",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
