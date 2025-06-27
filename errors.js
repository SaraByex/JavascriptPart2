//error
//error stack trace - teels the l;ine where the error occurs and type of error eg syntax error

function sum(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("One of your values is not a number");
    }
    else{

    return num1 + num2;}
}

console.log(sum(4, "tree"));