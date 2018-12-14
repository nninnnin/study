


public class Test{
    public static void main(String[] args){
        int[] a = new int[10];
        for(int i=0; i<a.length; i++){
            a[i] = i;
        } //여기까지는 10칸짜리 배열 만들어서 0부터 9까지 넣어주는 거고

        Tree t = new Tree(); //t라는 이름의 새로운 트리를 선언.

        t.makeTree(a); //선언된 t라는 Tree클래스를 가진 객체 안에 있는 메소드 makeTree를 사용해서, 매개변수 a (위에서 만들어준 0~9를 가지고 있는 배열) 를 넣어주고 이에 해당하는 2진 트리를 만들게 시킨다. 여기까지 하면 배열에 해당하는 트리가 만들어 진 것이고,

        t.searchBTree(t.root, 2); //또한 Tree클래스 안에 만들어준 searchBTree에 매개변수로 가장 처음으로 검색을 시작할 루트노드와 찾고싶은 값인 2를 넣어줌으로서 테스트를 진행한다. 그러면 만들어진 트리에서 2라는 값을 찾는 과정을 테스트할 수 있다.
    }
}