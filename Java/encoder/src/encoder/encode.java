package encoder;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class encode {
	
	public static void encoder() throws Exception {
		//스트림을 열어주자
		//BufferedReader는 성능향상 보조스트림,
		//InputStreamReader는 문자변환 보조스트림.
		InputStreamReader isr = new InputStreamReader(new FileInputStream("C:\\Users\\nninn\\Desktop\\OpenTutorials\\OpenTutorials\\src\\abstractClass\\A.java"), "MS949");
		BufferedReader in = new BufferedReader(isr);
	
		//여기도 스트림을..
		//마찬가지로 BufferedWriter는 성능향상 보조스트림,
		//OutputStreamWriter는 문자변환 보조스트림이다.
		BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("C:\\Users\\nninn\\Desktop\\OpenTutorials\\OpenTutorials\\src\\abstractClass\\A.txt"), "UTF-8"));
	
		int readCharNo;
		char[] cbuf = new char[100]; //InputStreamReader로 받은 데이터를 담아줄 배열 (문자형이므로 byte가 아닌 char!)
		
		//먼저 괄호 안 조건은, InputStram Reader의 정보들이 담긴 cbuf에 더 이상 read할 것이 없어져 -1을 뱉지 않는다면 이하를 실행하라 - 이다.
		while((readCharNo = isr.read(cbuf)) != -1) {
			//요 라인은 
			String data = new String(cbuf, 0, readCharNo);
			System.out.println(data);
		}
		
		in.close();
		out.close();
	}
	
	
	public static void main(String[] args) {
		try {
		encoder();
		System.out.println("success!");
		}
		catch(Exception e) {
		}
		finally {
		}
	}
}
