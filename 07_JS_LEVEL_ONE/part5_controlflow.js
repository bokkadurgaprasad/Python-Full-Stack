// var hot = false
// var temp = 60

// if(temp > 80){
//     console.log("Hot Outside!");
// }else if(temp <= 80 && temp >= 50){
//     console.log("Average Outside!");
// }else if(temp < 50 && temp>=32){
//     console.log("Its pretty cold out!");
// }else{
//     console.log("It is very cold out!");
// }

var ham = 10;
var cheese = 10;

var report = "blank";

if(ham >= 10 && cheese >= 10){
    report = "Strong Sales of both ham and cheese!"
}else if(ham == 0 && cheese === 0){
    report = "Nothing Sold!"
}else{
    report = "we had some sales of items"
}

console.log(report)