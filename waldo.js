/* 20171005 DM - LHL w1d4

  This js file searches an array for Waldo and displays the index.
*/
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //Use forEach to loop through array, searching for waldo.
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(indexFound) {
  console.log("Found Waldo at index " + indexFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);