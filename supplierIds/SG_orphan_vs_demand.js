const fs = require('fs');
const _ = require('lodash');

const crDemand = require('./CR_US_LATEST_DEMAND.js').demand
const crSgOrphans = require('./cr_sg_orphans.js').orphans


console.info("crDemand: ", Object.keys(crDemand).length) ;
console.info("crSgOrphans", Object.keys(crSgOrphans).length );

// Compare and only get different ids from demand data.
const parentInDemand = {};
for (let gaia in crSgOrphans) {
    for (let key in crDemand) {
        //same key but different value
        if (gaia === key && crDemand[key] === crSgOrphans[key]) {
            parentInDemand[gaia] = crSgOrphans[key]
        }
    }
}

console.info('parentInDemand: ', Object.keys(parentInDemand).length);

fs.writeFile("cr_sg_orphan_analize", JSON.stringify(parentInDemand), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('file created');
});


