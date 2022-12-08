
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
    selector: 'app-countdown-parent-lv',
    templateUrl: './countdown-parent.component.html',
    styleUrls:['../../assets/demo.css']
})

export class CountdownLocalVarParentComponent implements AfterViewInit {

    @ViewChild(CountdownTimerComponent)
    private timerComponent!: CountdownTimerComponent;
    seconds() { return 0; }
    ngAfterViewInit(): void {
       setTimeout(() => this.seconds =() =>this.timerComponent.seconds , 0)
    }
    start(){
        this.timerComponent.start();
    }
    stop(){
        this.timerComponent.stop();
    }

}