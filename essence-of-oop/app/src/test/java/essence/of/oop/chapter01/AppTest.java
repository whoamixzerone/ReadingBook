package essence.of.oop.chapter01;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

public class AppTest {

    @DisplayName("손님은 커피를 주문할 수 있다")
    @Test
    void orderCoffee() {
        Customer customer = new Customer("아메리카노");
        Barista barista = new Barista();
        Cashier cashier = new Cashier(barista);
        
        Coffee coffee = customer.order(cashier);
        
        assertThat(coffee).isNotNull();
        assertThat(coffee.getName()).isEqualTo("아메리카노");
    }
}
