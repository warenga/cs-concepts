const swap = (array, leftElement, rightElement) => {
  const temp = array[leftElement];

  array[leftElement] = array[rightElement];
  array[rightElement] = temp;
}

const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

const arr = [3, 8, 19, 2, 56, 3, 1, 7, 20, 5];
bubbleSort(arr); // [ 1, 2, 3, 3, 5, 7, 8, 19, 20, 56 ]

const arr2 = [200, 4, 63, 72, 1000, 32, 2, 5, 12];
bubbleSort(arr2); // [ 2, 4, 5, 12, 32, 63, 72, 200, 1000 ]
