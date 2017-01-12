const expect = require('chai').expect;

const search = require('../src/binarySearch');


describe('binarySearch', () => {
  it('should be a function', () => {
    expect(search.binarySearch).to.be.a('Function')
  })
  it('should return an index', () => {
    expect(search.binarySearch([1], 1)).to.be.a('number')
  })
  it('should return the index if the item is in the array', () => {

    expect(search.binarySearch([1, 2, 3, 4, 5], 3)).to.equal(2)
    expect(search.binarySearch([1, 2, 3, 4, 5, 6], 5)).to.equal(4)
  })
  it('should return not found if the item is not in the array', () => {
    expect(search.binarySearch([1, 2, 3, 4, 5], 10)).to.equal('Not Found')
  })
})
