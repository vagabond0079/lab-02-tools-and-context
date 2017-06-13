'use strict';

const fp = require('./lib/fp.js');

// make a CLI index.js that will use your new map function to UpperCase all command line args and print them to the screen

const main = module.exports = () => {
  let result = fp.map(process.argv, n => n.toUpperCase());
  console.log(result);
  return result;
};

main();
