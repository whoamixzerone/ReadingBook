package essence.of.oop.chapter01;

public class Barista {

    public Coffee makeCoffee(String orderMenu) {
        Coffee coffee = new Coffee(orderMenu);
        System.out.println(coffee + "를 만들었습니다.");
        return coffee;
    }

}
