import Screening from './Screening';
import Money from '../../money/Money';
import DiscountCondition from './DiscountCondition';
import DiscountPolicy from './DiscountPolicy';

abstract class DefaultDiscountPolicy implements DiscountPolicy {
  private readonly conditions: Array<DiscountCondition> = [];

  constructor(...conditions: DiscountCondition[]) {
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

export default DefaultDiscountPolicy;