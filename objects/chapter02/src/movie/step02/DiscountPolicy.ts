import Screening from './Screening';
import Money from '../../money/Money';

interface DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;