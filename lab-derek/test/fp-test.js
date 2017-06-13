'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('map', function(){
  it('should accept an array-like object of comma separated values and a callback function and return a new array of each value as modified by the callback', function(){
    let mapTest1 = fp.map([1,2,3,4], n => n * 2);
    expect(mapTest1).toEqual([2,4,6,8]);

    let mapTest2 = fp.map(['a','b','c'], n => n + '!');
    expect(mapTest2).toEqual(['a!','b!','c!']);
  });
  it('should throw an error for input arguments that are not an array-like object of comma separated values', function(){
    let mapTest3 = fp.map(24, n => n * 2);
    expect(mapTest3).toBe(null);
  });
});

describe('filter', function(){
  it('should accept an array-like object of comma separated values and a filtering condition, and return a new array of each value which meets the condition', function(){
    let filterTest1 = fp.filter(['a', 'an', 'the'], item => item.length > 2);
    expect(filterTest1).toEqual(['the']);
  });
});

// 
// ['a', 'an', 'the'].filter(function(word){
// return word.length<4;});
