const firebaseConfig = {
  apiKey: "AIzaSyCDaQnV7G8wBHwRfPuuXh6rmGRcZkXutmQ",
  authDomain: "wit-class-auth.firebaseapp.com",
  databaseURL: "https://wit-class-auth-default-rtdb.firebaseio.com",
  projectId: "wit-class-auth",
  storageBucket: "wit-class-auth.appspot.com",
  messagingSenderId: "1001995268722",
  appId: "1:1001995268722:web:fbfdcb9b886fceea35c8eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect to Firebase Realtime Database
const db = firebase.database();

// Helper function to get input values
function getUserFromDom(id) {
  return document.getElementById(id).value;
}

// Handle form submission
function submitData(event) {
  event.preventDefault();

  let userData = {
    name: getUserFromDom("nameRegister"),
    email: getUserFromDom("emailRegister"),
    phone: getUserFromDom("phoneRegister"),
    address: getUserFromDom("addressRegister"),
    password: getUserFromDom("passwordRegister")
  };

  postData(userData);
  alert("You have been registered!");
  console.log("UserData: ", userData);
}

// Function to POST data to Firebase
function postData(data) {
  const ref = db.ref("Users").push();
  ref.set({
    firstName: data.name,
    address: data.address,
    email: data.email,
    password: data.password,
    phone: data.phone
  });
}

// Add event listener to the Register button
document.getElementById("btnRegister").addEventListener("click", submitData);