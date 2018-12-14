import java.io.BufferedReader;
import java.io.IOException;

public class ReceiveMessage extends Thread {
	
	BufferedReader br = null;
	ChattingClient cc = null;
	
	//생성자 -> 버퍼리더와 ChattingCLient 지정
	public ReceiveMessage(BufferedReader br, ChattingClient cc) {
		this.cc =cc;
		this.br = br;
	}
	
	
	public void run() {
		String msg = "";
		//메세지 '수신' 루프.
		while(true) {
			try {
				msg=br.readLine();
				if(msg!= null) {//버퍼리더에 메세지가 수신되면,
					cc.message(msg); //ChatClient에 메세지를 보냄
				}
			}
			catch(IOException e) {
			}
		}
	}

}
