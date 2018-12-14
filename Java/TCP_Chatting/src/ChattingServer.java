import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Vector;

public class ChattingServer {//Ŭ���̾�Ʈ���� ������ �޽����� �ٸ� Ŭ���̾�Ʈ�鿡�� ������ ������ �Ѵ�.
	
	//fields
	private ServerSocket socket = null; //�������� ����
	private Vector v = new Vector(); //public ChatServer()  => Ŭ���̾�Ʈ ���� �ڷᱸ��
	
	
	
	//�޼ҵ�
	
	//
	public void message(String msg) {
		System.out.println(msg);
		for(int i=0; i<v.size() ; i++) {
			((Client)v.elementAt(i)).sendMessage(msg);
		}
	}
	//vector�� Ŭ���̾�Ʈ �߰�
	public void addClient(Client c) {
		v.addElement(c);		
	}
	//vertor���� Ŭ���̾�Ʈ ����
	public void removeClient(Client c) {
		String userId=c.getUserId();
		c.closeSocket();
		boolean b = v.remove(c);
		System.out.println(userId+ "���� �����̽��ϴ�");
	}
	
	
	//���������� ������ִ� �޼ҵ�
	public void setServerSocket(int port) {
		try {
			socket = new ServerSocket(port);
			System.out.println("�����");
		}
		catch(IOException e) {
			System.out.println("���� ���� ���� ����");
		}
		
		while(true) {
			try {
				Socket server = socket.accept();
				Client c = new Client(server, this);
				addClient(c);
				c.start();
			}
			catch(IOException e) {
				System.out.println(" ");
			}
		}
	}
	
	
	
	//����
	public static void main(String[] args) {
		int port = 5000;
		ChattingServer cs = new ChattingServer();
		cs.setServerSocket(port);
	}
	
}
