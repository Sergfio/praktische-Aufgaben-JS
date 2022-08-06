function reverseString(str){
   var splitString = str.split("");
   var reverseString = splitString.reverse();
   var joinArray = reverseString.join("");
   return joinArray;
}

console.log(reverseString("Hallo"));

