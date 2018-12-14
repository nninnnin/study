//교재 59페이지 UDP Echo Client

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoClient
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
		bw.write(msg + "1\n"); bw.flush();
		
		System.out.println(br.readLine());
		System.out.println(br.readLine());
		System.out.println(br.readLine());
		
		
		br.close();
		bw.close();
		socket.close();
	}
}
