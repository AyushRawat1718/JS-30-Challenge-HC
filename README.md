## JS-30-Challenge-HC 
This repository tracks the challenges posted by Hitesh Chaudhary for their [30-day JavaScript challenge](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkpDb0R1SGV6OUQxeEZVS3NhVFRCYWJnWFZvQXxBQ3Jtc0trYWdYVWpYS2RCR3ZyemRnNGVWaFNsSjVTdXlSU0J4SjRqcTZLYTJmbkVRblczcF83QVI5a3hzSFBBdzNWM1JBQjNHbDRVN25zbUF4MW1INEM2a2NvdUl2ZnZITzZ1eU1lS2duRk1NeHBRdWJJNndpRQ&q=https%3A%2F%2Fcourses.chaicode.com%2Flearn%2F30-days-of-Javascript-challenge&v=GskMI5TqfBw).

## Day - 01 : `Variable and Data Types`

* Use `const` only when we want to prevent the data from modification.

* In other cases prefer to use `let` and `var`.

* Among `let` and `var` prefer `let`, as `var`have some issues related to scoping. Use `var` only when you have to support old version of browsers.

* `typeof()` operator is useful for knowing the type of the variable.

* We can console log the data in the tabular format using `console.table()`

## Day - 02 : `Operators`

* JavaScript provides two comparison operators, `==` and `===`, to check for equality between values. The `==` operator performs `loose equality`, meaning it attempts to convert values to a common type before comparing them. This can lead to unexpected results. For instance, `2 == "2"` would evaluate to `true` as the string `"2"` is converted to the number `2` for comparison. On the other hand, the `===` operator performs `strict equality`, comparing both value and data type without any conversions. Therefore, `2 === "2"` would result in `false` as they have different types. It's recommended to use the `===` operator for most comparisons to avoid potential pitfalls and ensure reliable outcomes.

* The `ternary operator`, is a shorthand way to write an `if...else` statement in JavaScript. The ternary operator is often used to assign values to variables based on conditions or to return values from functions. It can make your code more concise and readable in certain situations.

    - Syntax of ternary operator => `condition ? expressionIfTrue : expressionIfFalse`

    ```javascript
    const num_3 = -4;
    const result = (num_3 > 0) ? "Positive" : "Negative";
    console.log(`Number : ${num_3} is ${result}`);
    ```

## Day - 03 : `Control Structres`

* In switch case, when we have to check various conditions we can do this way
    
    Ex: Write a program that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on a score.

    ```javascript
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
    ```

* A year is a Leap Year when either it is divisble by 400 or divisible by 4 but not divisible by 100, else it is a non-Leap Year

    ```javascript
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 !=0))){
        console.log(`Leap Year`);
    }
    else {
        console.log(`Non-Leap Year`);
    }
    ```