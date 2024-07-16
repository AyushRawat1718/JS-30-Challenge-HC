//Task 1
for(let i=1; i<=10; i++) console.log(i);

//Task 2
for(let i=1; i<=10; i++) console.log(`${5} X ${i} = ${5*i}`);

//Task 3
let sum = 0;
let i=1;
while (i < 11){
    sum += i;
    i++;
}
console.log(sum);

//Task 4
let var_1 = 10;
while (var_1 > 0){
    console.log(var_1);
    var_1--;
}

//Task 5
let var_2 = 1;
do{
console.log(var_2);
    var_2++;
}while(var_2 < 6);

//Task 6
let num = 3;
const temp = num;
let fact = 1;
do{
    if (num <= 0) continue;
    fact = fact*num;
    num--;
}while(num > 0);
console.log(`Factorial of ${temp} is ${fact}`)

//Task 7
for (let i=1; i<=5; i++){
    let row = "";
    for (let j=1; j<=i;  j++){
        row += "*";
    }
    console.log(row);
}

//Task 8
for (let i=1; i<=10; i++){
    if (i==5){
        console.log(`Skipped ${i}`);
        continue;
    } 
    console.log(i);
}

//Task 9
for (let i=1; i<=10; i++){
    if (i==7){
        console.log(`${i} detected`);
        break;
    }
    console.log(i);
}