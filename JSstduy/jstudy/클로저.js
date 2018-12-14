//클로저

//내부함수가 외부함수의 context에 접근할 수 있는 것을 가리킨다.

//내부함수와 외부함수는 무엇인가!

function outer(){
    function inner(){
        var title = 'coding errday';
        console.log(title);
    }
    inner();
}
outer();

//scope는 함수가 선언되었을 때에 정해지고
//context가 열리는 것은 함수가 호출되었을 때!!
// 1. 호이스팅으로 outer 선언 -> outer scope가 결정됨. 전역임.
// 2. outer호출, 컨텍스트 열리고
// 3. inner 선언. inner스코프 결정. inner 호출. inner 컨텍스트 열림.
// 4. var title이 선언되고, codi-- 할당되고, title 출력.


//이건 당연하고 쉽다. 아래를 보자.


function outer(){
    var title = 'coding errday'
    function inner(){
        console.log(title);
    }
    inner();
}
outer();

//먼저 outer 선언되고, 호출된다.(스코프 결정, 컨텍스트 열림)
//outer의 지역변수 title 선언되고, inner()선언되고,(스코프결정) inner를 호출한다.
//inner는 title을 출력해야 하는데, inner는 자신의 스코프안에 title이라는 변수를 눈씻고 찾아봐도 찾을수가 없다.
//그래서 inner는 바깥 컨텍스트에 접근한다. inner가 실행되기 전의 상위 컨텍스트는 바로 outer컨텍스트이고, 이 outer컨텍스트가 가진 스코프에서는 title이라는 변수를 찾을 수 있다. 이제 inner는 title을 출력할 수 있다. 고마워 outer!