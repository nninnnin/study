function getTime(){
    return new Promise((resolve, reject)=>{
        // const isSuccess = Math.random() >= 0.5; //크면 true 작으면 false
        const isSuccess = true;
        
        setTimeout(()=>{//분기
            if(isSuccess){
                resolve(new Date());
            }else{
                reject('시간을 가져오는데 실패');
            }
        },1000);//1초마다 콜백을 실행

    });
}

async function execute(){
    const time = await getTime();
    console.log('현재 시간은' + time)
}


function execute2(){
    const time = getTime();
    console.log('현재 시간은2' + time)
}

//두개의 순서를 바꿔보면 execute()가 비동기로 실행된다는 것을 이해할 수 있다.
execute();
execute2();