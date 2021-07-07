'use strict';

function likes(nameArray) {
  // Posible cases
  // 1. Check [empty] - [no one likes this]
  // 2. check [1 like] - [... likes this]
  // 3. check [2 like] - [... and ... likes this]
  // 4. check [3 like] - [..., ... and ... likes this]
  // 5. check [more than 3] - [..., ... and 99 others like this]

  // Sub-problems
  // 1. counting number items in array
  // 2. check condition with number items
  // 3. display text

  if (nameArray.length === 0) {
    console.log(`no one likes this`);
  } else if (nameArray.length === 1) {
    console.log(`${nameArray[0]} likes this`);
  } else if (nameArray.length === 2) {
    console.log(`${nameArray[0]} and ${nameArray[1]} like this`);
  } else if (nameArray.length === 3) {
    console.log(
      `${nameArray[0]}, ${nameArray[1]} and ${nameArray[2]} like this`
    );
  } else {
    console.log(
      // count the left items to display 'number others'
      `${nameArray[0]}, ${nameArray[1]} and ${
        nameArray.length - 2
      } others like this`
    );
  }
}
// Test-display
likes([]);
likes(['Michael']);
