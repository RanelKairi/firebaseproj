
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv39NLoVk-3mxroVtAKz_Nl17PFgH82JY",
  authDomain: "crud-cd014.firebaseapp.com",
  projectId: "crud-cd014",
  storageBucket: "crud-cd014.appspot.com",
  messagingSenderId: "643201889794",
  appId: "1:643201889794:web:4666ebc7e133c4e27b991b"
};

try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
