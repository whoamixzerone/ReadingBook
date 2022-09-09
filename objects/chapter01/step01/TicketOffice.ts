import Ticket from './Ticket';

class TicketOffice {
  private amount!: number;

  // private tickets!: Array<Ticket>;
  private tickets!: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = [...tickets];
  }

  getTicket(): Ticket | undefined {
    return this.tickets.shift();
  }

  minusAmount(amount: number): void {
    this.amount -= amount;
  }

  plusAmount(amount: number): void {
    this.amount += amount;
  }
}

export default TicketOffice;