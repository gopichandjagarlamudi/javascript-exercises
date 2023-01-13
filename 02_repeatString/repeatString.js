const repeatString = function(strin,num) {
    let concatstr="";
    for(let i=0;i<num;i++)
    {
        concatstr=concatstr.concat(strin);
    }
    return concatstr;

};

// Do not edit below this line
module.exports = repeatString;
