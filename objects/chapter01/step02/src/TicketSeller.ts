import TicketOffice from './TicketOffice';
import Audience from './Audience';
import Ticket from './Ticket';

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience): void {
    const ticket: Ticket | undefined = this.ticketOffice.getTicket();
    if (ticket) {
      this.ticketOffice.plusAmount(audience.buy(ticket));
    }
  }
}

export default TicketSeller;