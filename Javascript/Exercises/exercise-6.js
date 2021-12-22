/* 
Write a program to normalize a given input to get the expected output.
*/
var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

function normalize(input) {
  let output = {};

  Object.keys(input).forEach((element) => {
    output[element] = input[element];

    function addingChildrenToOutput(childrenArray) {
      childrenArray.forEach((child) => {
        output[child.id] = child;

        if (child.children) {
          addingChildrenToOutput(child.children);
        }
      });
    }

    addingChildrenToOutput(input[element].children);
  });

  Object.keys(output).forEach((element) => {
    if (output[element].children)
      output[element].children = childrenArray(output[element].children);
  });

  return output;
}

function childrenArray(input) {
  return input.map((element) => element.id);
}

normalizedOutput = normalize(input);
console.log(normalizedOutput);
