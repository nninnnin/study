package abstractClass;

public abstract class A { //�߻�޼ҵ带 �ϳ��� �����ϰ� �ִ� Ŭ������ �߻� Ŭ������ �ǰ�, �ڿ������� Ŭ������ �̸� �տ� abstract�� �ٴ´�.
	public abstract int b(); //�߻�޼ҵ� (�޼ҵ� �����ϰ� ������ ����, abstract�� �ٿ���)

	public void d() { //�̷��� ������ �ִ� �޼ҵ忡 abstract�� ���̸� ������ ����. abstract�� �ƴѵ�, abstract��� �̸��� �ٿ����ϱ�!
		System.out.println("world");
	}
}


//�߻�޼ҵ� A�� ��ӹ޴� �޼ҵ� B
class B extends A{
	public int b() { //A�� �ִ� �߻�޼ҵ� b�� overriding�Ͽ�
		return 1; //�̷��� ���
}
}
