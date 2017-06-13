'use strict';

const map = require('../lib/map.js');
const expect = require('expect');

describe('map', function(){
  it('should accept comma separated values and a callback function and return a new array of each value as modified by the callback', function(){
    let mapTest = map([1,2,3,4], n => n * 2);
    expect(mapTest).toBe([2,4,6,8]);
  });
});
