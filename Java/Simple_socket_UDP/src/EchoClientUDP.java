//���� 59������ UDP Echo Client

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoClientUDP {

	public static void main(String[] args) throws IOException{
		//1.�ʿ��� ���� �����
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		
		InetAddress inet = InetAddress.getByName(args[1]);
		int port = Integer.parseInt(args[2]);
		String sendMsg = new String(args[3].toString());
		int len = sendMsg.length();
		
		//2.UDP Echo Server�� �޽��� ����
		DatagramPacket sendPack;
		sendPack = new DatagramPacket(sendMsg.getBytes(), len, inet, port);
		udpsocket.send(sendPack);;
		System.out.println("Send Message:" + sendMsg);
		System.out.println("Send Time:" + new Date());
		
		//3.UDP Echo Server�κ��� �޽��� �ޱ�
		byte[] buffer = new byte[1024];
		DatagramPacket recvPack = new DatagramPacket(buffer, 1024);
		udpsocket.receive(recvPack);
		
		//4. ���� DatagramPacket���� ���� ����
		InetAddress client = recvPack.getAddress();
		int clientPort = recvPack.getPort();
		String msgRecv = new String(recvPack.getData(), 0, recvPack.getLength());
		
		//5. ���� DatagramPacket�� ���� ���
		System.out.println("Sender:" + client + ":" + clientPort);
		System.out.println("Receiver: Localhost:" + args[0]);
		System.out.println("Message:" + msgRecv);
		System.out.println("Receive Time:" + new Date());
		
		udpsocket.close();
	}
}
