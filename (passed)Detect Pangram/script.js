'use strict';

function isPangram(string) {
  console.log(string)
  // ASK
  // 1. Return True/false
  // 2. Ignores Number,punctuation, space
  // 3. Ignore case
  // 4. How to check is pangram? Count diff letter === 27
  // DIVINE
  // 1. Pass string into parameter
  // 2. Lower case all string
  // 3. Delete space
  // 4. Delete number
  // 5. Delete punctuation
  // 6. Condition if letter not include, add new one
  // 7. Create a array to store new letter, and use length compare with 26
  string = string.toLowerCase();
  const letterArray = [];
  for (let i = 0; i < string.length; i++) {
    if (
      typeof string[i] !== 'number' &&
      string[i] !== '.' &&
      string[i] !== ' ' &&
      !letterArray.includes(string[i])
    ) {
      letterArray.push(string[i]);
    } else continue;
  }
  return letterArray.length > 25;
}
