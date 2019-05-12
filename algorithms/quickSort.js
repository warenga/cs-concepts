const splitArray = (array, startIndex, endIndex) => {
  const pivot = array[endIndex];
  let index = startIndex;
  while (startIndex < endIndex) {
    if (array[startIndex] <= pivot) {
      const tempVar = array[index];
      array[index] = array[startIndex];
      array[startIndex] = tempVar;
      index += 1;
    }
    startIndex += 1;
  }
  array[endIndex] = array[index];
  array[index] = pivot;
  return index;
};

const recursiveSort = (array, start, end) => {
  if (start < end) {
    const pivotIndex = splitArray(array, start, end);
    recursiveSort(array, start, pivotIndex - 1);
    recursiveSort(array, pivotIndex + 1, end);
  }
};

const quickSort = (array) => {
  const startIndex = 0;
  const endIndex = array.length - 1;
  recursiveSort(array, startIndex, endIndex);
};

const arr = [2, 1, 7, 3, 9, 4];
quickSort(arr);
console.log(arr) // [ 1, 2, 3, 4, 7, 9 ]

const arr2 = [2, 1, 7, 3, 9, 4, 10, 5, 19, 6];
quickSort(arr2);
console.log(arr2) //[ 1, 2, 3, 4, 5, 6, 7, 9, 10, 19 ]
