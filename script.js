const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5];
// 1 2 3  2 2 3 4 4 5 5

// const removeDuplicates = (arr) => {
//   let temp = [];
//   console.log("array is", arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (temp.length != 0 && temp[temp.length - 1] != arr[i]) {
//       temp.push(arr[i]);
//     } else if (temp.length == 0) {
//       temp.push(arr[i]);
//     }
//   }

//   return temp;
// };

const removeDuplicates = (arr) => {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[index] != arr[i]) {
      index++;
      arr[index] = arr[i];
    }
  }
  //arr.length = index + 1;
  return arr;
};

console.log("After Removing Duplicates", removeDuplicates(arr));
