import { Component } from '@angular/core';

@Component({
    selector: 'app-vote-taker',
    templateUrl: './votetaker.component.html'
})

export class VoteTakerComponent {
    agreed = 0;
    disagreed = 0;
    voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

    onVoted(agreed: boolean) {
        if (agreed) {
            this.agreed++;
        } else {
            this.disagreed++;
        }
    }
}