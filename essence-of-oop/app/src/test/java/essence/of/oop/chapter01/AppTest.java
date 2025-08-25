package essence.of.oop.chapter01;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

public class AppTest {

    @DisplayName("손님은 커피를 주문할 수 있다")
    @Test
    void orderCoffee() {
        // Arrange
        Customer customer = new Customer("아메리카노");
        Barista barista = new Barista();
        Cashier cashier = new Cashier(barista);
        
        // Act
        Coffee coffee = customer.order(cashier);
        
        // Assert
        assertThat(coffee).isNotNull();
        assertThat(coffee.getName()).isEqualTo("아메리카노");
    }

    @DisplayName("캐시어는 바리스타에게 커피 제조를 요청할 수 있다")
    @Test
    void cashierRequestsCoffee() {
        // Arrange
        Barista barista = new Barista();
        Cashier cashier = new Cashier(barista);
        
        // Act
        Coffee coffee = cashier.receiveOrder("라떼");
        
        // Assert
        assertThat(coffee).isNotNull();
        assertThat(coffee.getName()).isEqualTo("라떼");
    }

    @DisplayName("바리스타는 커피를 제조할 수 있다")
    @Test
    void makeCoffee() {
        // Arrange
        Barista barista = new Barista();
        
        // Act
        Coffee coffee = barista.makeCoffee("카푸치노");
        
        // Assert
        assertThat(coffee).isNotNull();
        assertThat(coffee.getName()).isEqualTo("카푸치노");
    }
}
