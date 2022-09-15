import Bag from './Bag';

class Audience {
  private bag!: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  getBag(): Bag {
    return this.bag;
  }
}

export default Audience;