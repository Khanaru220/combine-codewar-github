'use strict';

function likes(names) {
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

  //   if (names.length === 0) {
  //     return `no one likes this`;
  //   } else if (names.length === 1) {
  //     return `${names[0]} likes this`;
  //   } else if (names.length === 2) {
  //     return `${names[0]} and ${names[1]} like this`;
  //   } else if (names.length === 3) {
  //     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  //   } else {
  //     // count the left items to display 'number others'
  //     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  //   }
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}
// Test-display
console.log(likes([]));
console.log(likes(['Michael']));
