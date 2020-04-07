function bubbleSort(array) {
  let counter = 0;
  let swap = true; // turn switch on: give a condition to excute while loop

  while (swap) {
    swap = false; // turn off switch in case: all numbers are sorted
    console.log('hello');

    for (let i = 0; i < (array.length - counter); i++) { // for loop move the position of the large all the way to the end
      if (array[i] > array[i+1]) {
        arr = swaped(array,i,i+1);
        swap = true; // turn switch on to excute while loop for the next number again
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


console.log(bubbleSort([1,0,3,7,2,5,6,4]));
