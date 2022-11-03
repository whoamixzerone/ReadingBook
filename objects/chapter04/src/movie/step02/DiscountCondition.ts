import DiscountConditionType from './DiscountConditionType';
import { DayOfWeek, IllegalArgumentException, LocalTime } from '@js-joda/core';

class DiscountCondition {
  private type!: DiscountConditionType;

  private sequence?: number;

  private dayOfWeek?: DayOfWeek;

  private startTime?: LocalTime;

  private endTime?: LocalTime;

  getType(): DiscountConditionType {
    return this.type;
  }

  isDiscountable(sequence: number): boolean;
  isDiscountable(sequence: number, dayOfWeek: DayOfWeek, time: LocalTime): boolean;
  isDiscountable(sequence: number, dayOfWeek?: DayOfWeek, time?: LocalTime): boolean {
    if (arguments.length > 1) {
      if (this.type != DiscountConditionType.PERIOD) {
        throw new IllegalArgumentException();
      }
      if (!time) throw new IllegalArgumentException();

      return this.dayOfWeek!.equals(dayOfWeek) &&
        this.startTime!.compareTo(time) <= 0 &&
        this.endTime!.compareTo(time) >= 0;
    }

    return this.sequence == sequence;
  }
}

export default DiscountCondition;