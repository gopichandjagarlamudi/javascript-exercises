const reverseString = function(word) {
    var splitString = word.split(""); 
    
    var reverseArray = splitString.reverse(); 
 
    
    var joinArray = reverseArray.join(""); 
 
    return joinArray; 
};


module.exports = reverseString;
