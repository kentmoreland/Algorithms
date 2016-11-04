module.exports = {
  binarySearch: (array, item) => {
    let found = false
    let findItem = (list) => {
      let midpoint = Math.floor(list.length / 2)
      let current = list[midpoint - 1]
      if (current === item) {
        found = true
        return
      }// endif
      if (current < item) {
        findItem(list.slice(midpoint, list.length))
      }// endif
      if (current > item) {
        findItem(list.slice(list[0], midpoint))
      }// endif
    }// end finditem
    findItem(array)
    return found
  }
}
