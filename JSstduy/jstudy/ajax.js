//XMLHttpRequest
//브라우저는 XMLHttpRequest객체를 이용하여 Ajax 요청을 생성하고 전송한다.
//서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest객체가 그 결과를 처리한다.

//Ajax request
//다음은 Ajax 요청 처리의 예이다.
var xhr = new XMLHttpRequest();
xhr.open('GET','/users');
xhr.send();

//XMLHttpRequest.open은 서버로의 요청을 준비한다.
//XMLHttpRequest.open(method(get이냐 post냐), url[, async])
//async의 default 값은 true이다. 즉 디폴트로 비동기

//XMLHttpRequest.send 메소드로 준비된 요청을 서버에 전달한다.
//기본적으로 서버로 전송하는 데이터는 GET, POST 메소드에 따라 그 전송 방식에 차이가 있다.

//GET 메소드의 경우, URL의 일부분인 쿼리문자열로 데이터를 서버로 전송한다.
//예시)   naver.com/?id=nninnnin&password=ehdrb1

//POST메소드의 경우, 데이터(페이로드)를 Request Body에 담아 전송한다


//XMLHttpRequest.setRequestHeader 메소드는 HTTP Request Header의 값을 설정한다.
//setRequestHeader 메소드는 반드시 XMLHttpRequest.open 메소드 호출 이후에 호출한다.

//자주 사용하는 Request Header인 Content-type, Accept에 대해 살펴보자.

//Content-type
//Content-type은 request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다.

//다음은 request body에 담아 서버로 전송할 데이터의 MIME-type을 지정하는 예이다.

//잠깐 MIME type이란..
//Multipurpose Internet Mail Extensions type.
//Multipurpose Internet Mail Extensions type is a standard that indicates the nature and format of a document, file, or assortment of bytes. It is defined and standardized in IETF RFC 6838..;;

//Browsers use the MIME type, not the file extension, to determine how to process a URL.
//It is important that servers send the correct MIME type in the response's Content-Type header.

//A MIME type consists of a type and a subtype. two strings seperated by '/'. 
//No whitespace is allowed. The type represents the category and can be a discrete or a multipart type. (참고 - discrete : 별개의)
//The subtype is specific to each type.

//MIME types are case-sensitive but traditionally written in lowercase.

//Discrete types
//   text/plain, text/html, image/jpeg, image/png, audio/mpeg, audio/ogg, audio/*,
//  video/mp4, application/*, application/json, application/javascript, application/ecmascript, application/octet-stream .....

//Multipart types
//  multipart/form-data
//  multipart/byteranges

//Multipart types indicate a category of document broken into pieces, often with different MIME types. They represent a composite document. With the exception of multipart/form-data, used in the POST method of HTML Forms, and multipart/byteranges, used with 206 Partial Content to send part of a document, HTTP doesn't handle multipart documents in a special way: the message is transmitted to the browser(which will likely show a "Save As" window if it doesn't know how to display the document.)

//그니까 MIME type은 서버와 클라이언트 간에 사용되는, HTTP 프로토콜 안에서의 파일확장자 같은 개념인 것 같다..

//  Important MIME types for Web developers

//  application/octet-stream
//This is the default for binary files.
//As is means unknown binary file, browsers usually don't execute it, or even ask if it should be executed. They treat it as if the Content-Disposition header was set to attachment, and propose a "Save As" dialog.

//  text/plain
//This is the default for textual files. Even if it really means unknown textual file, browsers assume they can display it.
//!! Note that text/plain does not mean any kind of textual data. If they expect a specific kind of textual data, they will likely not consider it a match. 
// Specifically if they download a text/plain file from a <link> element declaring a CSS files, they will not recognize it as a vlaid CSS files if presented with text/plain. The CSS mime type text/css must be used.

//  text/css
//CSS files used to style a Web page must! be sent with text/css. If a server doesn't recognize the .css suffix for CSS files, if may send them with text/plain or application/octet-stream MIME types. If so, they won't be recognized as CSS by most browsers and will be ignored.

//  text/html
//All HTML content should be served with this type. Alternative MIME tpyes for XHTML are mostly useless nowadays.


//쨋든 다시 돌아와서..다음은 request body에 담아 서버로 전송할 데이터의 MIME-type을 지정하는 예이다:

//json으로 전송하는 경우
xhr.open('GET','/users');
xhr.setRequestHeader('Content-type','application/json');
var data = {id:3, title:'JavaScript', author:'Park', price:5000};
xhr.send(JSON.stringify(data));//객체를 JSON형식의 string으로(그래야 보내니까)


//x-www-form-urlencoded 로 전송하는 경우
xhr.open('POST','/users');
//클라이언트가 서버로 전송할 데이터의 MIME-type 지정: x-www-form-urlencoded
//application/x-www-form-urlencoded는 key=value&key=value...의 형태로 전송.
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
var data = {title:'Javascript',author:'Park',price:5000};
xhr.send(Object.keys(data).map((key)=>{`${key}=${data[key]}`}).join('&'));
//escaping untrusted data
//xhr.send(Object.keys(data).map((key)=>{`${key}=${encodeURIComponent(data[key])}`}).join('&'));

//The encodeURIComponent() function encodes a Uniform Resource Identifier(URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character(will only be four escape sequences for characters composed of two "surrogate" characters)

//Accept
//HTTP 클라이언트가 서버에 요청할 때 서버가 샌드백할 데이터의 MIME-type을 Accept로 지정할 수 있다.
xhr.setRequestHeader('Accept','application/json')
//만약 Accept헤더를 설정하지 않으면, send 메소드가 호출될 때 Accept헤더가 */*로 전송된다.


//정리하자면 Content-type은 request 보낼때의 데이터타입을 정의하고, Accept는 말 그대로 받을때의 데이터타입을 정의한다.


//Ajax response
//다음은 Ajax 응답 처리의 예이다.

//XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때 마다 이벤트 핸들러를 호출한다.
xhr.onreadystatechange = function(e){
    //readyStates는 XMLHttpRequest의 상태(state)를 반환
    //readyState: 4 => DONE(서버응답완료)
    if(xhr.readyState===XMLHttpRequest.DONE){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else{
            console.log('Error!');
        }
    }
};
//위 코드를 좀 더 자세히 살펴보도록 하자.
//XMLHttpRequest.send 메소드를 통해 서버에 Request를 전송하면 서버는 Response를 반환한다. 하지만 언제 Response가 클라이언트에 도달할 지는 알 수 없다. XMLHttpRequest.onreadystatechange는 Response가 클라이언트에 도달하여 발생된 이벤트를 감지하고 콜백함수를 실행하여 준다. 이 때 이벤트는 Request에 어떠한 변화가 발생한 경우 즉 XMLHttpRequest.readyState프로퍼티가 변경된 경우 발생한다.


var xhr = new XMLHttpRequest(); //XMLHttpRequesst 객체의 생성
xhr.open('GET',data/test.json); //비동기 방식으로 Request를 오픈한다.
xhr.send(); //Request를 전송한다

//XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때 마다 콜백함수(이벤트핸들러)를 호출한다.
xhr.onreadystatechange = function(e){
    //이 함수는 Response가 클라이언트에 도달하면 호출된다.
}

//XMLHttpRequest객체는 Response가 클라이언트에 도달했는지를 추적할 수 있는 프로퍼티를 제공한다.
//이 프로퍼티가 바로 XMLHttpRequest.readyState이다. 만일 XMLHttpRequest.readyState의 값이 4인 경우, 정상적으로 Response가 돌아온 경우이다. readXMLHttpRequest.readyState의 값은 아래와 같다.

// 0 -> UNSENT - XMLHttpRequest.open() 메소드 호출 이전
// 1 -> OPENED - XMLHttpRequest.open() 메소드 호출 완료
// 2 -> HEADERS_RECEIVED - XMLHttpRequest.send() 메소드 호출 완료
// 3 -> LOADING - 서버 응답 중 (XMLHttpRequest.responseText 미완성 상태)
// 4 -> DONE (서버응답 완료)


var xhr = new XMLHttpRequest();
xhr.open('GET','data/test.json');
xhr.send();

//XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생) 될 때 마다 콜백함수(이벤트핸들러)를 호출한다.

xhr.onreadystatechange=function(event){
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else{
            console.log('Error');
        }
    }
}

//XLHttpRequest의 readyState가 4인경우, 서버 응답이 완료된 상태이므로 이후 XMLHttpRequest.status가 200임을 확인하고 정상인 경우, XMLHttpRequest.rewsponseText를 취득한다. XMLHttpRequest.responseText에는 서버가 전송한 데이터가 담겨있다.


//Web Server

//웹서버는 브라우저와 같은 클라이언트로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹 페이지를 반환하는 컴퓨터 프로그램이다.

//Ajax는 웹서버와의 통신이 필요하므로 예제를 실행하기 위해서는 웹서버가 필요하다.

//Ajax 예제
//Load HTML
//Ajax를 이용하여 웹페이지에 추가하기 가장 손쉬운 데이터형식은 HTML이다.
//별도의 작업없이 전송받은 데이터를 DOM에 추가하면 된다.

//예제는 바탕화면의 express server폴더에서 확인하기로~!


//5.3 Load JSON
//요청에 의해 웹페이지가 전달된 서버와 동일한 도메인의 서버로부터 전달된 데이터는 문제없이 처리할 수 있다. 하지만 보안상의 이유로 다른 도메인(http와 https, 포트가 다르면 다른 도메인으로 간주한다)으로의 요청(크로스 도메인 요청)은 제한된다. 이것을 동일출처원칙(Same-origin policy)이라고 한다.

//동일출처원칙을 우회하는 방법은 세가지가 있다.\
//1. 웹서버의 프록시파일
//서버에 원격 서버로부터 데이터를 수집하는 별도의 기능을 추가하는 것이다. 이를 프록시라 한다.
//2. JSONP
//script태그의 원본 주소에 대한 제약은 존재하지 않는데, 이것을 이용하여 다른 도메인의 서버에서 데이터를 수집하는 방법이다. 자신의 서버에 함수를 정의하고, 다른 도메인의 서버에서 얻고자 하는 데이터를 인수로 하는 함수 호출문을 로드하는 것이다.

//3. Cross-Origin Resource Sharing
//HTTP 헤더에 추가적으로 정보를 추가하여 브라우저와 서버가 서로 통신해야 한다는 사실을 알게하는 방법이다. W3C명세에 포함되어 있지만 최신 브라우저에서만 동작하여 서버에 HTTP 헤더를 설정해 주어야 한다.


