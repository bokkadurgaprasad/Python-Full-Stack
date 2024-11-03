var firstname = prompt("Enter your First Name: ")
var lastname = prompt("Enter your Last Name: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petname = prompt("What is your pet name? ")
alert("Thank you so much for the information!")



// Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// Name Condition
if(firstname[0] === lastname[0]){
    nameCond = true;
}else{
    nameCond = false;
}

// Age Condition
if(age>20 && age<30){
    ageCond = true;
}else{
    ageCond = false;
}

// Height Condition
if(height >= 170 ){
    heightCond = true
}else{
    heightCond = false
}

// Pet Name Condition
if(petname[petname.length-1] === "y"){
    petCond = true;
}else{
    petCond = false;
}

// Checking All Conditions
if(nameCond && ageCond && heightCond && petCond){
    console.log("WELCOME SPY!")
}else{
    console.log("Nothing to see here")
}