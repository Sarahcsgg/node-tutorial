// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm i <packah=geName>

// global dependecy - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/pacjage)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
//nom init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)

