import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class Client extends Thread{
	
	//fields
	private Socket server = null;
	private ChattingServer cs = null;
	private BufferedReader br = null;
	private BufferedWriter bw = null;
	private String userId= "";
	
	//생성자
	public Client(Socket s, ChattingServer cs) {
		this.server = s;
		this.cs = cs;
		try {
			br = new BufferedReader(new InputStreamReader(server.getInputStream()));
			bw = new BufferedWriter(new OutputStreamWriter(server.getOutputStream()));
			userId = br.readLine();
		}
		catch(IOException e) {
		}
	}
	
	//메소드
	
	
	public void run() {
		//환영메세지 보내기
		String msg = "";
		cs.message(userId + "들어오셨습니다!");
		//메세지루프
		while(true) {
			try {
				msg = br.readLine();
				cs.message(userId + ":" + msg);
			}
			catch(IOException e) {
				cs.removeClient(this);
				break;
			}
		}
	}
	
	//버퍼라이터에 메세지보내기
	public void sendMessage(String msg) {
		try {
			bw.write(msg + "\n");
			bw.flush();
		}
		catch(IOException e){
		}
	}
	
	//유저아이디 변환
	public String getUserId() {
		return userId;
	}
	
	//버퍼리더, 버퍼라이터, 소켓 소멸(close)
	public void closeSocket() {
		try {
			br.close();
			bw.close();
			server.close();
		}
		catch(IOException e) {
			
		}
	}
	
	

}
