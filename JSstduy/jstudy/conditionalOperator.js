//삼항연산자라고 한다.

//문법은

//condition ? expressionTrue : expressionFalse

//if else를 대체할 수 있다.

//example 1
let age = 26;
let beverage = (age>=21) ? "Beer" : "Juice";
console.log(beverage);

//example 2

function greeting(person){
    const name = person ? person.name : "stranger";
    return "Howdy," + name;
}

let Alice={ name : 'ALICE'};

console.log(greeting(Alice));
console.log(null);


//Conditional chains
function example(..){
    return condition1 ? value1
            : condition2 ? value2
            : condition3 ? value3
            : value4;
}

