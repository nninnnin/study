//불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고,
var MYAPP = {}

//객체의 속성으로 변수를 관리하는 방법을 사용한다.
MYAPP.calculator ={
    'left' : null,
    'right' :null
}

MYAPP.coordinate ={
    'left':null,
    'right':null
}


MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

console.log(sum());


//전역변수를 사용하고 싶지 않다면 아래와 같이 익명함수를 호출함으로서 이러한 목적을 달성할 수 있다.

(function(){
    var MYAPP = {}
    MYAPP.calculator={
        'left':null,
        'right':null
    }
    MYAPP.coordinate={
        'left':null,
        'right':null
    }
    MYAPP.calculator.left=10;
    MYAPP.calculator.right=20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
})

//그러니까 말하자면 그냥 다 함수로 감싸버리는거다........그게 전부다.
//그러니까, 다시한번 말하자면 그냥 함수로 다! 싹 다 감싸버리는거다.
//그러면 전역변수는 더이상 전역변수가 아니게 된다. 해당 (익명)함수 안에 있는 지역변수가 되어버린다.