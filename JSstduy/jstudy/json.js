var o = {
    name : 'Lee dong gyu',
    gender: 'male',
    age: 20
}

//객체를 JSON 형식의 문자열로 변환 (JSON.stringify 사용!)
var strObject = JSON.stringify(o);
console.log(`안녕하세요 strObject의 타입은 '${typeof strObject}' 입니다`);

//객체를 JSON 형식의 문자열로 변환, + prettify
var strPrettyObject = JSON.stringify(o, null, 2);
console.log(typeof strPrettyObject, strPrettyObject);

//replacer
//값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value){
    return typeof value === 'number' ? undefined : value;
}

//객체 => JSON형식의 문자열 + replacer + prettify
var strFilteredObject = JSON.stringify(o, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

var arr = [1,5,'false'];

//배열객체 => 문자열
var strArray = JSON.stringify(arr);
console.log(typeof strArray,strArray);



//replacer
//모든 값을 대문자로 변환된 문자열을 반환한다
function replaceToUpper(key,value){
    return value.toString().toUpperCase();
}



//배열객체 => 문자열 + replacer
var strFilteredArray = JSON.stringify(arr,replaceToUpper);
console.log(typeof strFilteredArray, strFilteredArray);


//JSON.parse
//JSON.parse메소드는, JSON 데이터를 가진 문자열을 객체로 반환한다.
//서버로부터 브라우저로 전송된 JSON 데이터는 문자열이다.
//이 문자열을 객체로서 사용하려면 '객체화' 하여야하는데 이를 '역직렬화' 라고 한다
//'Deserializing'
//역직렬화를 위해서 내장 객체 JSON의 static 메소드인 JSON.parse를 사용한다.

//JSON 형식의 문자열에서 객체로의 변환
//그니까 JSON.stringify() 의 역을 수행하는 메소드라고 볼 수 있지 않을까
//JSON.stringify는 객체에서 JSON문자열로 변환시키는거고,
//JSON.parse는 JSON문자열에서 객체로 변환
var obj = JSON.parse(strObject);//위에서 JSON.stringify(o)로 변환시켰던 strObject를 다시 JSON.parse에 넣어서 obj라는 객체로 변환시킨다.
console.log(typeof obj, obj)
//콘솔을 확인해보면 obj의 type이 object로 찍히는걸 볼 수 있다.


//문자열에서 배열 객체로의 변환
console.log(typeof strArray, strArray);//자, strArray는 원래 JSON타입의 문자열이었는데
var objArray = JSON.parse(strArray); //JSON.parse에 넣어주고 objArray라는걸로 만들어주면
console.log(typeof objArray, objArray);//이제 객체로 변했음을 알 수 있다


//다시 정리하자면 JSON.stringify는 객체나 배열을 문자열로 이루어진 JSON데이터로 만들어주고

//JSON.parse는 문자열 형태로 이루어진 JSON데이터를 객체나 배열로 다시 바꿔준다..

//예상해보자면 통신할때는 JSON타입이어야 하니까 프로그램에서 쓰던 객체나 배열을 stringify시킨 다음 보내고, 받은 데이터는 다시 JSON.parse로 객체나 배열로 바꿔서 다시 사용하지 않을까?





