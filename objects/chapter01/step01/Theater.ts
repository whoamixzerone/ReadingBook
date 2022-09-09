import TicketSeller from './TicketSeller';
import Audience from './Audience';
import Ticket from './Ticket';

class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      // 초대장이 있으면
      // 판매원에게 초대장을 티켓으로 교환해서 가방에 넣는다
      const ticket: Ticket | undefined = this.ticketSeller.getTicketOffice().getTicket();
      if (!ticket) {
        return new Error('매진 되었습니다');
      }

      audience.getBag().setTicket(ticket);
    } else {
      // 초대장이 없으면 판매원에게 초대장을 구매
      // 가방에서 티켓 금액만큼 차감
      // 매표소는 금액만큼 증가
      // 티켓을 가방에 넣는다
      const ticket: Ticket | undefined = this.ticketSeller.getTicketOffice().getTicket();
      if (!ticket) {
        return new Error('매진 되었습니다');
      }

      audience.getBag().minusAmount(ticket.getFee());
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}

export default Theater;