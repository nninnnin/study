//주사위 두개를 던졌을 때 합이 6인 경우를 모두 출력해봅니다!

var a = [1,2,3,4,5,6];
var b = [1,2,3,4,5,6];
for(var i=0;i<a.length;i++){
 for(var j=0;j<b.length;j++){
    if (a[i]+b[j] === 6){
        console.log([a[i],b[j]]);
    }
 }
}