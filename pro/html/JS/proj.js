
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getFirestore , collection , addDoc , getDocs, deleteDoc,doc} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  
  

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

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const userss = collection(db, 'Users');
  console.log(db)
  
  

  

    //  let input_id = document.querySelector('#_id');
 
  

    
   
 //   console.log("coll",db.collection)
 
 
  let input_name = document.querySelector('#name');
  let input_Email_up = document.querySelector('#email_up');
  let input_Password_up = document.querySelector('#password_up');
  let input_Email_in = document.querySelector('#email_in');
  let input_Password_in = document.querySelector('#password_in');
  let SignInDIV = document.querySelector('.signincontainer');
  let SignUpDIV = document.querySelector('.signupcontainer');
  let TableDIV = document.querySelector('.table');


  // async function addData(){
  //   console.log("addDataFunc")
  //   await addDoc(userss,{ 
  //     Name:input_name.value,
  //     Email:input_Email_up.value,
  //     Password:input_Password_up.value,
      
      
  //   });
  // }

const signUp = async () => {
    const signUpEmail = input_Email_up.value;
    const signUpPassword = input_Password_up.value;
    const signUpName = input_name.value

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user",user);
      console.log("user.email",user.email);
      console.log("user.config",user.accessToken);
      console.log("user.uid",user.uid);
      // window.location.href = '/pro/html/signIn.html'
      
      addDoc(userss,{ 
        User_Uid:user.uid,
        Name:input_name.value,
        Email:input_Email_up.value,
        Password:input_Password_up.value,

        
        

      });
      
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.code,error.message)
    })
    ;}

const signIn = async () => {

      const signUpEmail = input_Email_in.value;
      const signUpPassword = input_Password_in.value;
      const signUpName = input_name.value;

  signInWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
        alert('Sign-In succeed')
    })   
    .catch((error) => {
      const errorCode = error.code;
      alert('Email/Password inccorect!')

      // An error happened.
    });
}
const ssignOut = async () => { // Dont forget to add eventlistener.
      const signUpEmail = input_Email_up.value;
      const signUpPassword = input_Password_up.value;
      const signUpName = input_name.value;
  signOut(auth).then(() => {
    TableDIV.style.display = "none";

    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

const checkAuthState = () =>{
onAuthStateChanged(auth, (user) => {
  if (user) {
   SignInDIV.style.display ="none";
    SignUpDIV.style.display = "none";
    TableDIV.style.display = "block";
     const uid = user.uid;
    console.log("user is signed in!");
    displayUserTable();

  } else {
       SignInDIV.style.display ="block";
      SignUpDIV.style.display = "none"
      console.log("user is signed out")
    
  }
});
}

async function displayUserTable() {
  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  
    getDocs(userss)
    .then(
      
      querySnapshot => {
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("data",data)

      // Create a new table row
      const row = document.createElement("tr");

      // Create and append table cells
      const usernameCell = document.createElement("td");
      usernameCell.textContent = data.Name;
      row.appendChild(usernameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = data.Email;
      row.appendChild(emailCell);

      const uidHidden = data.User_Uid;
      console.log("uidHidden:",uidHidden);

      const actionsCell = document.createElement("td");
      const deleteBTN = document.createElement("button");
      deleteBTN.textContent = "Delete";
      deleteBTN.setAttribute("id","delete")
      // deleteBTN.addEventListener('click',deleteUser());
      deleteBTN.addEventListener('click',()=> deleteUser(doc.id))
      actionsCell.appendChild(deleteBTN);
      row.appendChild(actionsCell);
      console.log("data.User_Uid:",data.User_Uid);
      console.log("doc",doc);
      console.log("doc.id",doc.id);
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }).catch (error=>{ 
    console.error("Error getting documents: ", error);
  });
}

// displayUserTable();

checkAuthState();

const showSignUp = async () =>{
  console.log(SignUpDIV)
  console.log(SignInDIV)
  SignInDIV.style.display ="none";
  SignUpDIV.style.display ="block";

}
// not working YET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function deleteUser (uidHidden,userss,){
  console.log("deleteusermethod, doc.id",doc.id)
  console.log("uidHidden",uidHidden)
  // console.log("userss",userss,"hara",uidHidden,data)
  const userDoc = doc(db,"Users",uidHidden);
  // console.log("data",data.User_Uid)
  console.log("uidHidden",uidHidden)
  console.log("userDoc",userDoc)
  // console.log("userss",userss,"hara",uidHidden,data)

  console.log(userDoc)
  deleteDoc(userDoc)

  .then(() => {
    console.log("document deleted with ID")
    displayUserTable();

  })
  .catch(error=>{
    console.error("Error Deleting document:", error);
  });
}
//}
document.querySelector('#signUpBTN').addEventListener('click',showSignUp); // before we use auth
document.querySelector('#addBtn').addEventListener('click',signUp);
document.querySelector('#signInBTN').addEventListener('click',signIn);
document.querySelector('#out').addEventListener('click',ssignOut);