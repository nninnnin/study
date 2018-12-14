import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Vector;

public class ChattingServer {//클라이언트들이 보내온 메시지를 다른 클라이언트들에게 보내는 역할을 한다.
	
	//fields
	private ServerSocket socket = null; //서버소켓 생성
	private Vector v = new Vector(); //public ChatServer()  => 클라이언트 저장 자료구조
	
	
	
	//메소드
	
	//
	public void message(String msg) {
		System.out.println(msg);
		for(int i=0; i<v.size() ; i++) {
			((Client)v.elementAt(i)).sendMessage(msg);
		}
	}
	//vector에 클라이언트 추가
	public void addClient(Client c) {
		v.addElement(c);		
	}
	//vertor에서 클라이언트 빼기
	public void removeClient(Client c) {
		String userId=c.getUserId();
		c.closeSocket();
		boolean b = v.remove(c);
		System.out.println(userId+ "님이 나가셨습니다");
	}
	
	
	//서버소켓을 만들어주는 메소드
	public void setServerSocket(int port) {
		try {
			socket = new ServerSocket(port);
			System.out.println("대기중");
		}
		catch(IOException e) {
			System.out.println("서버 소켓 생성 실패");
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
	
	
	
	//메인
	public static void main(String[] args) {
		int port = 5000;
		ChattingServer cs = new ChattingServer();
		cs.setServerSocket(port);
	}
	
}
