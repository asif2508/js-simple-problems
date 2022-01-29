//inches to feet
function InchesTOFeet(inches){
    let feet = inches/12;
    return inches +" inches = "+feet+" feet.";
}
//miles to kilometres
function milesToKilo(miles){
    let kilo = miles * 1.609;
    kilo = kilo.toFixed(2);
    return miles + " miles = "+kilo+" kilometres.";
}

//even and odd number
function evenAndOdd(number){
    if(number % 2 == 0){
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

//leapyear
function isLeapYear(year){
    if(year % 400 == 0 && year % 100 == 0){
        console.log(year +" is a leap-year");
    }
    else if(year % 4 == 0 && year % 100 != 0){
        console.log(year +" is a leap-year.");
    }
    else{
        console.log(year + " is not a leap-year.")
    }
}

//factorial using for loop
function Factorial(number){
    let newnumber = number;
    for(let i = 1; i < number; i++){
        newnumber = newnumber * i;
        console.log(newnumber);
    }
}
//factorial using while loop
function factorialWhile(number){
    let i = number;
    let newnumber  = 1;
    while(i > 0){
        newnumber *= i;
        i--;
    }
    console.log(newnumber);
}

factorialWhile(10);