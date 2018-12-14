var a=3;
var b='hi';
var object={
    c: 'friends'
};

//이하 두개는 같다.

var string = b + ', my ' + a + ' ' + object.c;

const string2 = `${b}, my ${a} ${object.c}`;


console.log(string);
console.log(string2);


//긍까 먼저 그냥 다 문자열로 백틱안에 다 넣어버리고,
//그 안에서 자바스크립트 변수를 쓰고 싶다고 하면 ${}를 쓰면 된다!
//넘나편한것.