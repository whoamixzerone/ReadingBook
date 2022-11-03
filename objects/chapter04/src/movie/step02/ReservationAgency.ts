import Screening from './Screening';
import Customer from './Customer';
import Reservation from './Reservation';
import Money from '../../money/Money';

class ReservationAgency {
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const fee: Money = screening.calculateFee(audienceCount);

    return new Reservation(customer, screening, fee, audienceCount);
  }
}

export default ReservationAgency;