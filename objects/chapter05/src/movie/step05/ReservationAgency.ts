import Screening from './Screening';
import Customer from '../Customer';
import Reservation from './Reservation';
import Movie from './Movie';
import DiscountCondition from './DiscountCondition';
import Money from '../../money/Money';
import { IllegalArgumentException } from '@js-joda/core';
import MovieType from './MovieType';

class ReservationAgency {
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const discountable: boolean = this.checkDiscountable(screening);
    const fee: Money = this.calculateFee(screening, discountable, audienceCount);
    return this.createReservation(screening, customer, audienceCount, fee);
  }

  private checkDiscountable(screening: Screening): boolean {
    return screening.getMovie().getDiscountConditions().some((condition: DiscountCondition) => condition.isDiscountable(screening));
  }

  private calculateFee(screening: Screening, discountable: boolean, audienceCount: number): Money {
    if (discountable) {
      return screening.getMovie().getFee()
        .minus(this.calculateDiscountedFee(screening.getMovie()))
        .times(audienceCount);
    }

    return screening.getMovie().getFee().times(audienceCount);
  }

  private calculateDiscountedFee(movie: Movie): Money {
    switch (movie.getMovieType()) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.calculateAmountDiscountedFee(movie);
      case MovieType.PERCENT_DISCOUNT:
        return this.calculatePercentDiscountedFee(movie);
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountedFee(movie);
    }

    throw new IllegalArgumentException();
  }

  private calculateAmountDiscountedFee(movie: Movie): Money {
    return movie.getDiscountAmount();
  }

  private calculatePercentDiscountedFee(movie: Movie): Money {
    return movie.getFee().times(movie.getDiscountPercent());
  }

  private calculateNoneDiscountedFee(movie: Movie): Money {
    return movie.getFee();
  }

  private createReservation(screening: Screening, customer: Customer,
                            audienceCount: number, fee: Money) {
    return new Reservation(customer, screening, fee, audienceCount);
  }
}

export default ReservationAgency;