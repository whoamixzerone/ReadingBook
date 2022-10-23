import Movie from "./Movie";
import Customer from './Customer';
import Money from '../../money/Money';
import Reservation from './Reservation';
import { LocalDateTime } from 'js-joda';

class Screening {
  private movie: Movie;

  private sequence: number;

  private whenScreended: LocalDateTime;

  constructor(movie: Movie, sequence: number, whenScreended: LocalDateTime) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreended = whenScreended;
  }

  getStartTime(): LocalDateTime {
    return this.whenScreended;
  }

  isSequence(sequence: number): boolean {
    return this.sequence == sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}

export default Screening;