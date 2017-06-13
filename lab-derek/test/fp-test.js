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
  it('should return null for input arguments that are not an array-like object of comma separated values', function(){
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
  it('should return null for input arguments that are not an array-like object of comma separated values', function(){
    let filterTest3 = fp.map(true, item => item.length > 2);
    expect(filterTest3).toBe(null);
  });
});

describe('reduce', function(){
  it('should accept an array-like object and an array of arguments to include the callback function and the inital value, and return a value that results from the reduction', function(){
    let reduceTest1 = fp.reduce([1,2,3], [(a,c) => a+c, 0]);
    expect(reduceTest1).toEqual(6);
  });
  it('should return null for input arguments that are not an array-like object of comma separated values', function(){
    let filterTest3 = fp.map(true, item => item.length > 2);
    expect(filterTest3).toBe(null);
  });
});
