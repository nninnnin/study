package abstractClass;

public class Test {
	
	public static void main(String[] args) {
		Rectangle r = new Rectangle(); //����Ŭ���� ��ü����
		Circle c = new Circle(); //����Ŭ���� ��ü����
		
		r.draw(); //����Ŭ������ ��ӹ��� �޼ҵ� ȣ��
		c.draw(); //����Ŭ������ ��ӹ��� �޼ҵ� ȣ��
	}
}

//�߻�Ŭ����(����Ŭ����) '���'
abstract class Shape{
	int x,y;
	public void move(int x, int y) {
		this.x = x;
		this.y = y;
	}
	public abstract void draw(); //�߻� �޼ҵ�
}

//����Ŭ���� '�簢��'
class Rectangle extends Shape{
	int width, height;
	//�޼ҵ� ������
	public void draw() {
		System.out.println("�簢���׸���޼ҵ�");
	}
}

//����Ŭ���� '��'
class Circle extends Shape{
	int radius;
	//�޼ҵ� ������
	public void draw() {
		System.out.println("���׸���޼ҵ�");
	}
}

//�߻�Ŭ������ ���� ����Ŭ������ �뵵�̴�.
//�߻�Ŭ�������� �ϳ� �̻��� �߻�޼ҵ尡 �ʼ������� ���ԵǾ�� �ϸ�,�Ϲ� �޼ҵ嵵 ���Ե� �� �ִ�.





