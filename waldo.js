/* 20171005 DM - LHL w1d4

  This js file searches an array for Waldo and displays the index.
*/
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexFound) {
  console.log("Found Waldo at index " + indexFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);