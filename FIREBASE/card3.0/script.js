// const student = {
//     firstname: "Cindy",
//     course: "Javascript",
//     sing(){
//         this.firstname += "Can sing"
//     }
// }



// class Student {
//     constructor(firstname, course){
//         this.firstname = firstname;
//         this.course = course;
//     }

//     sing(){
//         this.firstname += " Yolande";
//         console.log(`${this.firstname} is taking the course ${this.course}`)
//     }
// }

// const carole = new Student("Carole", "Javascript")

// carole.sing()

//card code starts here

const firebaseConfig = {
  apiKey: "AIzaSyBO1Sn5qfiIV3uQtsEr40AiMiXnpGVJuqU",
  authDomain: "wit-card3.firebaseapp.com",
  databaseURL: "https://wit-card3-default-rtdb.firebaseio.com",
  projectId: "wit-card3",
  storageBucket: "wit-card3.firebasestorage.app",
  messagingSenderId: "525037732774",
  appId: "1:525037732774:web:a82f164094172b5bbd0567"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref("students");

dbRef.get().then((snapshot)=>{

if (snapshot.exists()){
    const data = snapshot.val();
    users = Object.values(data);
    renderUsersToDOM(users);
    for (const user in data) {
        console.log(user)
        addUserCardToDOM(data[user])

    }
}else{
    console.log("snapshot does not exist")
}
})
.catch((error)=>{
  console.log("error", error)  
})
/// to update we use the id

//add user card to DOM
function addUserCardToDOM(user){
    //get the card container from the dom
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML += `<div class="card">
                <!-- left hand side of the card -->
                <div class="left-info" style="--background-color: ${user.color}">
                    <div>
                        <!-- user level -->
                        <p id="user-level">Level ${user.level}</p>
                    </div>
                    <div>
                        <!-- user image -->
                        <img src=${user.imageURL}>
                    </div>
                    <div>
                        <!-- user points -->
                       <p id="user-points-${user.name}">${user.points} points</p> 
                    </div>
                    <div class="flex-wrap">
                        <div>
                            <!-- button to decrease the points -->
                            <button class="plus-minus-button" onclick="decrementPoints('${user.name}')">-</button>
                        </div>
                        <div>
                            <!-- button to increase the points -->
                            <button class="plus-minus-button" onclick="incrementPoints('${user.name}')">+</button>
                        </div>
                    </div>
                </div>
                <!-- right hand side of the card -->
                <div class="right-info">
                    <header>
                        <h1>${user.name}</h1>
                    </header>
                    <div>
                        <p id="user-description">
                        ${user.description}
                        </p>
                    </div>
                    <div class="linkedin-link">
                        <a href="https://www.linkedin.com/feed/">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                </div>
            </div>`

}




function renderUsersToDOM(users){
    document.getElementById("card-container").innerHTML = "";
    for(user of users){
        addUserCardToDOM(user)
    }
}

renderUsersToDOM(users)

function incrementPoints(username){
    //find the user in the array
    const user = users.find((user) => user.name === username);
    console.log(user);
    //increase the point
    user.points += 1;

    const pointsLabel = document.getElementById(`user-points-${user.name}`);
    pointsLabel.textContent = `${user.points} points`
}

//task for you replicate the same for decrement

//sort

function sortUsers(){
    let sortproperty = document.getElementById("sortCard").value;
        
    users.sort((a, b)=> (a[sortproperty] > b[sortproperty] ? 1 : -1))

    renderUsersToDOM(users)

}

//using the array, calculate the total points
