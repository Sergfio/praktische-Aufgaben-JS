function popShift(arr){
    arr  = [3,1,2,3,];
    let popped = arr.pop(); // entfernt pop() ein Element vom Ende eines Arrays
    let shifted = arr.shift(); // shift() ein Element vom Anfang entfernt
    return [shifted, popped];
}

console.log(arr[arr.length]);