//JavaScript에서는 '함수도 객체' 다.

//다시 써보자면,

//JavaScript에서는 '함수'도 '객체' 이다.



//다시말해서 함수도 일종의 값, value이다. 거의 모든 언어가 함수를 가지고 있으나 JavaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.


function a(){}

//위의 예제에서 함수 a는 변수 a에 담겨진 값이다. 또한 함수는 객체의 값으로 포함될 수 있다.

a = {
    b:function(){} //이런애를 메소드라고 한다.
}


//함수는 값이기 때문에 다른 함수의 인자(매개변수, 파라미터)로 전달 될 수도 있다.

function cal(func, num){
    return func(num)
}

function increase(num){
    return num+1
}

function decrease(num){
    return num-1
}

console.log(cal(increase,1));
console.log(cal(decrease,1));



//함수는 함수의 리턴 값으로도 사용할 수 있다.
function calc(mode){
    var funcs = {
        'plus' : function(left,right){return left+right},
        'minus': function(left,right){return left-right}
    }

    return funcs[mode];
}

console.log(calc('plus')(2,1));


console.log('배열의값');
//당연히 배열의 값으로도 사용할 수 있다.
var process = [
    function(input){return input+10;},
    function(input){return input*input;},
    function(input){return input/2;}
];

var input=1;

for(var i=0;i<process.length;i++){ //process.length는 3..그니까 0부터 2까지 돌면 세번도네.
    input=process[i](input);
}
//보통 배열을 sweep?할때는 이런식으로 돌리는건가? i=0부터 i<배열.length i++

// for(i=0;i<array.length;i++){expr} 

console.log(input);

//array[index]
//array[index]
//array[index]



//콜백
console.log('콜백');
//처리의 위임
//값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수를 전달할 수 있다.
//값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.

//아래의 예제에서 (값)인자로 전달된 함수 sortNumber의 구현에 따라서, sort의 동작방법이 완전히 바뀌게 된다.


var numbers = [20,10,9,8,7,6,5,4,3,2,1];
var sortfunc = function(a,b){
    console.log(a,b);
    return b-a;
}

console.log(numbers.sort(sortfunc));

//비동기처리
//제이쿼뤼
// $.get( 'http://s!!어쩌구',function(function(result){console.log(result);}){},'json');
//가운데에 있는 두번째 함수가 바로 콜백함수!

//비동기로 첫번째 인자에 들어간 주소에 있는 소스를 가져오게 되고, 이 소스의 로딩이 끝났을 때 두번째 인자로 들어간 콜백함수를 호출함으로서 어떠한 액션을 실행하게 되는게 바로 비동기 처리라고 볼 수 있다.
//아항 이해끝