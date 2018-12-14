//교재 59페이지 UDP Echo Client

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoClientUDP {

	public static void main(String[] args) throws IOException{
		//1.필요한 정보 만들기
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		
		InetAddress inet = InetAddress.getByName(args[1]);
		int port = Integer.parseInt(args[2]);
		String sendMsg = new String(args[3].toString());
		int len = sendMsg.length();
		
		//2.UDP Echo Server로 메시지 전송
		DatagramPacket sendPack;
		sendPack = new DatagramPacket(sendMsg.getBytes(), len, inet, port);
		udpsocket.send(sendPack);;
		System.out.println("Send Message:" + sendMsg);
		System.out.println("Send Time:" + new Date());
		
		//3.UDP Echo Server로부터 메시지 받기
		byte[] buffer = new byte[1024];
		DatagramPacket recvPack = new DatagramPacket(buffer, 1024);
		udpsocket.receive(recvPack);
		
		//4. 받은 DatagramPacket에서 정보 추출
		InetAddress client = recvPack.getAddress();
		int clientPort = recvPack.getPort();
		String msgRecv = new String(recvPack.getData(), 0, recvPack.getLength());
		
		//5. 받은 DatagramPacket의 정보 출력
		System.out.println("Sender:" + client + ":" + clientPort);
		System.out.println("Receiver: Localhost:" + args[0]);
		System.out.println("Message:" + msgRecv);
		System.out.println("Receive Time:" + new Date());
		
		udpsocket.close();
	}
}
