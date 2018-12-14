package abstractClass;

public class Test {
	
	public static void main(String[] args) {
		Rectangle r = new Rectangle(); //서브클래스 객체생성
		Circle c = new Circle(); //서브클래스 객체생성
		
		r.draw(); //서브클래스의 상속받은 메소드 호출
		c.draw(); //서브클래스의 상속받은 메소드 호출
	}
}

//추상클래스(슈퍼클래스) '모양'
abstract class Shape{
	int x,y;
	public void move(int x, int y) {
		this.x = x;
		this.y = y;
	}
	public abstract void draw(); //추상 메소드
}

//서브클래스 '사각형'
class Rectangle extends Shape{
	int width, height;
	//메소드 재정의
	public void draw() {
		System.out.println("사각형그리기메소드");
	}
}

//서브클래스 '원'
class Circle extends Shape{
	int radius;
	//메소드 재정의
	public void draw() {
		System.out.println("원그리기메소드");
	}
}

//추상클래스는 단지 슈퍼클래스의 용도이다.
//추상클래스에는 하나 이상의 추상메소드가 필수적으로 포함되어야 하며,일반 메소드도 포함될 수 있다.





