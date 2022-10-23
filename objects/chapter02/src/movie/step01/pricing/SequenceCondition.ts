import DiscountCondition from '../DiscountCondition';
import Screening from '../Screening';

class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence);
  }
}

export default SequenceCondition;