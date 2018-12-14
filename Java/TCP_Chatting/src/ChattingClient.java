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
	private TextField tfMessage = new TextField(); //�Է¹޴� �κ�
	private TextArea taContent = new TextArea("Starting Chatting! (�����÷��� 'exit'�� ���ּ���)", 30, 50); //��µǴ� �κ�
	private Socket client = null;
	private BufferedReader br = null;
	private BufferedWriter bw = null;
	
	//������
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
			//Ŭ���̾�Ʈ ���� ����!
			client = new Socket(ip, port);
			br = new BufferedReader(new InputStreamReader(client.getInputStream()));
			bw = new BufferedWriter(new OutputStreamWriter(client.getOutputStream()));
			bw.write(id);
			bw.newLine();
			bw.flush();
		}
		catch(IOException e) {
			System.out.println("���ӽ���");
			throw e;
		}
		ReceiveMessage sm = new ReceiveMessage(br,this);
		sm.start();
	}
	
	//�޽�
	
	//���͸� ���� ��
	public void tfMessage_actionPerformed(ActionEvent e) {
		String msg = tfMessage.getText().trim();
		if(!msg.equals("")) {
			try {
				if(msg.equalsIgnoreCase("exit")) System.exit(0);
				//Text field���� �� �Է� �� ���۶����Ϳ� ����
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
	
	
	
	
	//����
	public static void main(String[] args) {
		int port = 5000;
		//String ip = args[0];
		//String id = args[1];
		String ip = "192.168.0.97";
		String id = "�ȳ��ϼ���";
		
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




