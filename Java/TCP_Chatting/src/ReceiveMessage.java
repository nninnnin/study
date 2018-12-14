import java.io.BufferedReader;
import java.io.IOException;

public class ReceiveMessage extends Thread {
	
	BufferedReader br = null;
	ChattingClient cc = null;
	
	//������ -> ���۸����� ChattingCLient ����
	public ReceiveMessage(BufferedReader br, ChattingClient cc) {
		this.cc =cc;
		this.br = br;
	}
	
	
	public void run() {
		String msg = "";
		//�޼��� '����' ����.
		while(true) {
			try {
				msg=br.readLine();
				if(msg!= null) {//���۸����� �޼����� ���ŵǸ�,
					cc.message(msg); //ChatClient�� �޼����� ����
				}
			}
			catch(IOException e) {
			}
		}
	}

}
