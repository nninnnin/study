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
	
	//������
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
	
	//�޼ҵ�
	
	
	public void run() {
		//ȯ���޼��� ������
		String msg = "";
		cs.message(userId + "�����̽��ϴ�!");
		//�޼�������
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
	
	//���۶����Ϳ� �޼���������
	public void sendMessage(String msg) {
		try {
			bw.write(msg + "\n");
			bw.flush();
		}
		catch(IOException e){
		}
	}
	
	//�������̵� ��ȯ
	public String getUserId() {
		return userId;
	}
	
	//���۸���, ���۶�����, ���� �Ҹ�(close)
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
