const removeFromArray = function (arr, ...args) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == args) {
        arr.splice(i, 1);
    }
  }
  return arr;
};
// let arr = [1, 2,"ho", 3, 4];
// let remove = "ho";
console.log(removeFromArray(arr, remove));

// Do not edit below this line
module.exports = removeFromArray;
