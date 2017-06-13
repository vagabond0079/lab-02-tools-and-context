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
  if(list[0])
    return Array.prototype.filter.call(list,callback);
  else
    return null;
};

//TODO reduce using call, bind, and apply

fp.reduce = (list, args) => {
  if(list[0])
    return Array.prototype.reduce.apply(list, args);
  else
    return null;
};

//TODO concat using call, bind, and apply

fp.concat = (list1, list2) => {
  if(list1[0] && list2[0])
    return Array.prototype.concat.call(list1, list2);
  else
    return null;
};

//TODO and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array

fp.splice = (list, args) => {
  if(list[0] && typeof(args)[0] === 'number')
    return Array.prototype.splice.apply(list, args);
  else
    return null;
};






// make a CLI index.js that will use your new map function to UpperCase all command line args and print them to the screen
