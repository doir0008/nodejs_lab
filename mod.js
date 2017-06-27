// test

module.exports = {
    stringToUpperCase: function( inputString ){
        console.log(inputString.toUpperCase());
    },
    sortArray: function( inputArray ){
        var sortedArray = inputArray.sort(function(a, b) {return a - b;});
        for(var i=0; i<sortedArray.length; i++){
            console.log(sortedArray[i]);
        }
    },
    reverseArray: function( inputArray ){
        var sortedArray = inputArray.sort();
        sortedArray.reverse();
        for(var i=0; i<sortedArray.length; i++){
            console.log(sortedArray[i]);
        }
    }
}