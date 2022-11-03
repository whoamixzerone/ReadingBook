import Movie from './Movie';
import { LocalDateTime } from '@js-joda/core';

class Screening {
  private movie!: Movie;

  private sequence!: number;

  private whenScreened!: LocalDateTime;

  getMovie(): Movie {
    return this.movie;
  }

  setMovie(movie: Movie): void {
    this.movie = movie;
  }

  getWhenScreened(): LocalDateTime {
    return this.whenScreened;
  }

  setWhenScreended(whenScreended: LocalDateTime) {
    this.whenScreened = whenScreended;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }
}

export default Screening;