import DiscountPolicy from '../DiscountPolicy';
import Screening from '../Screening';
import Money from '../../../money/Money';
import DiscountCondition from '../DiscountCondition';

class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.discountAmount = discountAmount;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}

export default AmountDiscountPolicy;