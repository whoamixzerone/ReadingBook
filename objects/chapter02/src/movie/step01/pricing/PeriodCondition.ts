import DiscountCondition from '../DiscountCondition';
import Screening from '../Screening';
import { DayOfWeek, LocalTime } from 'js-joda';

class PeriodCondition implements DiscountCondition {
  private dayOfWeek: DayOfWeek;

  private startTime: LocalTime;

  private endTime: LocalTime;

  constructor(dayOfWeek: DayOfWeek, startTime: LocalTime, endTime: LocalTime) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.getStartTime().dayOfWeek().equals(this.dayOfWeek) &&
      this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
      this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0;
  }
}

export default PeriodCondition;