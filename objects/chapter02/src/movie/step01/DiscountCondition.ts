import Screening from './Screening';

interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}

export default DiscountCondition;