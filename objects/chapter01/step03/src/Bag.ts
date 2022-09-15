import Invitation from './Invitation';
import Ticket from './Ticket';

class Bag {
  private amount: number;

  private invitation?: Invitation;

  private ticket?: Ticket;

  constructor(amount: number, invitation?: Invitation) {
    if (invitation) {
      this.invitation = invitation;
    }
    this.amount = amount;
  }

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      // 가방에 초대장이 있으면 티켓을 가방에 넣는다
      // 초대장을 티켓으로 교환하기 때문에 티켓 가격 0 반환
      this.setTicket(ticket);
      return 0;
    } else {
      // 초대장이 없으면 티켓 가격만큼 현금을 차감하고
      // 티켓을 가방에 넣고 티켓 가격 반환
      this.minusAmount(ticket.getFee());
      this.setTicket(ticket);
      return ticket.getFee();
    }
  }

  private hasInvitation(): boolean {
    return !!this.invitation;
  }

  hasTicket(): boolean {
    return !!this.ticket;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  plusAmount(amount: number): void {
    this.amount += amount;
  }
}

export default Bag;