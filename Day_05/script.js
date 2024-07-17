const num1 = 8;
const num2 = 45;


//Task 1
const func_1 = function(num){
    if (num%2==0) console.log(`${num} is even`);
    else console.log(`${num} is odd`);
}
func_1(num1);

//Task 2
const func_2 = function(num){
    return num*num;
}
console.log(`Square of ${num1} is ${func_2(num1)}`)

//Task 3
const func_3 = function(a, b){
    if (a > b) console.log(`${a} is greater than ${b}`);
    else if (a < b) console.log(`${a} is smaller than ${b}`);
    else console.log(`${a} and ${b} both are equal`);
}
func_3(num1,num2);

//Task 4
const func_4 = function(str_1, str_2){
    let str = `${str_1}${str_2}`
    return str;
}
const str_1 = "Ayush"
const str_2 = "Rawat"
console.log(func_4(str_1, str_2))

//Task 5
const func_5 = (num1, num2) => (num1 + num2)
console.log(`Sum of ${num1} and ${num2} is ${func_5(num1, num2)}`);

//Task 6
const func_6 = (str, char) =>{
    for (const i of str) {
        if (i === char) return true;
    }
    return false;
}
const str = "Impossible";
const char = "M";
console.log(`Does ${str} contains ${char} => ${func_6(str, char)}`);

// Task 7
const func_7 = (num1, num2 = 8) => (num1 * num2);

console.log(`Product of ${num1} and ${num2} is ${func_7(num1, num2)}`);
console.log(`Product of ${num1} and default value is ${func_7(num1)}`);

//Task 8
const func_8 = (name, age = 18) => (`Hey ${name} welcome to the platform. According to the database your age is ${age}`);

console.log(func_8("Ayush"));
console.log(func_8("Ayush", 21));

//Task 9
const helper_func_1 = () =>{
    console.log('Helper Function Called !!');
}

const func_9 = (func,num) => {
    for(let i=0; i<num; i++) func()
}

func_9(helper_func_1,5)

//Task 10
const helper_func_2 = (num) =>{
    console.log(`Helper Function 2 Called`);
    return (num+5);
}
const helper_func_3 = (num) => {
    console.log(`Helper Function 3 Called`);
    return (num*3);
}

const func_10 = (func1, func2, val) => {
    let temp = func1(val)
    return func2(temp)
}

console.log(`Final Output => ${func_10(helper_func_2, helper_func_3, 4)}`);
