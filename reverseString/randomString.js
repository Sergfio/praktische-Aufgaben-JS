function randomArrayString(){
    const newArr = ['i', 'j', 'k', 'l', 'm', 'n', ];
    let i = Math.floor(Math.random() * newArr.length);
    return newArr[i];
}

console.log(randomArrayString()) ;