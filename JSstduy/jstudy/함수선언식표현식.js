//함수 표현식으로 클로져 생성하기
//클로져는 함수를 실행하기 전에 해당 함수에 변수를 넘기고 싶을 때 사용된다.

//함수를 실행하기 전에 해당 함수에 변수를 넘기고 싶을 때 사용된다.

//함수를 실행하기 전에, 해당 함수에 변수를 넘기고 싶을 때...무슨말일까


function tabsHandler(index){
    return function tabClickEvent(event){
        //바깥 함수인 tabsHandler()의 index인자를 여기에서 접근할 수 있다.
        console.log('on closer ' + index);//탭을 클릭할 때 마다 해당 탭의 index값을 표시
    }
}

var tabs = document.querySelectorAll('.tab');//tab이라는 클래스네임을 가지는 모든 element를 가져와서 NodeList객체를 만들어 tabs라는 변수에 넣어준다
var i;

for(i=0;i<tabs.length;i++){//tabs의 모든 item을 순회한다
    tabs[i].onclick = tabsHandler(i);//tabs의 모든 item들, 즉 tab이라는 클래스네임을 갖는 모든 element 각각의 onclick property에 우리가 만들어준 index를 출력하는 기능을 갖는 tabsHandler를 넣어주도록 한다. 중요한 것은 tabsHandler에 들어간 각각의 index가 그 안에 있는 내부함수? 에서도 접근이 가능하다는..것. 외부함수의 지역변수를 내부함수에서도 접근이 가능하게 한다, 그것이 클로저..라는 것.
}



//클로저를 쓰지 않은 예제
var tabs = document.querySelectorAll('.tab');
var i;

for(i=0;i<tabs.length;i++){
    tabs[i].onclick = function(event){
        console.log(i);//어느 탭을 클릭해도 항상 tabs.length가 출력된다
        //왜냐하면 console.log가 실행되는 시점에서 scope
    }
}










//querySelectorAll은 class이름으로 HTML element들을 가져온다. 여기에서는 tab이라는 class를 가진 모든 element를 가져오는 것!

//w3school에서는

//The querySelectorAll() method returns all elements in the document that matches a specified CSS selectors, as a static NodeList object. static NodeList object란 무엇인가?

//A NodeList object is a list(collection) of nodes extracted from a document.
//A NodeList object is almost the same as an HTMLCollection object.
//Some(older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().
//All browsers return a NodeList object for the property 'childNodes'
//Most browsers return a Nodelist object for the method querySelectorAll().


/* 
    The difference Between an HTML Collection and a NodeList

    An HTML Collection is a collection of HTML elements.
    A NodeList and an HTML Collection is very much the same thing.
    Both an HTMLCollection object and a NodeList object is an array-like list(collection) of objects.
    Both have a length property defining the number of items in the list(collection).
    Both provide an index(0,1,2,3,4,...) to access each item like an array.

    ***HTMLCollection items can be accessed by their name, id, or index number.
    NodeList items can only be accessed by their index number.***

    Only the NodeList object can contain attribute nodes and text nodes.

    ***A node list is not an array!!
    A node list may look like an array, but it is not.
    You can loop through the node list and refer to its nodes like an array.

    However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.

    암튼 querySelectorAll('classname')으로 element들을 하나의 객체로 모으면
    NodeList라는 이름으로 객체가 생성되어 그 안에 저장이 되고, 이건 array처럼 생겼지만 array는 아니다. 하지만 valueOf나 push, pop, join과 같은 arrayMethod들은 사용이 가능하다는 것..그럼 이게 array가 아니라는게 무슨 의미가 있는건지 잘 모르겠지만.

    근데 Array.valueof()가 뭐지?? -> 걍 Array랑 똑같은거. 그것의 값을 return.
    
    
    자 그러면 HTMLCollection은 무엇인가.

    An HTMLCollection object is an array-like list of HTML elements.
    Methods like the getElementByTagName() returns an HTMLCollection.

    Properties and Methods of HTMLCollection
    HTMLCollection.item() : Returns the element at the specified index in an HTMLCollection.
*/





