package JavaTutorials;

//추상메소드를 포함하는 추상클래스
abstract class abstractclass {
	
	
	//추상메소드
	public abstract int b();
	
	//추상메소드가 아닌 메소드 포함가능
	public void d() {
		System.out.println("world");
	}
}

//추상클래스를 상속했으면,
class B extends abstractclass{
	//그 안에 있는 추상 메소드도 상속해야한다
	public int b() {
		return 1;
	}
}




