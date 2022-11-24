import DiscountConditionType from './DiscountConditionType';
import { DayOfWeek, LocalTime } from '@js-joda/core';
import Screening from './Screening';

class DiscountCondition {
  private type: DiscountConditionType;

  private sequence?: number;

  private dayOfWeek?: DayOfWeek;

  private startTime?: LocalTime;

  private endTime?: LocalTime;

  constructor(...args: any) {
    if (arguments.length <= 2) {
      this.type = DiscountConditionType.SEQUENCE;
      this.sequence = args.sequence;
    } else {
      this.type = DiscountConditionType.PERIOD;
      this.dayOfWeek = args.dayOfWeek;
      this.startTime = args.startTime;
      this.endTime = args.endTime;
    }
  }

  isDiscountable(screening: Screening): boolean {
    if (this.type == DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  isSatisfiedByPeriod(screening: Screening): boolean {
    return screening.getWhenScreened().dayOfWeek().equals(this.dayOfWeek) &&
      (this.startTime as LocalTime).compareTo(screening.getWhenScreened().toLocalTime()) <= 0 &&
      (this.endTime as LocalTime).compareTo(screening.getWhenScreened().toLocalTime()) >= 0;
  }

  isSatisfiedBySequence(screening: Screening): boolean {
    return this.sequence == screening.getSequence();
  }
}

export default DiscountCondition;