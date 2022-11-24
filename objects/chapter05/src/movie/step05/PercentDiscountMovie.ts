import { Duration } from '@js-joda/core';
import Money from '../../money/Money';
import DiscountCondition from './DiscountCondition';
import Movie from './Movie';

class PercentDiscountMovie extends Movie {
  private percent: number;

  constructor(title: string, runningTime: Duration, fee: Money, discountConditions: DiscountCondition[], percent: number) {
    super(title, runningTime, fee, ...discountConditions);
    this.percent = percent;
  }

  protected calculateDiscountAmount(): Money {
    return this.getFee().times(this.percent);
  }
}

export default PercentDiscountMovie;