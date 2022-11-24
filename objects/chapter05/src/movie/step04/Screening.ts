import Customer from "../Customer";
import Reservation from "./Reservation";
import { LocalDateTime } from '@js-joda/core';
import Money from '../../money/Money';
import Movie from "./Movie";

class Screening {
  private movie!: Movie;

  private sequence!: number;

  private whenScreened!: LocalDateTime;

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  getWhenScreened(): LocalDateTime {
    return this.whenScreened;
  }

  getSequence(): number {
    return this.sequence;
  }
}

export default Screening;