import java.awt.BorderLayout;
import java.awt.Frame;
import java.awt.Panel;
import java.awt.TextArea;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class ChattingClient extends Panel{
	
	//fields
	private TextField tfMessage = new TextField(); //입력받는 부분
	private TextArea taContent = new TextArea("Starting Chatting! (나가시려면 'exit'를 쳐주세요)", 30, 50); //출력되는 부분
	private Socket client = null;
	private BufferedReader br = null;
	private BufferedWriter bw = null;
	
	//생성자
	public ChattingClient(String ip, int port, String id) throws IOException{
		this.setLayout(new BorderLayout());
		this.add("Center",taContent);
		this.add("South",tfMessage);
		taContent.setEditable(false);;
		tfMessage.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				tfMessage_actionPerformed(e);
			}
		});
		
		try {
			//클라이언트 소켓 생성!
			client = new Socket(ip, port);
			br = new BufferedReader(new InputStreamReader(client.getInputStream()));
			bw = new BufferedWriter(new OutputStreamWriter(client.getOutputStream()));
			bw.write(id);
			bw.newLine();
			bw.flush();
		}
		catch(IOException e) {
			System.out.println("접속실패");
			throw e;
		}
		ReceiveMessage sm = new ReceiveMessage(br,this);
		sm.start();
	}
	
	//메쏟
	
	//엔터를 쳤을 때
	public void tfMessage_actionPerformed(ActionEvent e) {
		String msg = tfMessage.getText().trim();
		if(!msg.equals("")) {
			try {
				if(msg.equalsIgnoreCase("exit")) System.exit(0);
				//Text field에서 글 입력 시 버퍼라이터에 전송
				bw.write(msg);;
				bw.newLine();
				bw.flush();
				tfMessage.setText("");
			}
			catch(IOException ex) {
			}
		}
	}
	
	public void message(String msg) {
		taContent.append("\n" + msg);
		tfMessage.requestFocus();		
	}
	
	
	
	
	//메인
	public static void main(String[] args) {
		int port = 5000;
		//String ip = args[0];
		//String id = args[1];
		String ip = "192.168.0.97";
		String id = "안녕하세요";
		
		Frame f = new Frame("Chat CLient");
		try {
			f.add(new ChattingClient(ip,port, id), BorderLayout.CENTER);
		}
		catch(IOException e) {
			System.exit(-1);
		}
		f.pack();
		f.setVisible(true);
	}
}




