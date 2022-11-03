import { Duration, IllegalArgumentException, LocalDateTime } from '@js-joda/core';
import { List } from 'immutable';
import Money from '../../money/Money';
import DiscountCondition from './DiscountCondition';
import MovieType from './MovieType';
import DiscountConditionType from './DiscountConditionType';

class Movie {
  private title!: string;

  private runningTime!: Duration;

  private fee!: Money;

  private discountConditions!: Array<DiscountCondition>;

  private movieType!: MovieType;

  private discountAmount?: Money;

  private discountPercent?: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  calculateAmountDiscountedFee(): Money {
    if (this.movieType != MovieType.AMOUNT_DISCOUNT) {
      throw new IllegalArgumentException();
    }

    if (!this.discountAmount) return this.fee;

    return this.fee.minus(this.discountAmount);
  }

  calculatePercentDiscountedFee(): Money {
    if (this.movieType != MovieType.PERCENT_DISCOUNT) {
      throw new IllegalArgumentException();
    }

    if (!this.discountPercent) return this.fee;

    return this.fee.minus(this.fee.times(this.discountPercent));
  }

  calculateNoneDiscountedFee(): Money {
    if (this.movieType != MovieType.NONE_DISCOUNT) {
      throw new IllegalArgumentException();
    }

    return this.fee;
  }

  isDiscountable(whenScreened: LocalDateTime, sequence: number): boolean {
    for(const condition of this.discountConditions) {
      if (condition.getType() == DiscountConditionType.PERIOD) {
        if (condition.isDiscountable(0, whenScreened.dayOfWeek(), whenScreened.toLocalTime())) {
          return true;
        }
      } else {
        if (condition.isDiscountable(sequence)) {
          return true;
        }
      }
    }

    return false;
  }
}

export default Movie;