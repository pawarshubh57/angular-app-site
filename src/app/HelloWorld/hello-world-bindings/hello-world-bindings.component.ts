import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    templateUrl: './hello-world-bindings.component.html',
    styleUrls: ['./hello-world-bindings.component.css']
})

export class HelloWorldBindingsComponent{
    fontColor= "red";
    sayHelloId = 1;
    canClick = false;
    message = "Hello world binding"

    sayMessage(){
        alert(this.message);
    }
}