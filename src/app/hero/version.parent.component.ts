import {Component} from '@angular/core';
@Component({
    template: `
    <h2>Source code version</h2>
    <button type="button" (click)="newMinor()">New minor version</button>
    <button type="button" (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})

export class VersionParentComponent{
    major = 1;
    minor = 23;
    
}