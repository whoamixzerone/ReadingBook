import Screening from './Screening';
import DiscountCondition from './DiscountCondition';

class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return this.sequence == screening.getSequence();
  }
}

export default SequenceCondition;