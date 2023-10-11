function challengeTwo(arr) {
  let n = arr.length;

  for (let i = 0; i < n -1; i++) {
    for (let j = 0; j < n -i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [63, 23, 53, 33, 18, 45];
console.log(challengeTwo(unsortedArray));
// 출력: [18, 23, 33, 45, 53, 63]