//먼저 동기적인 자바스크립트 코드

// function getTime(callback){
//     setTimeout(()=>{
//         callback(new Date());
//         // console.log('시간!'+ new Date()); 
//     },2000); //2초후에 콜백함수 실행
// }

function getTime(onSuccess, onFailure){
    // const isSuccess = Math.random() >= 0.5; //true or false
    const isSuccess = true;

    setTimeout(()=>{
        if(isSuccess){
            onSuccess(new Date());
        }else{
            onFailure('시간을 가져오는데 실패하였습니다');
        }
    },1000)
}

function execute(){
    getTime((time)=>{
        console.log('첫번째 시간은'+time);
        getTime((time)=>{
            console.log('두번째 시간은'+time);
        });
    });
}

execute();
