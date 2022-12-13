import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"; 

  const firebaseConfig = {
    apiKey: "AIzaSyAiYfnyk2mKpY_wglGqH0MLoy3neUyo1i4",
    authDomain: "johnmatt-bnb.firebaseapp.com",
    projectId: "johnmatt-bnb",
    storageBucket: "johnmatt-bnb.appspot.com",
    messagingSenderId: "141428314175",
    appId: "1:141428314175:web:4c1468a91761f4adce688a"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click', function (){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click', function (){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";

});

    document.getElementById("login-btn").addEventListener('click', function (){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword= document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
    
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back!<br>"+loginEmail+"is logged in successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry!<br>+You entered the wrong info";
  })

  });


  document.getElementById("register-btn").addEventListener('click', function (){
    const registerEmail= document.getElementById("register-email").value;
    const registerPassword= document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
    
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome!<br>"+registerEmail+"<br>is Registered Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry!<br>+You entered the Wrong Info";
  })
  
  });


  document.getElementById("log-out-btn").addEventListener('click', function (){})
  signOut(auth).then(() => {
    document.getElementById("result-box").style.display="none";
    document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
    document.getElementById("result").innerHTML="Sorry!<br>+You entered the wrong info";
  });

