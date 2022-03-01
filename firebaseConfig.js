// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, collection, onSnapshot, addDoc, setDoc, doc } from 'firebase/firestore';
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQ6YZ80QKt4tw3VlmYI1DqXtyJS4TyQY",
  authDomain: "talkapp-9465b.firebaseapp.com",
  projectId: "talkapp-9465b",
  storageBucket: "talkapp-9465b.appspot.com",
  messagingSenderId: "273889929443",
  appId: "1:273889929443:web:c68c7d646ae86284693dd6"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export default fb;

const db = getFirestore(fb);

// Anonymous authenticate user
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const user = auth.currentUser;
    console.log("signed in", user.uid);
    if (!user.displayName) {
      const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
      updateProfile(user, {
        displayName: randomName
      }).then(() => {
        // Profile updated!
        // ...
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
        });
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
    // ...
  } else {
    signInAnonymously(auth)
  .then(() => {
    const user = auth.currentUser;
    console.log("signing in", user.uid);
    if (!user.displayName) {
      const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
      updateProfile(user, {
        displayName: randomName
      }).then(() => {
        // Profile updated!
        // ...
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
    });
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  }
});


