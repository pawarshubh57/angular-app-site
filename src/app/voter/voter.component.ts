import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-voter',
    templateUrl: './voter.component.html'
})

export class VoterComponent{
    @Input() name: string = "";
    @Output() voted = new EventEmitter<boolean>();
    didVote: boolean = false;
    vote(agreed: boolean): void{
       this.voted.emit(agreed)
      this.didVote = false;
    }
}