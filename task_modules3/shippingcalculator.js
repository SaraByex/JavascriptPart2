

const shippingCost = require("./config.js");



console.log(shippingCost.costLocal(30));

//shipping cost
// in config.js
//create a data for rate and zones
// rate - standard: 14, perDistance: 4
// Zone - local: 1.0, remote: 1.5

//in shipingcalculator.js
//use the rate and zone to calculate the cost
//cost = rate.standard + (rate.perDistance + weight)node 