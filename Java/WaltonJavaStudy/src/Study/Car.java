package Study;

public class Car {
	private String model;
	private String color;
	private int speed;
	
	private int id;
	static int numbers = 0;
	
	public Car(String m, String c, int s) {
		model = m;
		color = c;
		speed = s;
		//자동차의 개수를 증가시키고  id에 대입한다
		id = ++ numbers;
	}
}
