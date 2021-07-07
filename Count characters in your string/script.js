'use strict';

function count(string) {
  // ASK
  //1. Does it contain 'space'?
  //2. If 'empty'? return {}
  //3. When return in Object format, do we need object name?
  
  // DIVINE
  //1. Pass string into arguments
  //2. Need going through string
  // 2.1 How to access each elements in string | Can access as an array
  //3. Need a counter can return 'name of character'
  // 3.1 First meet: 0 → 1
  // 3.1.1 Check whether character appeared, create property, set to 1 so that can increase ++
  // 3.2 Others time meet: increase
  //4. Need a counter can return 'number of that'
  //5. Display in Object format '{a:2, b:1}'
  // 5.1 Need a object to create key:value to display
  
  const displayObject = {};
  for (let i = 0; i < string.length; i++) {
    if (!displayObject.hasOwnProperty(string[i])) {
      displayObject[string[i]] = 1;
    } else displayObject[string[i]]++;
  }
  return displayObject;
}
