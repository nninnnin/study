//함수에는 'arguments라는 변수'에 담긴 숨겨진 '유사배열'이 있다.
//이 유사배열에는 함수를 호출할 때 입력한 인자가 담겨있다.
//아래 예제를 보자

function sum(){
    var i, _sum=0; //i와 _sum이라는 변수를 0으로 초기화
    for(i=0;i<arguments.length;i++){ //arguments라는 유사배열을 sweep
        console.log(i+':'+arguments[i]); //arguments에 담긴것들을 index별로 출력
        _sum += arguments[i]; //그 value들을 _sum이라는 변수에 더해나감
    }
    return _sum;
}

console.log('result:'+sum(1,2,3,4));


//함수 sum은 인자로 전달된 값을 모두 더해서 리턴하는 함수다.
//그런데 함수 sum은 인자에 대한 정의가 없다.
//하지만 마지막 라인에서는 4개의 인자를 함수 sum으로 전달하고 있다.
//함수의 정의부분에서 인자에 대한 구현이 없음에도 인자를 전달할 수 있는 것은 왜 그럴까?
//그것은 arguments라는 특수한 배열(유사배열)이 있기 때문이다.

//arguments는 함수 안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열이다.
//arguments[0]은 함수로 전달된 첫번째 인자를 의미한다.
//또 arguments.length를 이용해서 함수로 전달된 인자의 갯수를 알아낼 수도 있다.
//이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다.
//그 값을 더해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있다.

//****arguments는, 사실 배열이 아니다. 실제로는 arguments객체의 인스턴스다. (...????)


//매개변수와 관련된 두가지 수가 있다.
//하나는 함수.length, 다른 하나는 arguments.length 이다.
//arguments.length는 함수로 전달된 실제 인자의 수를 의미하고,
//함수.length는 함수에 정의된 인자의 수를 의미한다. 코드를보자!

function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length, //one이라는 함수에 정의된 인자의 갯수
        'arguments',arguments.length //실제로 받아들인 인자의 갯수
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length, //two라는 함수에 정의된 인자의 갯수. 2겠지?
        'arguments', arguments.length //two라는 함수가 실제로! 입력받아 받아들인 인자의갯수
    );
}

zero();
one('val1','val2');
two('val1');