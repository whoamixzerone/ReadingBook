import { Duration } from '@js-joda/core';
import Money from '../../money/Money';
import DiscountCondition from './DiscountCondition';
import Movie from './Movie';

class NoneDiscountMovie extends Movie {
  constructor(title: string, runningTime: Duration, fee: Money, discountConditions: DiscountCondition[]) {
    super(title, runningTime, fee, ...discountConditions);
  }

  protected calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}

export default NoneDiscountMovie;