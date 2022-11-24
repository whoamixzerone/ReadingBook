import Movie from './Movie';
import Money from '../../money/Money';
import { Duration } from '@js-joda/core';
import DiscountCondition from './DiscountCondition';

class AmountDiscountMovie extends Movie {
  private discountAmount: Money;

  constructor(title: string, runningTime: Duration,
              fee: Money, discountConditions: DiscountCondition[], discountAmount: Money) {
    super(title, runningTime, fee, ...discountConditions);
    this.discountAmount = discountAmount;
  }

  protected calculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}

export default AmountDiscountMovie;