import { Component } from "@angular/core";

@Component({
    selector: 'app-style',
    template: `<nav [style]='navStyle'>
      <a [style.text-decoration]="activeLinkStyle">Home Page</a>
      <a [style.text-decoration]="linkStyle">Login</a>
       </nav>`
})
export class StyleBindingComponent{
    navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
    linkStyle = 'underline';
    activeLinkStyle = 'overline';
}