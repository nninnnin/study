#include <stdio.h>

int main(){
    printf("문자열을 입력후 엔터를 누르세요!\n");

    char a[256]; //256개의 char를 갖는 a라는 이름의 배열 생성
    scanf("%s", a); //scan function을 실행해서 a를 입력받는다

    printf("\" %s \" 를 입력하셨네요.\n",a);
}