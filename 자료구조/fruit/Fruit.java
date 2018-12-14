public class Fruit{
    public String name;
    public String color;



    public Fruit(String name, String color){
        this.name = name;
        this.color = color;
    }

    public Fruit getFruitInstance(){
        return this;
    }
}