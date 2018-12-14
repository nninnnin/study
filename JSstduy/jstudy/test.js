var aaa=false||'기본값'
console.log(aaa);

//앞에가 false면 뒤에 기본값 스트링이 들어간다.

var bbb=true||"얘는 무시되는 값"

console.log(bbb);

var ccc=''||'빈값을 입력하셨군요'

//아 이거 배웠었는데 if else 대신할수있다고.



//slice를 배워보자.
var array = [1,2,3,4,5];

console.log(array.slice(0,2)); //index 0부터 2이전까지, 즉 0부터 1까지를 잘라낸다.(0부터 2개란 뜻 아님. 0부터 2 이전까지라는 뜻.)
var cc = array.slice(0,2).concat(array.slice(3,5)) //[1,2,4,5]가 나오겠죠? [1,2]랑 [4,5]가 합쳐져서요.

console.log(cc); //그러네요

//다음은 map.

const a = [1,2,3,4,5]
const b = a.map(number => number*2); //일단 number는 각각의 value를 말하는것 같고 => 원하는 연산을 한 모습을 써주면 그대로 mapping 되는 것 같다.

console.log(b); //그릏쥬?

//다음은 filter.
//조건에 맞는 원소들을 뽑아내서 새로운 배열을 만들어낸다.

const c = array.filter(num=>num!==3); //뭔가 map이랑 문법은 비슷하다. 대신 => 이후에 원하는 value의 연산을 적어주는게 아니라, 말 그대로 필터링하는 필터를 적는다.
//위의 필터링 조건에서는 array의 value 중 3이 아닌 애들만 출력해달라는 것이었다..
//첨에는 3이 아닌 것들을 걸러달라는걸로 생각했는데 컴터는 그런 방식으로 작동하지 않는다.
//num!==3 인 것들을 출력해라, 는 말이다. 그러니까 3이 아닌 애들은 다 출력한다. 원하는 조건을 적어준다. 그것에 맞는 애들만 필터링해준다.
//map이랑 filter는 매우 비슷한 것을 알 수 있다.

console.log(c);