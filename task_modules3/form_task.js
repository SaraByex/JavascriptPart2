$(document).ready(function(){



let names = $("#name").val();
let birthdate = $("#birthdate").val();
let email = $("#email").val();

$("#submitButton").on("click", function(e) {
    e.preventDefault();          
    let alert = alert("Thank You for submitting your form");
    
})


class Member {
    constructor (names, birthdate, email){
        this._names = names;
        this._birthdate = birthdate;
        this._email = email;
    }
    

    get name(){
        return this._names;
    }
    get dob(){
        return this._birthdate;
    }
    get Email(){
        return this._email;
    }
    submitInfo () {
        return `Name : ${this._names}\nDate of Birth: ${this._birthdate}\nEmail: ${this._email}`
    }

};

const dob = new Date("2021-03-04");

let member = new Member("nalule Lydia", "2021-06-02", "nalule@gmail.com");
// console.log(member.submitInfo());


const validateMember = new Promise((resolve, reject) => {
          
        if (typeof member.name !== "string" || member.name.trim() === "") {
            reject("Please enter a valid name.");
        }

        const dobDate = new Date(member.dob);
        if (isNaN(dobDate.getTime())) {
            reject("Please enter a valid date.");
        }
    
        if (typeof member.Email !== "string" || !member.Email.includes("@")) {
            reject("Please enter a valid email.");
        }
    
             resolve(`${alert}`);
});


validateMember
    .then((message) => console.log(message))
    .catch((message) => console.error(message));


};)