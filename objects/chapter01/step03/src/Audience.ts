import Bag from './Bag';
import Ticket from './Ticket';

class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}

export default Audience;