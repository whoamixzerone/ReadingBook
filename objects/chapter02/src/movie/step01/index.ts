import { Duration, DayOfWeek, LocalTime } from 'js-joda'
import Movie from './Movie';
import Money from '../../money/Money';
import AmountDiscountPolicy from './pricing/AmountDiscountPolicy';
import SequenceCondition from './pricing/SequenceCondition';
import PeriodCondition from './pricing/PeriodCondition';
import PercentDiscountPolicy from './pricing/PercentDiscountPolicy';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const avator: Movie = new Movie("아바타",
  Duration.ofMinutes(120),
  Money.wons(10000),
  new AmountDiscountPolicy(Money.wons(800),
    new SequenceCondition(1),
    new SequenceCondition(10),
    new PeriodCondition(DayOfWeek.MONDAY, LocalTime.of(10, 0), LocalTime.of(11, 59)),
    new PeriodCondition(DayOfWeek.THURSDAY, LocalTime.of(10, 0), LocalTime.of(20, 59)))
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const titanic: Movie = new Movie("타이타닉",
  Duration.ofMinutes(180),
  Money.wons(11000),
  new PercentDiscountPolicy(0.1,
    new PeriodCondition(DayOfWeek.TUESDAY, LocalTime.of(14, 0), LocalTime.of(16, 59)),
    new SequenceCondition(2),
    new PeriodCondition(DayOfWeek.THURSDAY, LocalTime.of(10, 0), LocalTime.of(13, 59)))
);