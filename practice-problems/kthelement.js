function solution(inputArray, k) {
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    counter++;
    if (counter % k === 0) {
      inputArray[i] = '';
    }
  }
  return inputArray.filter(value => Number.isInteger(value));
}
