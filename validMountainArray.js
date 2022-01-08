var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  } else if (arr[0] > arr[1]) {
    return false;
  } else {
    let increasingIndex;
    let isIncreasing = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (isIncreasing) {
        if (arr[i + 1] === arr[i]) {
          return false;
        } else if (arr[i + 1] < arr[i]) {
          increasingIndex = i;
          isIncreasing = false;
        }
      } else {
        if (arr[i + 1] >= arr[i]) {
          return false;
        }
      }
    }

    return increasingIndex != null ? true : false;
  }
};
