package abstractClass;

public class AbstractDemo{
	public static void main(String[] args) {
//		A obj = new A(); //A라는 클래스를 갖는 객체 obj를 만든다 (인스턴스화) ==> 불가능!
//		//그 이유는..추상 클래스는 구체적인 메소드의 내용이 존재하지 않기 때문에 인스턴스화 시켜서 사용할 수 없기 때문
		
		
		B obj2 = new B(); //자 이제 인스턴스화가 가능하다.
		System.out.println(obj2.b());
	}
}