const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
}

const arr = [4, 7, 1, 3, 90, 2, 45, 12, 32, 54]
insertionSort(arr); // [ 1, 2, 3, 4, 7, 12, 32, 45, 54, 90 ]
