import { Component } from "@angular/core";
import { HEROES } from '../hero'

@Component({
    selector: 'app-hero-parent',
    templateUrl: './hero-parent.component.html'
})

export class HeroParentComponent{
    heroes = HEROES;
    master = "master";
    number: number = 12345;
}