//화살표 함수의 선언

()=>{}
x=>{}
(x,y)=>{}

//함수 몸체 지정 방법

x=>{return x*x}
x=> x*x

const a= ()=>{
    const x=10;
    return x*x;
}


//화살표 함수의 호출
//화살표함수는 익명함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.

var pow = function(x){return x*x} //es5

const pow2 = (x)=>{x*x}

//또는 콜백함수로 사용할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하다.

const arr = [1,2,3];
const pow = arr.map(x=>x*x); //map안에 있는게 콜백함수

//this!! function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 'this'이다!!

//1. 일반 함수의 this
//자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다.
//다시말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
//중요한 것은 '***호출할 때***' 결정된다.는 것

//콜백함수 내부의 this는 전역 객체 window를 가리킨다.

function Prefixer(prefix){
    this.prefix = prefix; //지역변수 prefix로 들어온 값을 전역변수 prefix로 넣어주는 함수임을 알 수 있다.
}

Prefixer.prototype.prefixArray = function(arr){ //prototype...뭐야...?
    // (A)
    return arr.map(function(x){
        return this.prefix + '' + x; //(B)
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee','Kim']));
//A지점에서의 this는 생성자 함수 Prefixer가 생성한 객체, 즉 생성자 함수의 인스턴스(여기에서는 pre)이다.
//B지점에서 사용한 this는 아마도 생성자함수 Prefixer가 생성한 객체(위 예제의 경우 pre)일 것으로 기대하였겠지만, 이곳에서 this는 전역 객체 window를 가리킨다. 이는 생성자함수와 객체의 메소드를 제외한 모든 함수(내부함수, 콜백 함수 포함)내부의 this는 전역 객체를 가리키기 때문이다.
//위 설명이 잘 이해되지 않는다면 this를 참조하기 바란다.
//콜백 함수 내부의 this가 메소드를 호출한 객체를 가리키게 하려면 아래의 3가지 방법이 있다.

