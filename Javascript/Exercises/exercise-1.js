/* Write a function to render the following pattern in the console:
 * * * * *
 * * * *
 * * *
 * *
 *
 The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.
*/

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let asterisks = "";
    for (let j = i; j < n; j++) {
      asterisks += "*";
    }
    console.log(asterisks);
  }
};
pattern(5);
