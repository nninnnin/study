import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Date;


public class B_Computer {
	public static void main(String[] args) throws IOException{
		//1. DatagramSocket ����
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		System.out.println("B Computer 3000 Port Waiting.....");
		
		//2. �����͸� ���� DatagramPacket ����
		byte[] buffer = new byte[1024];
		DatagramPacket recvPack = new DatagramPacket(buffer, 1024);
		
		
		//������ �ޱ�
		udpsocket.receive(recvPack);
		
		
		//3. ���� DatagramPacket���� ���� ����
		InetAddress client = recvPack.getAddress();
		int clientPort = recvPack.getPort();
		int msgLength = recvPack.getLength();
		byte[] msgBytes = recvPack.getData();
		String msgRecv = new String(msgBytes, 0, msgLength);
		
		//4. DatagramPacket�� ���� ���
		System.out.println("Sender:"+client + ":" + clientPort);
		System.out.println("Receiver: Localhost:" + args[0]);
		System.out.println("Receive Message:"+msgRecv);
		System.out.println("Receive Time:" + new Date());
		
		//5. DatagramSocket �ݱ�
		udpsocket.close();
	}
}
