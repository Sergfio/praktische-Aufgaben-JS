function htmlColorNames(arr) {
    // Only change code below this line

    arr.splice(0, 1,'DarkSalmon');  // Remove first element from array, insert 1
    arr.splice(1, 1,'BlanchedAlmond');
    // Only change code above this line
    return arr;
  }

  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

