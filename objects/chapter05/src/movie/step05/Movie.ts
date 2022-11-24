import Money from '../../money/Money';
import { Duration } from '@js-joda/core';
import DiscountCondition from './DiscountCondition';
import MovieType from './MovieType';

abstract class Movie {
  private title!: string;

  private runningTime!: Duration;

  private fee!: Money;

  private discountConditions!: DiscountCondition[];

  private movieType!: MovieType;

  private discountAmount?: Money;

  private discountPercent?: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  setMovieType(movieType: MovieType): void {
    this.movieType = movieType;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getDiscountConditions(): readonly DiscountCondition[] {
    return Object.freeze(this.discountConditions);
  }

  setDiscountConditions(discountConditions: DiscountCondition[]): void {
    this.discountConditions = discountConditions;
  }

  getDiscountAmount(): Money {
    return this.discountAmount as Money;
  }

  setDiscountAmount(discountAmount: Money): void {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discountPercent as number;
  }

  setDiscountPercent(discountPercent: number): void {
    this.discountPercent = discountPercent;
  }
}

export default Movie;