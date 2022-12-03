
import {Component} from '@angular/core';

@Component({
    selector: 'app-ngif',
    templateUrl: './hello-world-ngif.component.html',
    styleUrls: ['./hello-world-ngif.component.css']
})

export class HelloWorldNgIfComponent {

    message = "I am read only!!"
    canEdit = false;
    onEditClick(){
       this.canEdit  = !this.canEdit;
       if(this.canEdit){
        this.message = 'You can edit me!!'
       }else{
          this.message = "I am read only!!!!!"
       }
    }
}