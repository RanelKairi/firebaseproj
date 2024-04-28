import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore , collection , addDoc , getDoc} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBv39NLoVk-3mxroVtAKz_Nl17PFgH82JY",
    authDomain: "crud-cd014.firebaseapp.com",
    projectId: "crud-cd014",
    storageBucket: "crud-cd014.appspot.com",
    messagingSenderId: "643201889794",
    appId: "1:643201889794:web:4666ebc7e133c4e27b991b"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  