expect = require('chai').expect;

quickSort = require('../src/quickSort');
qsort = quickSort.quickSort;


describe('quickSort', () => {
  let test1 = [35, 33, 42, 10, 14, 19, 26, 44, 31];

  it('should be a function', () => {
    expect(qsort).to.be.a('function');
  });

  it('should sort a list of numbers', () => {
    expect(qsort(test1)).to.eql([10, 14, 19, 26, 31, 33, 35, 42, 44]);
  });


});

