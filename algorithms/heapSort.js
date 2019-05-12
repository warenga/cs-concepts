const swap = (array, firstItem, lastItem) => {
  const fItem = array[firstItem];

  array[firstItem] = array[lastItem];
  array[lastItem] = fItem;
};

const heapify = (array, index, arraySize) => {
  let largest = index;
  const leftChild = 2 * index + 1;
  const rightChild = 2 * index + 2;

  if (leftChild < arraySize && array[leftChild] > array[largest]){
    largest = leftChild;
  }

  if (rightChild < arraySize && array[rightChild] > array[largest]) {
    largest = rightChild
  }

  if (largest != index) {
    swap(array, index, largest);
    heapify(array, largest, arraySize);
  }
};

const maxHeap = (array) => {
  let index = Math.floor((array.length / 2) - 1);
  while(index >= 0) {
    heapify(array, index, array.length)
    index -= 1;
  };
};

const heapSort = () => {
  maxHeap(array);

  let arraySize = array.length;
  let lastElement = arraySize - 1;

  while (lastElement > 0) {
    swap(array, 0, lastElement);
    arraySize -= 1;
    heapify(array, 0, arraySize);
    lastElement -= 1;
  };
};

const array = [2, 4, 5, 1, 9, 3];
heapSort(array);
console.log(array); // [1, 2, 3, 4, 5, 9]

const array2 = 2, 4, 5, 10, 7, 12, 1, 9, 3];
heapSort(array2);
console.log(array2); // [ 1, 2, 3, 4, 5, 7, 9, 10, 12 ]
