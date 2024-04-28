// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let btnAdd = document.querySelector('.add') 
let inputOne = document.querySelectorAll('input')[0];
let inputTwo = document.querySelectorAll('input')[1];

console.log(db)
let exampleOfColleciton = collection(db, "exampleOfColleciton" );
console.log(exampleOfColleciton);

async function addData(){
    await addDoc(exampleOfColleciton, {
      ExOne: `kooli`,
      ExTwo: `kaka`,
       // productName:inputOne.value,
        //productPrice:inputTwo.value,
    });
}

btnAdd.addEventListener('click',addData)
