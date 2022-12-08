
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MissionService{
    missionAnnouncedSource: Subject<string> = new Subject<string>();
    missionConfirmedSource: Subject<string> = new Subject<string>();

    missionAnnounced = this.missionAnnouncedSource.asObservable();
    missionConfirmed = this.missionConfirmedSource.asObservable();

    announceMission(mission: string){
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: string){
        this.missionConfirmedSource.next(astronaut);
    }
}