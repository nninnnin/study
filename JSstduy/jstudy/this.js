//this는 함수 내에서 함수 호출 맥락(context)를 의미한다.

 //함수에서의 this의 의미

 function func(){
     if(global===this){
         console.log('right!');
     }
 }

 func();

 //메소드의 호출

 var obj={
     func:function(){
         if(obj===this){
             console.log('obj equals to "this"')
         }
     }
 }

 obj.func();

 //생성자의 호출
 //아래 코드는 함수를 호출했을 때와 new를 이용해서 생성자를 호출했을 때의 차이를 보여준다.

 var funcThis = null; //funcThis객체를 만들고 null집어넣어줌

 function Func(){
     funcThis = this; //전역변수 funcThis에 현재의 this를 넣어주는 함수
 }

 var o1 = Func(); //자 var 01은 전역변수, 즉 global의 property이기 때문에 여기에서 Func()가 실행되면서 하게 되는 this 바인딩은 바로 전역객체 global (혹은 window)일 것이다.
 if(funcThis===global){//확인해보자.
     console.log('"this" is global object');
 }
 var o2=new Func();//이처럼 함수를 생성자로 실행시키면 새로운 객체를 만드는 생성자 역할을 하기 때문에 호출되면서 this바인딩을 새로운 객체로 하게 된다.
 if(funcThis===o2){
     console.log('"this" is o2');
 }


//생성자는 빈 객체를 만든다. 그리고 이 객체 내에서 this는 만들어진 객체를 가리킨다.
//이것은 매우 중요한 사실이다. 왜냐하면 생성자가 실행되기 전까지는, 객체는 변수에도 할당 될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업도 할 수 없기 때문이다.

function Funcc(){
    console.log(o);
}

var o = new Funcc();//Func에 new를 붙여 생성자로서 실행했기 때문에 새로운 객체를 만들 것이고, 그것을 o라는 객체에 할당하는 것이다.

//근데 먼저 Funcc를 선언했고, new Funcc();로서 Funcc()를 생성자로서 호출하는데, 이는 o라는 변수를 출력하는 함수이다. 아직 o라는 변수는 '선언'만 되었을 뿐, (변수 호이스팅에 의해) Funcc의 실행이 끝나서 o로 할당되지 않았기 때문에, undefined가 출력되는 것이다!


//마지막으로 함수(function객체)의 메소드인 apply와 call을 이용하면 this의 값을 제어할 수 있다.

var o={}
var p={}

function func2(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('global');
            break;
    }
}

func2();
func2.apply(o);
func2.apply(p);