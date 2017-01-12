
const binarySearch = (array, target) => {
  let low = 0, high = array.length - 1;
  while(low <= high ){
    mid = Math.floor((high + low) / 2);
    if(array[mid] === target){ return mid; }
    else if(target < array[mid]){ high = mid - 1; }
    else { low = mid + 1; }
  }
    return 'Not Found';
};

module.exports.binarySearch = binarySearch;




