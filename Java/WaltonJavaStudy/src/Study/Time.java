package Study;

public class Time {
	//�ʵ����
	private int hour;
	private int minute;
	private int second;
	
	//ù��° ������
	public Time() {
		this(0,0,0);
	}
	
	
	
	//�ι�° ������
	
	public Time(int h, int m, int s) {
		hour = ((h>=0 && h<24)? h:0); //�ð� ����
		minute = ((m>=0 && m<60)? m:0); //�� ����
		second = ((s>=0 && s<60)? s:0); //�� ����
	}
	
	//"��:��:��"�� �������� ���
	public String toString() {
		return String.format("%02d:%02d:%02d", hour,minute,second);
	}
	
	
	
	
	
	
}
