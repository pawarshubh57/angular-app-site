import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownLocalVarParentComponent } from './countdown-timer/countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { HelloWorldBindingsComponent } from './HelloWorld/hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './HelloWorld/hello-world-ngif/hello-world-ngif.component';
import { HelloWorldComponent } from './HelloWorld/helloworld.component';
import { HeroChildComponent } from './hero/hero-child.component';
import { HeroParentComponent } from './hero/hero-parent.component';
import { NameChildComponent } from './hero/name-child.component';
import { NameParentComponent } from './hero/name-parent.component';
import { VersionChildComponent } from './hero/version-child.component';
import { AstronautComponent } from './missioncontrol/astronaut.component';
import { MissionControlComponent } from './missioncontrol/missioncontrol.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './voter/votetaker.component';
import { HeroAppComponent } from './hero/hero-app/hero-app.component';
import { HeroAppNewComponent } from './hero/hero-app-new/hero-app-new.component';
import { ZippyBasicComponent } from './content-projection/zippy-basic.component';
import { ZippyMultislotComponent } from './content-projection/zippy-multislot.component';
import { AttributeComponent } from './binding/attribute.component';
import { StyleBindingComponent } from './binding/style-binding.component';
import { EventBindingComponent } from './binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    AstronautComponent,
    MissionControlComponent,
    HeroAppComponent,
    HeroAppNewComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    AttributeComponent,
    StyleBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
