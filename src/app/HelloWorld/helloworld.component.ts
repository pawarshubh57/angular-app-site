import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    templateUrl: './helloworld.component.html',
    styleUrls: ['./helloworld.component.css']
})

export class HelloWorldComponent {
  message = "Hello world!!!";

  sayMessage(){
    alert(this.message);
  }
}