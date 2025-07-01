// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCDaQnV7G8wBHwRfPuuXh6rmGRcZkXutmQ",
    authDomain: "wit-class-auth.firebaseapp.com",
    projectId: "wit-class-auth",
    storageBucket: "wit-class-auth.firebasestorage.app",
    messagingSenderId: "1001995268722",
    appId: "1:1001995268722:web:fbfdcb9b886fceea35c8eb"
  };

  // initialise Firebase
 firebase.initializeApp(firebaseConfig);


 //connect the authenticate
 const auth = firebase.auth();

// Registration elements
const regEmail = document.getElementById("emailRegister");
const regPassword = document.getElementById("passwordRegister");
const btnRegister = document.getElementById("btnRegister");

// Register event
btnRegister.addEventListener("click", function (event) {
  event.preventDefault();
  
  const email = regEmail.value;
  const password = regPassword.value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userData) => {
      console.log("User ID:", userData.user.uid);
      
    })
    .catch((error) => {
      console.log("Error:", error.message);
      
    });
});

// Login elements
const logEmail = document.getElementById("emailLogin");
const logPassword = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");

// Login event
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  const email = logEmail.value;
  const password = logPassword.value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userData) => {
      console.log("User is logged in:", userData.user.uid);
      
    })
    .catch((error) => {
      console.log("Error:", error);
      alert("Login failed: " + error);
    });
});