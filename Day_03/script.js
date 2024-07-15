//Activity - 1
const num = 5;
if(num > 0) console.log(`Given number is positive`);
else if (num == 0) console.log(`Given number is zero`);
else console.log(`Given number is negative`);

const age = 22;
if (age >= 18) console.log(`Person is eligibe to vote`);
else console.log(`Person is not eligible to vote`);

//Activity - 2
const num_1 = 4
const num_2 = 5
const num_3 = 6

if (num_1 > num_2 ){
    if (num_1 > num_3){
        console.log(`Largest number is ${num_1}`)
    }
    else{
        console.log(`Largest number is ${num_3}`)
    }
}
else{
    if (num_2 > num_3){
        console.log(`Largest number is ${num_2}`)
    }
    else{
        console.log(`Largest number is ${num_3}`)
    }
}

//Activity - 3
const day_num = 6;

switch (day_num) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default:console.log("Invalid input !")
        break;
}

const score = 94;

switch (true) {
    case (score >= 91): console.log("A");
        break;
    case (score >= 81 && score <= 90): console.log("B");
        break;
    case (score >= 71 && score <= 80): console.log("C");
        break;
    case (score >= 61 && score <= 70): console.log("D");
        break;
    case (score <= 60): console.log("F");
        break;
    default:
        break;
}

//Activity - 4
const test_num = 4;
(test_num % 2 == 0) ? console.log(`${test_num} is even`) : console.log(`${test_num} is odd`);

//Activity - 5
const year = 2100
if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 !=0))){
    console.log(`Leap Year`);
}
else {
    console.log(`Non-Leap Year`);
}