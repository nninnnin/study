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

function execute(){
    getTime()
        .then((date)=>{
            console.log('현재 시간은' + date);
            return getTime();
        })
        .then((date)=>{
            console.log('현재 시간은' + date);
            return getTime();
        })
        .then((date)=>{
            console.log('현재 시간은' + date);
            return getTime();
        })
        .then((date)=>{
            console.log('현재 시간은' + date);
        })
        .catch((error)=>{
            console.log(error);
        })
}


execute();