//cost = rate.standard + (rate.perDistance + weight)node

// in config.js
//create a data for rate and zones
// rate - standard: 14, perDistance: 4
// Zone - local: 1.0, remote: 1.5

//in shipingcalculator.js
//use the rate and zone to calculate the cost
//cost = rate.standard + (rate.perDistance + weight)node 



let shippingCost = {
    rate: {
        standard : 14,
        perDistance: 4
    },

    zone: {
        local: 1.0,
        remote: 1.5
        },

        costLocal(weight) {
        return this.rate.standard + this.rate.perDistance * weight * this.zone.local;
    },

    costRemote(weight) {
        return this.rate.standard + this.rate.perDistance * weight * this.zone.remote;
    }
};


// console.log(shippingCost.costLocal(25));  
// console.log(shippingCost.costRemote(25));

// let ShippingCostLocal = shippingCost.costLocal;  
// let ShippingCostRemote = shippingCost.costRemote;

module.exports = shippingCost;
