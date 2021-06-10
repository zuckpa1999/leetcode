// Check if Word Equals Summation of Two Words
// 31 min


/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {

    // start at 10.10 pm
    // a --> 0 ? how
    // 1. convert alphabets into numbers (string)
      // what's a good way to do this?
        //  [char].charCodeAt(0) - 97
    // 2. remove ) on the left most side
    // 3, str --> num
    // 4. check if first + second = target


    let new_firstWord
    let new_secondWord
    let new_targetWord

    // firstword
    let numbers = []
    for(let char of firstWord){
        console.log(char.charCodeAt(0) - 97)
        // how do I attach numbers
         numbers.push(char.charCodeAt(0) - 97)
    }
     new_firstWord  = +numbers.join("")
      console.log(new_firstWord)


    // secondword
    numbers = []
    for(let char of secondWord){
        console.log(char.charCodeAt(0) - 97)
        // how do I attach numbers
         numbers.push(char.charCodeAt(0) - 97)
    }
     new_secondWord  = +numbers.join("")
     console.log(new_secondWord)


      // thirdword
    numbers = []
    for(let char of targetWord){
        console.log(char.charCodeAt(0) - 97)
        // how do I attach numbers
         numbers.push(char.charCodeAt(0) - 97)
    }
     new_targetWord  = +numbers.join("")
     console.log(new_targetWord)

    return new_firstWord+ new_secondWord === new_targetWord? true: false

};
