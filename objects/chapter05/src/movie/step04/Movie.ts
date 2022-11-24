import Money from '../../money/Money';
import Screening from './Screening';
import { Duration } from '@js-joda/core';
import DiscountCondition from './DiscountCondition';

abstract class Movie {
  private title: string;

  private runningTime: Duration;

  private fee: Money;

  private discountConditions: DiscountCondition[];

  constructor(title: string, runningTime: Duration, fee: Money, ...discountConditions: DiscountCondition[]) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;
  }

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditions?.some(condition => condition.isSatisfiedBy(screening)) as boolean;
  }

  protected abstract calculateDiscountAmount(): Money;

  protected getFee(): Money {
    return this.fee;
  }
}

export default Movie;