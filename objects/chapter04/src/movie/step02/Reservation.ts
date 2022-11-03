import Screening from './Screening';
import Money from '../../money/Money';
import Customer from './Customer';

class Reservation {
  private customer!: Customer;

  private screening!: Screening;

  private fee!: Money;

  private audienceCount!: number;


  constructor(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  getScreening(): Screening {
    return this.screening;
  }

  setScreening(screening: Screening): void {
    this.screening = screening;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getAudienceCount(): number {
    return this.audienceCount;
  }

  setAudienceCount(audienceCount: number) {
    this.audienceCount = audienceCount;
  }
}

export default Reservation;