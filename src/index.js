module.exports = function reverse (n) {
    if(n < 0) return reverse(n*(-1));

    strNumber = n.toString()
    strNumberArray = strNumber.split("");
    strNumberArray.reverse(); 
    result = strNumberArray.join(""); 
    return Number(result);
}
