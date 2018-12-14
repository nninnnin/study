//교재 59페이지 UDP Echo Client

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoClientTCP
{

	public static void main(String[] args) throws IOException{
		int portnum=30001;
		//Socket socket = new Socket(args[0], Integer.parseInt;
		String msg = new String("second");
		Socket socket = new Socket("localhost" , portnum);
		BufferedReader br;
		BufferedWriter bw;
		br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
		
		//출력 스트림으로 에코 메세지 내보내기
		bw.write(msg + "1\n"); 
		bw.flush();
		
		//입력 스트림으로 에코 메시지 읽기
		System.out.println(br.readLine());
		System.out.println(br.readLine());
		System.out.println(br.readLine());
		
		
		br.close();
		bw.close();
		socket.close();
	}
}
