import java.net.DatagramPacket;
import java.net.DatagramSocket;



public class PushingClient {
	public static void main(String[] args) throws Exception{
		DatagramPacket packetIn = null;
		byte packetBuf[] = new byte[1024];
		
		
		//args[0]µµ ip
		DatagramSocket socket = new DatagramSocket(Integer.parseInt(args[0]));
		String dayTime;
		
		while(true) { //Àº¼öip : 97
			packetIn = new DatagramPacket(packetBuf,1024);
		socket.receive(packetIn);
		dayTime = new String(packetIn.getData(), 0, packetIn.getLength());
		System.out.println("Received:" + dayTime);
		}
		
	}
}
