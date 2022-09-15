import Bag from './Bag';
import Ticket from './Ticket';

class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy(ticket: Ticket): number {
    if (this.bag.hasInvitation()) {
      // 가방에 초대장이 있으면 티켓을 가방에 넣는다
      // 초대장을 티켓으로 교환하기 때문에 티켓 가격 0 반환
      this.bag.setTicket(ticket);
      return 0;
    } else {
      // 초대장이 없으면 티켓 가격만큼 현금을 차감하고
      // 티켓을 가방에 넣고 티켓 가격 반환
      this.bag.minusAmount(ticket.getFee());
      this.bag.setTicket(ticket);
      return ticket.getFee();
    }
  }
}

export default Audience;