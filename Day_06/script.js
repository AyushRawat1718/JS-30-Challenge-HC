//Task 1
const arr = [1,2,3,4,5];
console.log(arr);

//Task 2
console.log(`First element of the array is: ${arr[0]}`);
console.log(`Last element of the array is: ${arr[arr.length-1]}`);

//Task 3
let new_length = arr.push(6)
console.log(`Array after pushing -> ${arr}. New Length of the array is -> ${new_length}`);

//Task 4
const popped_element = arr.pop()
console.log(`Array after popping -> ${arr}. Popped element is -> ${popped_element}`);

//Task 5
const shifted_element = arr.shift()
console.log(`Array after shifting -> ${arr}. Shifted element is ${shifted_element}`);

//Task 6
new_length = arr.unshift(1);
console.log(`Array after unshifting -> ${arr}. New Length of the array is -> ${new_length}`);

//Task 7
const new_arr_1 = arr.map(val => (val*2))
console.log(`Resultant array -> ${new_arr_1}`);

//Task 8
const new_arr_2 = arr.filter((val) => (val%2==0))
console.log(`Resultant array -> ${new_arr_2}`);

//Task 9
const res = arr.reduce((accumulator, currval) => (accumulator + currval), 0)
console.log(`Sum of all the elements of the array ->${res}`);

//Task 10
for (let index = 0; index < arr.length; index++) console.log(`Current value [Using For Loop]-> ${arr[index]}`);

//Task 11
const printFunc = (val) => {
    console.log(`Current Value -> ${val}`);
}

arr.forEach(printFunc)
arr.forEach(elem => console.log(`Current Value [Using ForEach Loop]-> ${elem}`))

//Task 12
const multi_dimensional_arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(multi_dimensional_arr);

//Task 13
console.log(`Element at the 2nd row and 3 column -> ${multi_dimensional_arr[2-1][3-1]}`);

