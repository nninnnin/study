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
		//�ڵ����� ������ ������Ű��  id�� �����Ѵ�
		id = ++ numbers;
	}
}
