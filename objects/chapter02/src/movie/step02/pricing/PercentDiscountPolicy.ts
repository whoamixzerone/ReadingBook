import DefaultDiscountPolicy from '../DefaultDiscountPolicy';
import DiscountCondition from '../DiscountCondition';
import Screening from '../Screening';
import Money from '../../../money/Money';

class PercentDiscountPolicy extends DefaultDiscountPolicy {
  private percent: number;

  constructor(percent: number, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.percent = percent;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}

export default PercentDiscountPolicy;