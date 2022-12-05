import { Component, Input } from "@angular/core";
import {Hero} from '../hero'

@Component({
    selector: 'app-hero-child',
    templateUrl: './hero-child.component.html'
})

export class HeroChildComponent{
    @Input() singleHero!: Hero;
    @Input('master') masterName = '';
    @Input('number') number = 0;
}
