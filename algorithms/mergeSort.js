const merge = (left, right) => {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex ++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex ++;
      }
    } else if (leftIndex < left.length) {
      sortedArray.push(left[leftIndex])
      leftIndex ++
    } else if (rightIndex < right.length) {
      sortedArray.push(right[rightIndex])
      rightIndex ++
    };
  };

  return sortedArray;
}

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);

  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [3402, 90, 400, 22, 7, 132, 1, 5];
mergeSort(arr); // [ 1, 5, 7, 22, 90, 132, 400, 3402 ]
