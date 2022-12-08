import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { AdDirective } from "../ad.directive";
import { AdItem } from "./ad-item";

@Component({
    selector: 'ad-banner',
    templateUrl: './ad-banner.component.html'
})

export class AdBannerComponent implements OnInit {  
    @Input() ads: AdItem[] = [];

    currentAdIndex = -1;

    @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
    interval: number | undefined = 0;

    ngOnInit(): void {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
        componentRef.instance.data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
export interface AdComponent {
    data: any;
}