import DiscountConditionType from './DiscountConditionType';
import { DayOfWeek, LocalTime } from '@js-joda/core';

class DiscountCondition {
  private type!: DiscountConditionType;

  private sequence?: number;

  private dayOfWeek?: DayOfWeek;

  private startTime?: LocalTime;

  private endTime?: LocalTime;

  getType(): DiscountConditionType {
    return this.type;
  }

  setType(type: DiscountConditionType): void {
    this.type = type;
  }

  getDayOfWeek(): DayOfWeek {
    return this.dayOfWeek as DayOfWeek;
  }

  setDayOfWeek(dayOfWeek: DayOfWeek): void {
    this.dayOfWeek = dayOfWeek;
  }

  getStartTime(): LocalTime {
    return this.startTime as LocalTime;
  }

  setStartTime(startTime: LocalTime): void {
    this.startTime = startTime;
  }

  getEndTime(): LocalTime {
    return this.endTime as LocalTime;
  }

  setEndTime(endTime: LocalTime): void {
    this.endTime = endTime;
  }

  getSequence(): number {
    return this.sequence as number;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }
}

export default DiscountCondition;