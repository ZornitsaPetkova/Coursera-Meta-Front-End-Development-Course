var age = 10;
if(age >= 65) {
    console.log("You get your income from your pension");
} else if (age >=18 && age < 65 ) {
    console.log("Each month you get a salary");
} else if (age <18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}


var day = "Sunday";
switch(day) {
    case "Monday" :
        console.log("Go bowling");
        break;
    case "Tuesday" :
        console.log("Go swimming");
        break;
    case "Wednessday" :
        console.log("Stay at home");
        break;
    case "Thursday" : 
        console.log("Read a book");
        break;
    case "Friday" :
        console.log("Play board games");
        break;
    case "Saturday" :
        console.log("Go to a restaurant");
        break;
    case "Sunday":
        console.log("Watch a movie");
        break;
    default:
        console.log("There is no such day");
        break;
}