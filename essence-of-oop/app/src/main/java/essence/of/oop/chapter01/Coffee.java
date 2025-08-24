package essence.of.oop.chapter01;

public class Coffee {
    private String name;

    public Coffee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Coffee [name=" + name + "]";
    }
    
}
