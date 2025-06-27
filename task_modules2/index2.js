
let calc = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2)=> num1 * num2,
    divide: function(num1, num2) {
        if (num2 !== 0) {return  num1 / num2;}
            else {console.log("Error, num 2 cannot be zero")}
    }
    }
;

module.exports = calc;
