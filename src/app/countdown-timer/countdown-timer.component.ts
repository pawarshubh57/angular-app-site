import { Component  } from "@angular/core";

@Component({
    selector: 'app-countdown-timer',
    templateUrl: './countdown-timer.component.html'
})
export class CountdownTimerComponent {
    seconds: number = 11;
    message: string = "";
    intervalId: number = 0;
    start(){
        this.countDown();
    }
    stop(){
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }
    private clearTimer() { clearInterval (this.intervalId);}
    private countDown(){
        this.clearTimer();
        this.intervalId = window.setInterval(() =>{
            this.seconds -= 1;
            if(this.seconds === 1) {
                this.message = "Blast off!!";
            }else{
                if(this.seconds < 0) {this.seconds = 10} 
                this.message = `T-${this.seconds} seconds and counting`;
            }            
        }, 1000)
    }
}