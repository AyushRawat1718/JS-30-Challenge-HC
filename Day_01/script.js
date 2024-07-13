//Activity - 1
var num = 5;
console.log(num);
let str = "Javascript";
console.log(str);

//Activity - 2
const bool = 4.5;
console.log(bool);

//Activity - 3
let var_1 = 45;
let var_2 = "Python";
let var_3 = 6.9;
let var_4 = {
    id : 45,
    username : "Ayush"
};
let var_5 = [4,5,6,7,9];

const data = [
    { variable: var_1, type: typeof var_1 },
    { variable: var_2, type: typeof var_2 },
    { variable: var_3, type: typeof var_3 },
    { variable: var_4, type: typeof var_4 },
    { variable: var_5, type: typeof var_5 }
  ];
console.table(data)

//Activity - 4
let num_1 = 45;
console.log(`Value before reassignment -> ${num_1}`);
num_1 = 50; //Reassigning a value
console.log(`Value after reassignment -> ${num_1}`);

//Activity - 5
const str_1 = "Ayush"
console.log(str_1)
// str_1 = "Ayush Rawat"; //This is not allowed, We can't reassign a const value.
