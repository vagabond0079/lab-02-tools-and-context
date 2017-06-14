'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(list[0])
    return Array.prototype.map.call(list, callback);
  else
    return null;
};

fp.filter = (list, callback) => {
  if(list[0])
    return Array.prototype.filter.call(list,callback);
  else
    return null;
};

fp.reduce = (list, args) => {
  if(list[0])
    return Array.prototype.reduce.apply(list, args);
  else
    return null;
};

fp.concat = (list1, list2) => {
  if(list1[0] && list2[0])
    return Array.prototype.concat.call(list1, list2);
  else
    return null;
};

fp.splice = (list, args) => {
  if(list[0] && typeof(args)[0] === 'number')
    return Array.prototype.splice.apply(list, args);
  else
    return null;
};
