import Big from 'big.js';

class Money {
  static readonly ZERO: Money = Money.wons(0);

  private readonly amount: Big;

  static wons(amount: number): Money {
    return new Money(new Big(amount));
  }

  constructor(amount: Big) {
    this.amount = amount;
  }

  plus(amount: Money): Money {
    return new Money(this.amount.plus(amount.amount));
  }

  minus(amount: Money): Money {
    return new Money(this.amount.minus(amount.amount));
  }

  times(percent: number): Money {
    return new Money(this.amount.times(new Big(percent)));
  }

  isLessThan(other: Money): boolean {
    return this.amount.cmp(other.amount) < 0;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount.cmp(other.amount) >= 0;
  }
}

export default Money;