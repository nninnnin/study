package abstractClass;

public class AbstractDemo{
	public static void main(String[] args) {
//		A obj = new A(); //A��� Ŭ������ ���� ��ü obj�� ����� (�ν��Ͻ�ȭ) ==> �Ұ���!
//		//�� ������..�߻� Ŭ������ ��ü���� �޼ҵ��� ������ �������� �ʱ� ������ �ν��Ͻ�ȭ ���Ѽ� ����� �� ���� ����
		
		
		B obj2 = new B(); //�� ���� �ν��Ͻ�ȭ�� �����ϴ�.
		System.out.println(obj2.b());
	}
}