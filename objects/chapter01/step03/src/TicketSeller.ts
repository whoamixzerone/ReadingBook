import TicketOffice from './TicketOffice';
import Audience from './Audience';

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  /**
   * 아래 코드는 TicketOffice에 캡슐화로
   * ticketOffice 구현이 아닌 인터페이스에만 의존하게 변경은 됐지만
   * 다른 문제가 있어서 원래의 step02의 구현으로 복구해야 한다.
   * 이유는 TicketOffice.ts에서 참고
   */
  sellTo(audience: Audience): void {
    this.ticketOffice.sellTicketTo(audience);
  }
}

export default TicketSeller;