//교재 58페이지 UDP Echo Server

import java.net.*;
import java.io.*;
import java.util.*;

public class EchoServer{

	public static void main(String[] args) throws IOException {
		int portnum = 30001;
		//ServerSocket ss = new ServerSocket(Integer.parseInt(args[1]));
		ServerSocket ss = new ServerSocket(portnum);
		System.out.println(portnum + "Port Echo Server Running");
		while(true) {
			Socket socket = ss.accept();
			System.out.println(new Date().toString() + ":" + socket.toString());
			BufferedReader br;
			BufferedWriter bw;
			br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
			
			String temp = br.readLine();
			bw.write(temp + "1\n");bw.flush();
			bw.write(temp + "2\n");bw.flush();
			bw.write(temp + "3\n");bw.flush();
			
			
			br.close();
			bw.close();
			socket.close();
		}
		
	}
}
