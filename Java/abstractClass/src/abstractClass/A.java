package abstractClass;

public abstract class A { //추상메소드를 하나라도 포함하고 있는 클래스는 추상 클래스가 되고, 자연스럽게 클래스의 이름 앞에 abstract가 붙는다.
	public abstract int b(); //추상메소드 (메소드 선언만하고 내용이 없고, abstract를 붙여줌)
	
	public void d() { //이렇게 내용이 있는 메소드에 abstract를 붙이면 오류가 난다. abstract가 아닌데, abstract라고 이름을 붙였으니까!
		System.out.println("world");
	}
}


//추상메소드 A를 상속받는 메소드 B
class B extends A{
	public int b() { //A에 있던 추상메소드 b를 overriding하여
		return 1; //이렇게 새로운 내용을 정의.
	}
}