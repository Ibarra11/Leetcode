var checkIfExist = function (arr) {
  const hash = {};
  let zeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroIndex++;
      hash[arr[i]] = zeroIndex;
    } else if (hash[arr[i]] == null) {
      hash[arr[i]] = arr[i] * 2;
    }
  }

  for (let prop in hash) {
    if (+prop === 0) {
      if (hash[prop] > 1) {
        return true;
      }
    } else if (hash[hash[prop]]) {
      return true;
    }
  }

  return false;
};
