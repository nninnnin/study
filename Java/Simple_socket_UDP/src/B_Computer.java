import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Date;


public class B_Computer {
	public static void main(String[] args) throws IOException{
		//1. DatagramSocket 생성
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		System.out.println("B Computer 3000 Port Waiting.....");
		
		//2. 데이터를 받을 DatagramPacket 생성
		byte[] buffer = new byte[1024];
		DatagramPacket recvPack = new DatagramPacket(buffer, 1024);
		
		
		//데이터 받기
		udpsocket.receive(recvPack);
		
		
		//3. 받은 DatagramPacket에서 정보 추출
		InetAddress client = recvPack.getAddress();
		int clientPort = recvPack.getPort();
		int msgLength = recvPack.getLength();
		byte[] msgBytes = recvPack.getData();
		String msgRecv = new String(msgBytes, 0, msgLength);
		
		//4. DatagramPacket의 정보 출력
		System.out.println("Sender:"+client + ":" + clientPort);
		System.out.println("Receiver: Localhost:" + args[0]);
		System.out.println("Receive Message:"+msgRecv);
		System.out.println("Receive Time:" + new Date());
		
		//5. DatagramSocket 닫기
		udpsocket.close();
	}
}
