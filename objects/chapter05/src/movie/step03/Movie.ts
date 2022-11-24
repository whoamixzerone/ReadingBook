import Money from '../../money/Money';
import Screening from './Screening';
import { Duration, IllegalStateException } from '@js-joda/core';
import MovieType from './MovieType';
import DiscountCondition from './DiscountCondition';

class Movie {
  private title!: string;

  private runningTime!: Duration;

  private fee!: Money;

  private discountConditions?: DiscountCondition[];

  private movieType!: MovieType;

  private discountAmount?: Money;

  private discountPercent?: number;

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditions?.some(condition => condition.isSatisfiedBy(screening)) as boolean;
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