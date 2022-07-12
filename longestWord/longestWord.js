function findLongestWordLength(str){
   let strSplitted = str.split(" ");
   let wordLength = 0;
    strSplitted.forEach((word) => {
        const wordSplitted = word.split("");
        if(wordSplitted.length > wordLength){
            wordLength = wordSplitted.length;
        }
    });
    return wordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));