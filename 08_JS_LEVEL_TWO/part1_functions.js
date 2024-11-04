function timesFive(numInput=1){
    var result = numInput * 5
    return result
}

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v);
    stuff = " new stuff"
    console.log(stuff);
}

fun();
console.log(stuff);
