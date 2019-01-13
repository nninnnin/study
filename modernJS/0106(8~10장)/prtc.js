function F(){};
console.log(F.prototype);

F.prototype.prop = 'prototype value';
var obj = new F();
console.log(obj.prop);

obj.prop = 'instance value';
console.log(obj.prop);

F.prototype.prop = 'cannot modified';
console.log(F.prototype.prop);//...?뭐지 수정 불가능하다며



var A=function(){};//생성당시에 x에 관한 내용이 없음
var B = new A();
A.prototype.x = 'hello'
console.log(B);


var A = function(){this.x='hello'};
var B = new A();
console.log(B);


//객체의 프로토타입은 Object.getPrototypeOf 메서드로 가져올 수 있습니다.
function F(){};
var obj = new F();
console.log(Object.getPrototypeOf(obj)); 
console.log(F.prototype); 

//생성자의 prototype프로퍼티는 프로토타입 객체를 가리키며,  -> F.prototype
//이 프로토타입 객체의 constructor 프로퍼티는 다시 생성자를 가리킨다 -> F.prototype.constructor
console.log(F.prototype);
console.log(F.prototype.constructor);


function myConcat(separator){
    var s = "";
    for(var i=1; i<arguments.length; i++){ //두번째 인수부터 돌아야하니까 i=1이고, length보다 하나 작게 돌아야 두번째~끝까지 도니까 <=이 아니라 <가 맞다.
        s+=arguments[i]; //argument의 i번째 인수를 s에 넣어주고
        if(i<arguments.length-1) s+= separator; //첫번째 인수로 받은 seperator "/"를 그 다음에 넣어주는데, 반복을 도는 마지막 인수의 뒤에는 안넣어주어야 하니까 length-1 이라는 조건을 추가해주었다.
    }
    return s;
}
console.log(myConcat("/","apple","orange","peach","donggyu"));


//하노이의 탑

function hanoi(n,from,via,to){
    if(n<1){return;}//n이 1보다 작으면, 즉 0이면 return (recursive break)
    hanoi(n-1,from,to,via);
    console.log(`${n}번째 원반: ${from}->${via}`);
    hanoi(n-1,to,from,via);
}

console.log("------------하노이의탑------------");
hanoi(3,"A","B","C"); //4개의 원반, A,B,C는 막대를 의미

/*
알수있는건 일단 규칙을 알아야 알고리즘을 짠다는 것..
간단하게 3개로 생각을 해보면
from to via로 생각을 해보자. 먼저 우리가 움직여야 할 것은 가장 위에 있는 1번째 원반
우리는 n에 4를 입력했지만 n이 4,3,2,1,0으로 줄어들 때까지 recursive가 작동하여 n이 1일때부터 2,3,4일 때로 차근차근 실행이 될 것이다.

그러니까 recursive를 이렇게 쓸때(n-1로)는 어디까지 내려가서 어디부터 실행하게 되는지를 먼저 잘 생각해야 할 것 같고..

그래서 n=1일 때의 실행을 살펴보면 1번째 원반이 from으로 입력된 "A"에서 via로 입력된 "C"로 이동하게 된다. 


  첫번째 원반을 중간단계인 via로 먼저 보내고, 
*/


function quicksort(x,first,last){
    var p = x[Math.floor((first+last)/2)]; //최대한 중간값을 찾아서 p에 넣고
    for(var i = first, j = last; ; i++,j--){//for문 안에 while문이라니..일단 i와 j값을 받아오겠죠?
        while(x[i]<p) i++; //x[i]가 p보다 작다면 i++하고 (크다면 ++하지 않고 멈추겠죠.)
        while(p<x[j]) j--;//반대로 x[j]가 p보다 크다면 j-- (작다면 --하지 않고 멈추겠죠?) 
        if(i>=j) break;
        var w = x[i]; x[i]=x[j]; x[j]=w;
    }
    console.log(a);
    if(first<i-1) quicksort(x,first,i-1);
    if(j+1<last) quicksort(x,j+1,last);
}
var a = [7,2,5,1,8,9,3]
console.log('---------퀵소트----------');
quicksort(a,0,a.length-1);//배열,first,last
console.log(a);


