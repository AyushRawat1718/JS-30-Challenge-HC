let num_1 = 15;
let num_2 = 4;

//Task 1
const data_1 = [
    {"Operation" : "Addition", "Result" : `${num_1} + ${num_2} = ${num_1 + num_2}`},
    {"Operation" : "Subtraction", "Result" : `${num_1} - ${num_2} = ${num_1 - num_2}`},
    {"Operation" : "Multiplication", "Result" : `${num_1} X ${num_2} = ${num_1 * num_2}`},
    {"Operation" : "Division", "Result" : `${num_1} / ${num_2} = ${num_1 / num_2}`},
    {"Operation" : "Modulo Division", "Result" : `${num_1} % ${num_2} = ${num_1 % num_2}`}
]

console.table(data_1)

//Task 2
num_1 += 5; // num_1 = num_1 + 5
num_2 -= 2; // num_2 = num_2 - 2
console.log(num_1) 
console.log(num_2) 

//Task 3
console.log(`Is ${num_1} > ${num_2} => ${num_1 > num_2}`)
console.log(`Is ${num_1} < ${num_2} => ${num_1 < num_2}`)
console.log(`Is ${num_1} >= ${num_2} => ${num_1 >= num_2}`)
console.log(`Is ${num_1} <= ${num_2} => ${num_1 <= num_2}`)

//Task 4
let var_1 = 4 //Number
let var_2 = "4" //String

console.log(`Is ${var_1} == ${var_2} => ${var_1 == var_2}`)
console.log(`Is ${var_1} === ${var_2} => ${var_1 === var_2}`)

//Task 5
let condition_1 = true
let condition_2 = false

if (condition_1 && condition_2) console.log(`Check - 1`)
else console.log(`Check - 2`)

if (condition_1 || condition_2) console.log(`Check - 3`)
else console.log(`Check - 4`)

if (!condition_2) console.log(`Check - 5`)
else console.log(`Check - 6`)

//Task 6
const num_3 = -4
const result = (num_3 > 0) ? "Positive" : "Negative"
console.log(`Number : ${num_3} is ${result}`);