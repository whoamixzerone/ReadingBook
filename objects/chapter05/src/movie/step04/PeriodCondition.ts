import { DayOfWeek, LocalTime } from '@js-joda/core';
import Screening from './Screening';
import DiscountCondition from './DiscountCondition';

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
    return this.dayOfWeek.equals(screening.getWhenScreened().dayOfWeek()) &&
      this.startTime.compareTo(screening.getWhenScreened().toLocalTime()) <= 0 &&
      this.endTime.compareTo(screening.getWhenScreened().toLocalTime()) >= 0;
  }
}

export default PeriodCondition;