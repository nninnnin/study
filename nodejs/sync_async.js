var fs = require('fs');

//Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt',{encoding: 'utf8'},function(error,data){
    console.log(3);//얘가 제일 마지막에 실행되었다. 2->4->3. 이걸 다른사람에게 던져버리고 바로
    console.log(data);
})

console.log(4);//얘를 실행하러 간거다