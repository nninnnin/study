//���� 58������ UDP Echo Server

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoServerUDP {

	public static void main(String[] args) throws IOException {
		
		
		
		DatagramSocket udpsocket = new DatagramSocket(Integer.parseInt(args[0]));
		
		byte[] buffer = new byte[1024];
		DatagramPacket recvPack = new DatagramPacket(buffer, 1024);
		while(true) {
			udpsocket.receive(recvPack);
			
			
			//4.���� DatagramPacket���� ���� ����
			InetAddress client = recvPack.getAddress();
			int clientPort = recvPack.getPort();
			int msgLength = recvPack.getLength();
			byte[]msgBytes = recvPack.getData();
			String msgRecv = new String(msgBytes, 0 ,msgLength);
			
			//5.���� DatagramPacket�� ���� ���
			System.out.println("Sender:" + client + ":" + clientPort);
			System.out.println("Receiver: Localhost:" + args[0]);
			System.out.println("Receive Message:" + msgRecv);
			System.out.println("Receive Time:" + new Date());
			
			//6. Ŭ���̾�Ʈ�� �޽��� ������
			DatagramPacket sendPack;
			sendPack = new DatagramPacket(msgBytes, msgLength, client, clientPort);
			udpsocket.send(sendPack);
			String msgSend = new String(msgBytes, 0, msgLength);
			System.out.println("Send Message:" + msgSend);
			System.out.println("Send Time:" + new Date() + "\r\n");
			udpsocket.close();
		}
		
	}
}
