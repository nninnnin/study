public class Tree{ //트리클래스
    public class Node{ //그 안에 노드. 트리의 각 노드 하나하나들중 하나~
        int data; //말 그대로 데이터. 노드 안에 넣어줄 배열에서 가져온 숫자.
        Node left; //하나의 노드 안에는 아래 왼쪽 자식노드가..
        Node right; //반대로 오른쪽 자식노드.

        Node(int data){//이거 생성자인가?
            this.data = data; //위에서 선언해준 field(전역변수) data를 가리키는 this.data에다가 요 생성자 매개변수 data로 받아온 값을 넣어준다는~
        }
    }

    Node root; //root라는 이름으로 루트노드 만들어줌..

    public void makeTree(int[] a){//트리를 만들어주는 함수 (재귀함수를 안에 정의)
        root = makeTreeR(a, 0, a.length -1);
    }

    public Node makeTreeR(int[] a, int start, int end){ //재귀함수
        if (start > end) return null;//재귀함수를 멈춰줄 breaker
        int mid = (start + end) /2;
        Node node = new Node(a[mid]);
        node.left = makeTreeR(a, start, mid-1); //여기서 recursive되는거지
        node.right = makeTreeR(a, mid+1, end); //여기도
        return node; //이 메소드 안에서 만든걸, 호출한 곳으로 return해줘야겠지! (recursive이기 때문에, 맨 아래 노드부터 return된다)
    }

    public void searchBTree (Node n, int find){
        if (find < n.data){
            System.out.println("Data is smaller than" + n.data);
            searchBTree(n.left, find);
        }
        else if(find > n.data){
            System.out.println("Data is bigger than" + n.data);
            searchBTree(n.right, find);
        }
        else{
            System.out.println("Data '" + n.data + "' is found!");
        }
    }
}