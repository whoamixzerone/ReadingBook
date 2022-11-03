import Movie from './Movie';
import { LocalDateTime } from '@js-joda/core';
import Money from '../../money/Money';
import MovieType from './MovieType';

class Screening {
  private movie!: Movie;

  private sequence!: number;

  private whenScreened!: LocalDateTime;

  constructor(movie: Movie, sequence: number, whenScreened: LocalDateTime) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  calculateFee(audienceCount: number): Money {
    switch (this.movie.getMovieType()) {
      case MovieType.AMOUNT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie.calculateAmountDiscountedFee().times(audienceCount);
        }
        break;
      case MovieType.PERCENT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie.calculatePercentDiscountedFee().times(audienceCount);
        }
        break;
      case MovieType.NONE_DISCOUNT:
        return this.movie.calculateNoneDiscountedFee().times(audienceCount);
    }

    return this.movie.calculateNoneDiscountedFee().times(audienceCount);
  }
}

export default Screening;