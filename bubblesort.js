function bubbleSort(array) {
  let counter = 0;
  let swap = true;

  while (swap) {
    swap = false;

    for (let i = 0; i < (array.length - counter); i++) {
      if (array[i] > array[i+1]) {
        arr = swaped(array,i,i+1);
        swap = true;
      }
    }
    counter++;

  }

  return array;
}

function swaped(arr,leftIndex,rightIndex) {
  const temp1 = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp1;
  return arr;
}


console.log(bubbleSort([1,0,3,2,5,4]));
