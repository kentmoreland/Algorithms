let expect = require('chai').expect;
let selectionSort = require('../src/selectionSort');

let sort = selectionSort.selectionSort;

describe('selectionSort', () => {
  array1 = [14, 33, 27, 10, 35, 19, 42, 44];
  array2 = [1];
  array3 = [0, -1, 3];

  it('should have a function called selectionSort', () => {
    expect(sort).to.be.a('function');
  });

  it('should sort an unsorted array', () => {
    expect(sort(array1)).to.eql([10, 14, 19, 27, 33, 35, 42, 44]);
    expect(sort(array2)).to.eql([1]);
    expect(sort(array3)).to.eql([-1, 0, 3]);
  });

});