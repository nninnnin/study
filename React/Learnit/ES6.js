const before = [1,2,3,4,5];
const after = before.map(function(item){
  return item * 2;
});

console.log(after);


const hello = () => "howdy!"; //이렇게하면 return도 안쓸수있다.




const hello = () => console.log("howdy!"); //이렇게하면 return도 안쓸수있다.

hello();

class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

const dog = new Animal('냥수닝','고양이');

console.log(dog.name);
console.log(dog.type);

//클래스 -> 객체지향
//함수형 컴포넌트

//고런차이..?

//상속이 가능합니다~~~~~~~ extends를 사용
class Dog extends Animal{
    constructor(name){
        super(name);
        this.type='개';
    }
}

const walwal = new Dog('왈왈');

console.log(walwal.name);
console.log(walwal.type);

//es6에서는 자바처럼 class 작성이 가능하다. 상속도!



//전개연산자
const study = {
    name: '리액트',
    loc: '압구정',
    time: '3시'
};

// const name = study.name;
// 위와같이 하나하나 빼오는게 아니라 한번에 객체의 모든(혹은 선택적으로)propert들을 빼올수있다
const {name, loc, time} = study;

console.log(name, loc, time);


//array도 전개연산자로..rest!!!
const numbers = [1,2,3,4,5];

const [a,b, ...rest] =  numbers;

console.log(a,b,rest);

//객체의 속성과 값이 같을때 간단하게 표현할수 있다

const name1 = '리액트';
const time1 = '3시';


// const study = {
//     name: name,
//     time: time,
// }

const study1 = {
    name1,
    time1,
}

console.log(study1);