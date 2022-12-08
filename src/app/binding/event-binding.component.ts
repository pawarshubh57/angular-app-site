import { Component } from "@angular/core";

@Component({
    selector: 'app-event',
    templateUrl: './event-binding.component.html'
})

export class EventBindingComponent{
    onSave(){
        alert('This is event binding!!!');
    }
 
    gfg(event: any) {
        console.log(event.toElement.value);
    }
}