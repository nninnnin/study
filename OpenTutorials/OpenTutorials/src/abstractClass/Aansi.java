package abstractClass;

public abstract class A { //?????? ????? ??????? ??? ??????? ??? ??????? ???, ????????? ??????? ??? ??? abstract?? ??��?.
	public abstract int b(); //?????? (???? ??????? ?????? ????, abstract?? ?????)

	public void d() { //????? ?????? ??? ???? abstract?? ????? ?????? ????. abstract?? ????, abstract??? ????? ????????!
		System.out.println("world");
	}
}


//?????? A?? ????? ???? B
class B extends A{
	public int b() { //A?? ??? ?????? b?? overriding???
		return 1; //????? ???
}
}
