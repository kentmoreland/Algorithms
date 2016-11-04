/* eslint-env mocha */
let chai = require('chai')
let expect = chai.expect
let test = require('../src/binarySearch')
let binarySearch = test.binarySearch

describe('binarySearch', () => {
  it('should be a function', () => {
    expect(binarySearch).to.be.a('Function')
  })
  it('should return a boolean', () => {
    expect(binarySearch([1])).to.be.a('Boolean')
  })
  it('should return true if the item is in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).to.equal(true)
  })
  it('should return false if the item is not in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10)).to.equal(false)
  })
})
