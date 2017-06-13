'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('map', function(){
  it('should accept an array-like object and a callback function and return a new array of each value as modified by the callback', function(){
    let mapTest1 = fp.map([1,2,3,4], n => n * 2);
    expect(mapTest1).toEqual([2,4,6,8]);

    let mapTest2 = fp.map(['a','b','c'], n => n + '!');
    expect(mapTest2).toEqual(['a!','b!','c!']);
  });
  it('should return null for input arguments that are not an array-like object', function(){
    let mapTest3 = fp.map(24, n => n * 2);
    expect(mapTest3).toBe(null);
  });
});

describe('filter', function(){
  it('should accept an array-like object and a filtering condition, and return a new array of each value which meets the condition', function(){
    let filterTest1 = fp.filter(['a', 'an', 'the'], item => item.length > 2);
    expect(filterTest1).toEqual(['the']);

    let filterTest2 = fp.filter([1,2,3], n => n>2);
    expect(filterTest2).toEqual([3]);
  });
  it('should return null for input arguments that are not an array-like object', function(){
    let filterTest3 = fp.map(true, item => item.length > 2);
    expect(filterTest3).toBe(null);
  });
});

describe('reduce', function(){
  it('should accept an array-like object and an array of arguments to include the callback function and the inital value, and return a value that results from the reduction', function(){
    let reduceTest1 = fp.reduce([1,2,3], [(a,c) => a+c, 0]);
    expect(reduceTest1).toEqual(6);
  });
  it('should return null for input arguments that are not an array-like object', function(){
    let filterTest3 = fp.map(true, item => item.length > 2);
    expect(filterTest3).toBe(null);
  });
});

describe('concat', function(){
  it('should accept two array-like objects and return a single array containing all indices of both inputs', function(){
    let concatTest1 = fp.concat([1,2,3], [4,5,6]);
    expect(concatTest1).toEqual([1,2,3,4,5,6]);

    let concatTest2 = fp.concat(['cat', 'bat'], ['rat', 'splat']);
    expect(concatTest2).toEqual(['cat', 'bat', 'rat', 'splat']);
  });
  it('should return null if either input argument is not an array-like object', function(){
    let filterTest3 = fp.map(true, item => item.length > 2);
    expect(filterTest3).toBe(null);
  });
});
