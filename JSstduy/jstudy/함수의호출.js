//JavaScript는 함수를 호출하는 특별한 방법을 제공한다.
//자바스크립트에서 함수는 객체, 라고 하였다.

function func(){

}

func();

//위의 예제에서 함수 func는 Function이라는 객체의 인스턴스다.
//따라서 func는 객체 Function이 가지고 있는 메소드들을 상속하고 있다.
//지금 이야기하려는 메소드는 Function.apply와 Function.call이다.
//이 메소드들을 이용해서 함수를 호출해보자.

function sum(arg1,arg2){
    return arg1+arg2
}

console.log(sum.apply(null,[1,2]));

//함수 sum은 Function 객체의 인스턴스다. 그렇기 때문에 객체 Function의 메소드 apply를 호출 할 수 있다. 
//apply 메소드는 두개의 인자를 가질 수 있는데, 첫번째 인자는 함수(sum)가 실행될 맥락(context)이다.
//두번째 인자는 배열인데, 이 배열에 담겨있는 원소가 함수의 인자로 순차적으로 대입된다.
//Function.call은 사용법이 거의 비슷하다.

//맥락(context)의 의미를 알아보는 예제를 보자.

o1 = {val1:1,val2:2,val3:3}
o2 = {v1:10,v2:50,v3:100,v4:25}
function sum(){
    var _sum=0;

    for(name in this){
        if (typeof this[name]!=='function')
            _sum += this[name];
    }

    return _sum;
}
console.log(sum.apply(o1));
console.log(sum.apply(o2));

//우선 두개의 객체를 만들었고,
//o1은 3개의 속성, o2는 4개의 속성. 서로 이름은 다르다.

//다음에 함수 sum. 이 함수는 객체의 속성을 열거할 때 사용하는 for in 문을 이용해서 객체 자신의 값을 열거한 후에,각 속성의 값을 지역변수 _sum에 저장한 후에 이를 리턴하고 있다.

//객체 Function의 메소드 apply의 첫번째 인자는 함수가 실행될 맥락이다.
//sum.apply(o1)은 함수 sum을 객체 o1의 메소드로 만들고 sum을 호출한 후에 sum을 삭제한다.

// o1.sum = sum;
// console.log(o1.sum());
// delete o1.sum();

//sum이 o1소속의 메소드가 된다는 것은..
//함수 sum에서 this의 값이 전역객체가 아니라 o1이 된다는 의미,이다.
//일반적인 객체지향 언어에서는 하나의 객체에 소속된 함수는 그 객체의 소유물이 된다.
//하지만 JavaScript에서 함수는 독립적인 객체로서 존재하고, apply나 call 메소드를 통해서 다른 객체의 소유물인 것처럼 실행할 수 있다,

//만약 apply의 첫번째 인자로 null을 전달하면 apply가 실행된 함수 인스턴스는 전역객체를 맥락으로 실행되게 한다.