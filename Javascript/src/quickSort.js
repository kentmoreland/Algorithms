let quickSort = (array) => {
  if(array.length < 2){ return array; }
  else{
    let pivot = array[array.length-1], left = [], right = [];
    let split = (num) => {
      if(num !== pivot) { num > pivot ? right.push(num) : left.push(num); }
    };
    array.forEach(split);
    return [].concat(quickSort(left), pivot, quickSort(right));
  }
};

module.exports.quickSort = quickSort;