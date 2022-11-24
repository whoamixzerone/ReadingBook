import Money from '../../money/Money';
import Screening from './Screening';
import { Duration, IllegalStateException } from '@js-joda/core';
import MovieType from './MovieType';
import PeriodCondition from './PeriodCondition';
import SequenceCondition from './SequenceCondition';

class Movie {
  private title!: string;

  private runningTime!: Duration;

  private fee!: Money;

  private movieType!: MovieType;

  private discountAmount?: Money;

  private discountPercent?: number;

  private periodConditions?: PeriodCondition[];

  private sequenceConditions?: SequenceCondition[];

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.checkPeriodConditions(screening) || this.checkSequenceConditions(screening);
  }

  private checkPeriodConditions(screening: Screening): boolean {
    return this.periodConditions?.some(condition => condition.isSatisfiedBy(screening)) as boolean;
  }

  private checkSequenceConditions(screening: Screening): boolean {
    return this.sequenceConditions?.some(condition => condition.isSatisfiedBy(screening)) as boolean;
  }

  private calculateDiscountAmount(): Money {
    switch (this.movieType) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.calculateAmountDiscountAmount();
      case MovieType.PERCENT_DISCOUNT:
        return this.calculatePercentDiscountAmount();
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountAmount();
    }

    throw new IllegalStateException();
  }

  private calculateAmountDiscountAmount(): Money {
    return this.discountAmount as Money;
  }

  private calculatePercentDiscountAmount(): Money {
    return this.fee.times(this.discountPercent as number);
  }

  private calculateNoneDiscountAmount(): Money {
    return Money.ZERO;
  }
}

export default Movie;