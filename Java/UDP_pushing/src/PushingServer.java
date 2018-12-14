
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Date;



public class PushingServer {
	public static void main(String[] args) throws Exception
	{	
		//������ �����,
		DatagramSocket socket = new DatagramSocket();
		//inet adress�� �����´�. (ip�ּ�)
		InetAddress inet = InetAddress.getByName(args[0]);
		//port�� ������
		int port = Integer.parseInt(args[1]);
		
		
		System.out.println(args[0] + ":" + args[1] + "�� ������ Pushing");
		
		while(true) {
			String dateStr = new String("POCKET " + new Date().toString() + "\r\n");
			int len = dateStr.length(); 
			
			DatagramPacket packetOut;
			packetOut = new DatagramPacket(dateStr.getBytes(), len, inet, port);
			//���Ͽ� packetOut�̶�� DatagramPacket�� �����µ�, �� DatagramPacket�� send�Ϸ���
			//���� ������, length, ip�ּ�, port�ѹ��� ���ԵǾ��־����(�°Ͱ���)�� ��.
			socket.send(packetOut);
			System.out.println("Sending:" + dateStr);
			Thread.sleep(1000);
		}
		
	
	}
}
