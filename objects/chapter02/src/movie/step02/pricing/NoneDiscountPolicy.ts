import Money from '../../../money/Money';
import DiscountPolicy from '../DiscountPolicy';
import Screening from '../Screening';

class NoneDiscountPolicy implements DiscountPolicy {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  calculateDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }

}

export default NoneDiscountPolicy;