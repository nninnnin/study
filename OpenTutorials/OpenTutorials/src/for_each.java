import java.util.ArrayList;

public class for_each {
	
			
	
	
	public static void main(String[] args) {
		String[] numbers = {"one","two","three"};
		
		//일반 for문
		for(int i=0;i<numbers.length;i++) {
			System.out.println(numbers[i]);
		}
		
		//for each구조로 변경
		for(String number : numbers) {
			System.out.println(number);
		}
	
		//일반화시켜보면
//		for (type var : iterate) {
//			body-of-loop
//		}
		
		/*위 iterate는 루프를 돌릴 객체이고
		 * iterate 객체에서 한개씩 순차적으로 var에 대입되어
		 * for 문을 수행하게 된다.
		 * iterate 부분에 들어가는 타입은 
		 * 루프를 돌릴 수 있는 형태인 배열, 또는 ArrayList등이 가능하다.
		*/
		
		
		//ArrayList로 예제를 재구현.
		ArrayList<String> numbersAL = new ArrayList<String>();
		numbersAL.add("oneAL");
		numbersAL.add("twoAL");
		numbersAL.add("threeAL");
		
		
		for(String number : numbersAL) {
		System.out.println(number);
		}
		
		// **단, for each문은 따로 반복횟수를 명시적으로 주는 것이 불가능하고, 1 스탭씩 순차적으로 반복될 때에만 사용 가능하다는 제약이 있다.
	
	}
	
}
