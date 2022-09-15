import Ticket from './Ticket';
import Audience from './Audience';

class TicketOffice {
  private amount: number;

  // private tickets!: Array<Ticket>;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = [...tickets];
  }

  /**
   * TicketSeller.ts에 있던 구현을 여기에서 구현하여 캡슐화
   * 데이터와 프로세스가 한 객체에서 이루어지도록 했지만
   * 기존에 audience의 의존성이 없었는데 이 구현으로 인해 새로 생겼다.
   * TicketOffice의 자율성보다 결합도를 낮추는 목적으로 인해 step02 코드로 복
   */
  sellTicketTo(audience: Audience): void {
    const ticket: Ticket | undefined = this.getTicket();
    if (ticket) {
      this.plusAmount(audience.buy(ticket));
    }
  }

  private getTicket(): Ticket | undefined {
    return this.tickets.shift();
  }

  minusAmount(amount: number): void {
    this.amount -= amount;
  }

  private plusAmount(amount: number): void {
    this.amount += amount;
  }
}

export default TicketOffice;