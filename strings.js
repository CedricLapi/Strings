
/*
function removeBlanks(str){

    var array = str.split(" ")
    var string = array.join("");  

    return string;
}

var strin = " coding is fun ! ";
console.log(removeBlanks(strin));

var stron = " c o d i n g  i s f u n  !";
console.log(removeBlanks(stron));


*/




function getDigit(str) {

    var array = str.split(""); 

    var result = ""; 


    for (var i = 0; i < array.length; i++) { 

        var char = array[i]; 

        if (!isNaN(parseInt(char))) {

            result += char; 
        }
    }

    return parseInt(result); 
}

var strin = " c1o2d3i4ng is f5un ! ";
console.log(getDigit(strin))

