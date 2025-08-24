package essence.of.oop.chapter01;

public class Customer {

    private String orderMenu;

    public Customer(String orderMenu) {
        this.orderMenu = orderMenu;
    }

    public String getCoffee() {
        return orderMenu;
    }

    public Coffee order(Cashier cashier) {
        return cashier.receiveOrder(orderMenu);
    }

}
