var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    const hash = {};
    let index = 0;
    let numberOfDuplicates = 0;
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] == null) {
        hash[nums[i]] = index;
        index++;
      }
    }

    for (let prop in hash) {
      nums[hash[prop]] = +prop;
    }

    for (let j = index; j < nums.length; j++) {
      numberOfDuplicates++;
      nums[j] = "_";
    }
    return nums.length - numberOfDuplicates;
  }
};
