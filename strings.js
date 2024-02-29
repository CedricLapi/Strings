


function removeBlanks(str){

    var array = str.split(" ")
    var string = array.join("");  

    return string;
}

var strin = " coding is fun ! ";
console.log(removeBlanks(strin));

var stron = " c o d i n g  i s f u n  !";
console.log(removeBlanks(stron));
