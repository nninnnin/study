//function* .. 제네레이터함수는 또 뭔가?

//ES6에서 도입된 제너레이터는 함수 블록을 한번에 실행하지 않고, 실행을 일시중지했다가 필요한 시점에 다시 시작할 수 있는 함수이다.

//제너레이터는 함수이지만 일반 함수와는 다른 독특한 동작을 하는 함수이다.

//함수를 호출하면 함수 블록이 실행되지만, 제너레이터는 제너레이터 객체를 반환한다. 이 제너레이터 객체는 순회가능한(iterable)값이다. 즉, 제너레이터는 순회가능한(iterable)값을 생성하는(generate)함수이다.

//제너레이터는 이터러블의 구현과 비동기 함수의 호출 차단 등에 유용하다.

//제너레이터 함수의 생성
//제너레이터함수는 function* 키워드로 선언한다. 그리고 하나 이상의 yield 구문을 포함한다.

//제너레이터 함수 선언 : 함수 선언식
function* genFunc(){
    var index=0;
    while(index<3){
        yield index++;
    }
}

//제너레이터 함수는 일반함수와 같이 함수선언식, 함수표현식, 메소드로 선언할 수 있다.

const genFunc2 = function*(){
    //함수선언식
}

const obj = {
    *generatorMethod(){
        //제너레이터메소드
    }
}

class MyClass{
    *generatorClassMethod(){
        //제너레이터 클래스메소드
    }
}

//제너레이터 함수의 호출
//제너레이터 함수를 호출하면 함수 블록이 실행되는 것이 아니라, 제너레이터 객체를 반환한다.

//제너레이터 함수 선언
function* foo2(){
    yield 1;//return 대신 yield를 쓰고
    yield 2;
    yield 3;
}

//호출. 제너레이터 객체를 생성하고 반환한다.
const generatorr = foo2();
console.log(generatorr);

for (const val of generatorr){
    console.log(val);
}

//제너레이터 함수의 함수 블록을 실행하려면 제너레이터 함수가 생성한 제너레이터 객체의 next메소드를 호출한다.

//yield구문은 next메소드를 일시중지시킨다. return처럼 값을 반환할 수 없다.

//next메소드가 처음으로 호출되면 yield이전까지 실행하고 실행을 일시중지한다. next메소드가 호출되면 일시중지된 코드를 다시 실행하고, yield를 만나면 또 다시 실행을 일시 중지한다.


// next()=>yield->next()=>yield



//이러한 흐름은 return을 만나거나 또는 함수의 마지막 라인까지 실행하여 해당 함수가 종료할 때 까지 진행된다. 제너레이터 함수로 제너레이터 객체를 생성하여보자.


function* genFunc3(){
    console.log('제너레이터함수 시작');//next
    yield 1;//yield(일시중지), 다시 next
    console.log('제너레이터 함수 재시작');
    yield 2;//yield(일시중지), 다시 next로 재시작
    console.log('제너레이터 함수 종료');
}

//제너레이터 함수를 호출하면 제너레이터 객체를 생성하고 반환한다.
const generator3 = genFunc3();

console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());


//제너레이터 객체는 기본적으로 next메소드를 가지고있다.
//이는 제너레이터 객체가 이터레이터인 것을 의미한다!
//이터레이터의 next메소드는 value, done프로퍼티를 갖는 객체를 반환한다.
//value 프로퍼티는 yield구문이 반환한 값이고 done 프로퍼티는 제너레이터 함수 내의 모든 yield 구문이 실행되었는지를 나타내는 boolean 타입의 값이다.

//이터레이터의 next메소드와 다르게 제너레이터 객체의 enxt메소드는 인자를 받을수도 있다!

function* foo3(n){
 const x = yield n;
 const y = yield(x+1);
 const z = yield(y+1);

 return x+y+z;
}

const iterator3 = foo3(1);//제너레이터 함수를 호출해서 객체를 만들고 할당

console.log(iterator3.next());
console.log(iterator3.next(10));
console.log(iterator3.next(20));
console.log(iterator3.next(30));

//!!!!!!이때 yield는 대입문 변수에 값을 할당하지 않고, next메소드의 인자가 대입문 변수에 할당된다.

//이터러블의 구현

//제너레이터 함수를 호출하면 함수 블록이 실행되는 것이 아니라, 제너레이터 객체를 반환한다. 이 제너레이터 객체는 for-of 루프로 순회할 수 있으며 next메소드를 가지고 있다. 즉, 제너레이터 객체는 iterable임과 동시에 iterator이다.(뭔소리여~)


function* foo4(){
    let index=0;
    while(index<3){
        yield index++;
    }//아마 각각의 next마다 0,1,2,의 index를 yield하겠구나
}

//제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.

const generator4 = foo4();

//제너레이터 객체는 next메소드를 갖는 이터레이터이다.

console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());

for(const val of foo4()){//제너레이터 객체는 순회가능한 이터러블이다.
    console.log(val);
}

//제너레이터는 이터레이터이므로 제너레이터를 활용하여 커스텀 이터러블 객체를 생성할 수 있다.

//이터레이션 프로토콜을 사용하여 피보나치 수열을 구현한 간단한 이터러블 객체를 만들어보자.


const fibonacci = {
    [Symbol.iterator](){
        let [prev, curr]=[0,1];
        let step = 0;
        const maxStep = 10;
        return {
            next(){
                [prev, curr] = [curr, prev + curr];
                return {value: curr, done: step++ >=maxStep};
            }
        };
    }
};

for(const num of fibonacci){
    console.log(num);
}

//위와 같이 이터레이터를 생성하려면 이터레이션 프로토콜을 준수해야 한다. 즉, Symbol.iterator를 프로퍼티키로 사용한 메소드를 구현하여 이터러블 객체를 만들고 Symbol.iterator를 프로퍼티 키로 사용한 메소드가 value, done 프로퍼티를 갖는 객체를 반환하는 next메소드를 갖는 객체를 반환해야 한다.

//이러한 이터레이션 프로토콜을 보다 간결하게 처리하기 위해 제너레이터를 활용할 수 있다. 제너레이터를 활용하여 피보나치 수열을 구현한 이터러블 객체를 만들어보자.

//....하다가 이터레이션 프로토콜이 이해가 안되어서 일단 중단