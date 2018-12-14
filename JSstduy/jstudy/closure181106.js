function outer(){
    var title = 'coding everyday';
    return function(){
        console.log(title);
    }
}
inner = outer(); //inner = function(){console.log(title);}
//title은 분명 저 함수 안에 없는데, 어떻게 title을 출력하는가?
//outer에 접근이 가능하다고.
inner();

//클로저란 내부함수가 외부함수의 지역변수에 접근할 수 있고,
//외부함수는, 외부함수의 지역변수를 사용하는 내부함수가 소멸할 때 까지 소멸되지 않는-특성
//을 의미한다..

function factory_movie(title){
    return{
        get_title:function(){
            return title;
        },
        set_title:function(_title){
            if(typeof _title==='String'){
            title = _title;}
            else{
                console.log('제목은 문자열이어야 합니다');
            }
        }
    }
}//두개의 메소드를 가진 객체를 return하는 함수이다.
//인자(매개변수,파라미터)로 들어간 title을 일단 가지고있겠지?

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');

console.log(ghost.get_title());

//위의 예제를 통해서 알 수 있는 것들을 정리해보자

//1. 클로저는 객체의 메소드에서도 사용할 수 있다. 위의 예제는 함수의 리턴값으로 객체를 반환하고 있다. 이 객체는 메소드 get_title과 set_title을 가지고 있다. 이 메소드들은 외부함수인 factory_movie의 인자값으로 전달된 지역변수 title을 사용하고 있다.
//2. 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유한다.34행에서 실행된 set_title은 외부함수 factory_movie의 지역변수 title의 값을 '공각기동대' 로 변경했다. 36행에서 ghost.get_title(); 의 값이 '공각기동대'인 것은 set_title과 get_title함수가 title의 값을 공유하고 있다는 의미이다.
//3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title 결과는 서로 각각 다르다. 그것은 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.
//4. factory_movie의 지역변수 title은 17행에서 정의된 객체의 메소드에서만 접근할 수 있는 값이다. 이 말은 title의 값을 읽고 수정할 수 있는 것은 factory_movie 메소드를 통해서 만들어진 객체 뿐이라는 의미다. JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게 된다.


//다른 예제를 보자.
console.log('어려운예제..')

var arr = [];
for(var i=0;i<5;i++){
    arr[i]=function(){
        return i;
    }
}

for(var index in arr){
    console.log(arr[index]());
}

//함수가 함수 외부의 컨텍스트에 접근할 수 있을 것으로 기대하겠지만..
//(그니까 결국 실행되는 시점에서는 i가 다 5다.)
//위의 코드는 아래와 같이 변경해야 한다.
console.log('변경된 코드..')

var arr=[];
for(var i=0;i<5;i++){
    arr[i]=function(id){
        return function(){
            return id;
        }
    }(i);
}

for(var index in arr){
    console.log(arr[index]());
}