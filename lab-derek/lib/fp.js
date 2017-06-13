'use strict';

// TODO create stand alone map using call, bind, and apply

const fp = module.exports = {};

// fp.map = (list, callback) => {
//     return Array.prototype.map.call(list, callback);
// };

fp.map = (list, callback) => {
  if(list[0])
    return Array.prototype.map.call(list, callback);
  else
    return null;
};

//TODO filter using call, bind, and apply

fp.filter = (list, callback) => {
  return Array.prototype.filter.call(list,callback);
};

//TODO reduce using call, bind, and apply


//TODO concat using call, bind, and apply


//TODO and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array








// make a CLI index.js that will use your new map function to UpperCase all command line args and print them to the screen
