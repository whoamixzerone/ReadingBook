import Screening from './Screening';

class SequenceCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return this.sequence == screening.getSequence();
  }
}

export default SequenceCondition;