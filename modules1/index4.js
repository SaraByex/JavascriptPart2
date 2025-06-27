let city = {
    name: "Calgary",
    population: 14535455,
    province: "Alberta"
}

function add(a,b) {
    return a + b
}

//module.exports = {city, add}

module.exports.city = city;
module.exports.add = add;      //only export what u need//