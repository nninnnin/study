import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Date;

public class A_Computer {
	public static void main(String[] args) throws IOException{
		
		//1.DatagramSocket 생성
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		
		//2.필요한 정보 만들기
		InetAddress client = InetAddress.getByName(args[1]);
		int clientPort = Integer.parseInt(args[2]);
		int msgLength = args[3].length();
		byte[] msgBytes = args[3].getBytes();
		
		//3.패킷 생성
		DatagramPacket sendPack;
		sendPack = new DatagramPacket(msgBytes, msgLength, client, clientPort);
		
		//4.패킷 전송
		udpsocket.send(sendPack);
		System.out.println("Send Message:"+args[3]);
		System.out.println("Send Time:" + new Date());
		
		//
		udpsocket.close();
	}

}
