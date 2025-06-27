class Student {
    constructor(name, hobbies, grade, course){
        this.name = name;
        this.hobbies = hobbies;
        this.course = "Fullstack Development";
        this.grade = grade;
    }
    introduction(country){
        //introduce the stdent
        console.log(`We have a new student named ${this.name}, 
            her hobby is ${this.hobbies} and she is 
            studying ${this.course} and is from ${country}`)
    }

    isDeansList(value){
        console.log(this.grade)
        if(this.grade > 90){
            return `${this.name} is on Dean's List`
        }else{
            return `${this.name} is not on Dean's List`
        }
    }

}
let femi = new Student("Femi", "Eat Out", 67);
let elena = new Student("Elena", "Dancing", 98);
// console.log(femi)
// console.log("Femi's Hobby is", femi.hobbies)
// femi.introduction("Nigeria")
console.log(femi.isDeansList());

console.log(elena.isDeansList());

// create a shape class, check if the shape is a polygon or not

class Shape {
    constructor (name, sides, color) {
        this.name = name;
        this.sides = sides;
        this.color = color
    }
    
    isPolygon() {
        return this.sides >= 3;
    }

    narration() {
        return (`${this.name} has ${this.sides} sides and is ${this.color}`)
    }
}

let triangle = new Shape("Triangle", 3, "Red");
let square = new Shape("Square", 4, "Blue");
let rectangle = new Shape("Rectangle", 4, "Yellow");
let hexagon = new Shape("Hexagon", 6, "Green");
let circle = new Shape("Circle", 0, "Black"); //not a polygon

// Put all shapes into an array
let shapes = [triangle, square, rectangle, hexagon, circle];

// Loop through and log narration + polygon status
for (let shape of shapes) {
    console.log(shape.narration());
    console.log(`Is polygon: ${shape.isPolygon()}`);
}
// console.log(triangle.isPolygon());
// console.log("is polygon", triangle.isPolygon());

class Vehicle {
    constructor(model, make, year) {
        this._model = model;
        this._make = make;
        this._year = year;
    }
    // getter
    get model() {
        return this._model; //e.g. totoya //
    }

    // setter
    set model(carDetail) {
        this._model = carDetail;

    }
}
//create aand instance
let sorento = new Vehicle("Sorento", "Kia", 2024);
//getting value
console.log(sorento.model);

//setting the value
sorento.model = "Sportage"

//getting value again
console.log(sorento.model);

//sub class - inherits from nother
class Mammal {
    constructor (name, habitat) {
        this.name = name;
        this.habitat = habitat;

    }
}
let elephant = new Mammal("Elephant", "Land");

class Whale extends Mammal {
        constructor(name, habitat, noOfLeg) {
            super(name, "water"); //to reassign a value to a property//
            this.noOfLeg = noOfLeg;

        }
}
let bluewhale = new Whale("Blue Whale", "Sea", 0);
