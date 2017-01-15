let selectionSort = (array) => {
  let index = 1, current = 0;

  let iswap = (index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  let increment = () => {
    if(index + 1 > array.length - 1){
      current++;
      index = current + 1;
    }else { index++; }
  };

  while (current < array.length) {
    if(array[current] > array[index]){
      iswap(current, index);
      increment();
    } else { increment(); }
  }
  return array;
};






module.exports.selectionSort = selectionSort;