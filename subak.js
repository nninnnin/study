function subak(n){
    let result = [];

    const a = '수';
    const b = '박';

    console.log(`n is "${n}"`);//n은 잘 받아왔고..

    for(let i=1;i<=n;i++){//헷갈리니까 i=1로하고 i<=n으로 하였습니다. 홀수일때는 '수'를 push, 짝수일때는 '박'을 push합니다
        if(i%2==1)
            result.push(a);
        else
            result.push(b);
    }

    console.log(result);

    // for(let i=0;i<n;i++){
    //    console.log(result[i]);
    // } //아래의 forEach로 리팩토링
    result.forEach((item)=>{console.log(item);}) 
    result.forEach((item,index)=>{console.log(item,index);})
}

subak(4);

//여기까지 내가 작성한 것
console.log('dg-------------');

function repeatText(n){
    let name = '탕수육';
    let name_len = name.length;
    let repText = '';
    let index = 0;

    for(let i=0;i<n;i++){
        index = i%name_len; //일단 name_len이 바뀔일은 없고..그런데 왜 굳이 2로 안하고 length로 변수화시켜주신걸까? 가독성? i를 name_length로 나누어서 index를 만들어주게 되면 음...나는 그냥 2로 나눈 이유는 홀/짝을 가리기 위함이었는데 만약 name_length처럼 해주게 되면 name의 길이가 늘어났을때에도 사용이 가능한 것일까!
        //만약 탕수육이라면?
        //오..대박이다. 진심. 역시 배운사람. 나처럼 2로 나눈 나머지를 구하게 되면 name이 2글자가 아닌 3글자나 4글자일 떄 나머지가 0과 1 이상으로 나올 수 없기 때문에 앞에 두글자만 반복되게 되는데 이렇게 name.length로 i를 나눈 나머지로 index를 주게 되면 for 문의 index가 정확하게 name의 index에 해당하는 것과 맞아떨어진다.
        repText += name[index]; //해당 인덱스의 글자들을 반복해서 넣어주면 된다!
    }

    console.log(repText);
}

repeatText(5);

console.log('jy---------------');

//이상은 손주영 누님이 작성한 것..name.length 오졌다




//이하는 장근호 가디언님이 푸신 것

function solution(n){
    return '수박'.repeat(n).substr(0,n); //substr은 0부터 n 전까지의 글자를 잘라서 넣는것
}
console.log(solution(3));

console.log('gh-----------------');

//암튼 이분은 자바스크립트에 대해 잘 아시는 것같다. 굿굿 repeat과 substr의 사용! 
