/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let highestIndex;
  if (arr.length === 1) {
    arr[0] = -1;
    return arr;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      highestIndex = i + 1;
      for (let j = i + 2; j < arr.length; j++) {
        if (arr[j] > arr[highestIndex]) {
          highestIndex = j;
        }
      }
      if (highestIndex !== i) {
        arr[i] = arr[highestIndex];
      }
    }
    arr[arr.length - 1] = -1;
    return arr;
  }
};
