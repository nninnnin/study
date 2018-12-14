package JavaTutorials;

public class Calculator {
	//필드(멤버변수) 선언
	int left, right;
	
	//설정자..setter(mutator)..인가?
	public void setOprands(int left, int right) {
		this.left = left;
		this.right = right;
	}
	
	
	public void sum() {
		System.out.println(this.left+this.right);
	}
	
	public void avg() {
		
	}

}
