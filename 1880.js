/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

 // input - word
 // output - numberic value
var getNumbericValue = function(words) {
      let numbers = []
        for(let char of words){
        // how do I attach numbers
         numbers.push(char.charCodeAt(0) - 97)
    }
        return  +numbers.join("")
}

var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    // start at 10.10 pm
    // a --> 0 ? how  
    // 1. convert alphabets into numbers (string)
      // what's a good way to do this?
        //  [char].charCodeAt(0) - 97
    // 2. remove ) on the left most side
    // 3, str --> num
    // 4. check if first + second = target
    
    let new_firstWord = getNumbericValue(firstWord)
    let new_secondWord = getNumbericValue(secondWord)
    let new_targetWord = getNumbericValue(targetWord)
    
 
    
    return new_firstWord+ new_secondWord === new_targetWord? true: false
    
};
