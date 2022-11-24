import { LocalDateTime } from '@js-joda/core';
import Movie from './Movie';

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

  setWhenScreened(whenScreened: LocalDateTime): void {
    this.whenScreened = whenScreened;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }
}

export default Screening;