
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  // https://firebase.google.com/docs/web/setup#available-libraries
  document.addEventListener('DOMContentLoaded',function(){
    let signupForm = document.querySelector('#signup-form')
    let users = collection(db, 'UserL');
    console.log(users)

    signupForm.addEventListener('submit',function(event){
      event.preventDefault();
        let input_id = document.querySelector('#_id');
        let input_fname = document.querySelector('#fname');
        let input_lname = document.querySelector('#lname');
        let input_Email = document.querySelector('#email');
        let input_Password = document.querySelector('#password');
console.log("event:",event,"signupForm:",signupForm)
    })
     
    async function addData(){
      await addDoc(users,{
        id: input_id.value,
        FirstName: input_fname.value,
        LastName: input_lname.value,
        Email: input_Email.value,
        Password: input_Password.value,
        
      })}

  // Your web app's Firebase configuration
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

  console.log("db:",db)
  
  //console.log("collection:",users)


  async function addData(){
    await addDoc(users,{
      id: input_id.value,
      FirstName: input_fname.value,
      LastName: input_lname.value,
      Email: input_Email.value,
      Password: input_Password.value,
      
    })}

  

  
   
  btnAdd.addEventListener('click',addData)

