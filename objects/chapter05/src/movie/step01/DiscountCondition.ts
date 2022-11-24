import Screening from './Screening';
import { DayOfWeek, LocalTime } from '@js-joda/core';
import DiscountConditionType from './DiscountConditionType';

class DiscountCondition {
  private type!: DiscountConditionType;

  private sequence?: number;

  private dayOfWeek?: DayOfWeek;

  private startTime?: LocalTime;

  private endTime?: LocalTime;

  isSatisfiedBy(screening: Screening): boolean {
    if (this.type == DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening): boolean {
    return (this.dayOfWeek as DayOfWeek).equals(screening.getWhenScreened().dayOfWeek()) &&
      (this.startTime as LocalTime).compareTo(screening.getWhenScreened().toLocalTime()) <= 0 &&
      (this.endTime as LocalTime).compareTo(screening.getWhenScreened().toLocalTime()) >= 0;
  }

  private isSatisfiedBySequence(screening: Screening): boolean {
    return this.sequence == screening.getSequence();
  }
}

export default DiscountCondition;