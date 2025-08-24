package essence.of.oop.chapter01;

public class Cashier {
    private Barista barista;

    public Cashier(Barista barista) {
        this.barista = barista;
    }

    public Coffee receiveOrder(String orderMenu) {
        return barista.makeCoffee(orderMenu);
    }

}
