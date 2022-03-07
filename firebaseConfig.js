import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

// App's Firebase configuration
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
    const user = auth.currentUser;

    if (!user.displayName) {
      const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
      updateProfile(user, {
        displayName: randomName
      }).then(() => {
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
        });
      }).catch((error) => {
      });
    }
  } else {
    signInAnonymously(auth)
  .then(() => {
    const user = auth.currentUser;

    if (!user.displayName) {
      const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
      updateProfile(user, {
        displayName: randomName
      }).then(() => {
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
    });
      }).catch((error) => {
      });
    }
  })
  .catch((error) => {
  });
  }
});


