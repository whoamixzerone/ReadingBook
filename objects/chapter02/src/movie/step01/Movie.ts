import Money from '../../money/Money';
import Screening from './Screening';
import { Duration } from 'js-joda';
import DiscountPolicy from './DiscountPolicy';

class Movie {
  private title: string;

  private runningTime: Duration;

  private fee: Money;

  private discountPolicy: DiscountPolicy;

  constructor(title: string, runningTime: Duration, fee: Money, discountPolicy: DiscountPolicy) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee(): Money {
    return this.fee;
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
  }
}

export default Movie;