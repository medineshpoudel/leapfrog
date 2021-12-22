/* 
Write a program to sort an array of object by a target key. The original array should remain unchanged.
*/
var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];

function sortBy(array, key) {
  return array.slice().sort((x, y) => {
    if (x[key] < y[key]) {
      return -1;
    } else if (x[key] < y[key]) {
      return 1;
    } else {
      return 0;
    }
  });
}

var result = sortBy(arr, "name");

console.log("Sorted", result);
