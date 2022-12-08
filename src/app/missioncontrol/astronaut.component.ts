import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MissionService } from "../mission.service";
@Component({
    selector: 'app-astronaut',
    templateUrl: './astronaut.component.html'
})

export class AstronautComponent implements OnDestroy {
    @Input() astronaut: string = "";
    mission: string = "<No Mission announced>";
    confirmed = false;
    announced = false;
    subscription : Subscription;
    constructor(private missionService : MissionService){
        this.subscription = missionService.missionAnnounced.subscribe(mission => {
            this.mission = mission;
            this.announced = true;
            this.confirmed = false;
        });
    }

    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }
    ngOnDestroy() {        
        this.subscription.unsubscribe();
    }
}