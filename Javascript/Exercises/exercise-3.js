// EXERCISE 3

// Write a function that searches for an object by a specific key value in an array of objects:

var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

const SearchByName = (items, search_name) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name.toLowerCase() === search_name.toLowerCase()) {
      return items[i];
    }
  }
  return "Items not in the container";
};

console.log(SearchByName(fruits, "banana"));

const SearchByKey = (items, keyname, keyvalue) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i][keyname].toLowerCase() === keyvalue.toLowerCase()) {
      return items[i];
    }
  }
  return "Items not in the container";
};

console.log(SearchByKey(fruits, "name", "banana"));
