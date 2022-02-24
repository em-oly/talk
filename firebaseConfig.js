// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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