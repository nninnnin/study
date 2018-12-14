//prototype based programming

//객체란 서로 관련된 변수와 함수를 그룹핑한 그릇,이라고 할 수 있다.

//객체 내의 변수를 Property,
//객체 내의 함수를 Method 라고 부른다. 객체를 만들어보자.

var person = {};
person.name = 'egoing';
person.introduce = function(){
    return 'My name is ' + this.name;
}

console.log(person.introduce());

//객체를 정의 할 때 값을 셋팅하도록 코드를 바꿔보자.

var person = {
    name : 'egoing',
    introduce : function(){
        return 'My name is '+this.name;
    }
};

//생성자
//생성자는 영어로 constructor.
//constructor는 객체를 만드는 역할을 하는 함수다.
//자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라,
//객체를 만드는 창조자 라고 할 수 있다.

function Person(){}
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name;
}

//함수를 호출할 때 new를 붙이면 새로운 객체를 만든 후에 이를 리턴한다.
//위의 코드는 새로운 객체를 변수 p에 담았다.
//여러 사람을 위한 객체를 만든다면 아래와 같이 코드를 작성해야 할 것이다.

function Person(){}
var p1 = new Person();
p1.name = 'egoing'
p1.introduce = function(){
    return 'My name is '+this.name;
}

var p2=new Person();
p2.name='리체'
p2.introduce=function(){
    return '내이름은 '+this.name +'야.';
}

//이제 모듈화?시켜보자
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name;
    }
}

var p1 = new Person('donggyu'); //함수에 new를 붙여서 객체를 만들 수 있다!!!
var p2 = new Person('jongmin');

//생성자(함수)내에서 이 객체의 프로퍼티를 정의하고 있다.
//이러한 작업을 '초기화' 라고 한다.
//이를 통해서 코드의 재사용성이 대폭 높아졌다.
//코드를 통해 할 수 있듯이 생성자함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시한다.

//이런식이다.
//자바스크립트 생성자의 특징 -----
// 일반적인 객체지향 언어에서 생성자는 클래스의 소속이다. 
// 하지만 자바스크립트에서 객체를 만드는 주체는 '함수'다. !!!!!!!! 
// 함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은 자바스크립트에서 함수의 위상을 암시하는 단서이면서 또 자바스크립트가 추구하는 자유로움을 보여주는 ㅈ사례라고 할 수 있다.