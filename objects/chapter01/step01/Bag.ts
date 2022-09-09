import Invitation from "./Invitation";
import Ticket from "./Ticket";

class Bag {
    private amount!: number;

    private invitation?: Invitation;

    private ticket?: Ticket;

    constructor(amount: number, invitation?: Invitation) {
        if (invitation) {
            this.invitation = invitation;
        }
        this.amount = amount;
    }

    hasInvitation(): boolean {
        return !!this.invitation;
    }

    hasTicket(): boolean {
        return !!this.ticket;
    }

    setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }

    minusAmount(amount: number): void {
        this.amount -= amount;
    }

    plusAmount(amount: number): void {
        this.amount += amount;
    }
}

export default Bag;