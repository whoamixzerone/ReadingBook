import Screening from './Screening';
import Customer from './Customer';
import Reservation from './Reservation';
import Movie from './Movie';
import DiscountConditionType from './DiscountConditionType';
import Money from '../../money/Money';
import MovieType from './MovieType';

class ReservationAgency {
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const movie: Movie = screening.getMovie();

    let discountable: boolean = false;
    for (const condition of movie.getDiscountConditions()) {
      if (condition.getType() == DiscountConditionType.PERIOD) {
        discountable = screening.getWhenScreened().dayOfWeek().equals(condition.getDayOfWeek()) &&
          condition.getStartTime().compareTo(screening.getWhenScreened().toLocalTime()) <= 0 &&
          condition.getEndTime().compareTo(screening.getWhenScreened().toLocalTime()) >= 0;
      } else {
        discountable = condition.getSequence() == screening.getSequence();
      }

      if (discountable) break;
    }

    let fee: Money;
    if (discountable) {
      let discountAmount: Money = Money.ZERO;
      switch (movie.getMovieType()) {
        case MovieType.AMOUNT_DISCOUNT:
          discountAmount = movie.getDiscountAmount();
          break;
        case MovieType.PERCENT_DISCOUNT:
          discountAmount = movie.getFee().times(movie.getDiscountPercent());
          break;
        case MovieType.NONE_DISCOUNT:
          discountAmount = Money.ZERO;
          break;
      }

      fee = movie.getFee().minus(discountAmount);
    } else {
      fee = movie.getFee();
    }

    return new Reservation(customer, screening, fee, audienceCount);
  }
}

export default ReservationAgency;