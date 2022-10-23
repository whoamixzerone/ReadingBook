import Screening from './Screening';
import Money from '../../money/Money';
import DiscountCondition from './DiscountCondition';

abstract class DiscountPolicy {
  private readonly conditions: Array<DiscountCondition> = [];

  protected constructor(...conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening): Money {
    for(const each of this.conditions) {
      if (each.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;