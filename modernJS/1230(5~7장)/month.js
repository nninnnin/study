var year = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1: case 2: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        //윤년 계산 알고리즘
        //1. 년도가 4로 나누어 떨어지는 해는 윤년
        //2. 그 주에서 년도가 100으로 나누어 떨어지는 해는 펴여
        //3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년
        
}