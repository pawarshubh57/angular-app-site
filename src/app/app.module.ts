import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldBindingsComponent } from './HelloWorld/hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './HelloWorld/hello-world-ngif/hello-world-ngif.component';
import { HelloWorldComponent } from './HelloWorld/helloworld.component';
import { HeroChildComponent } from './hero/hero-child.component';
import { HeroParentComponent } from './hero/hero-parent.component';
import { NameChildComponent } from './hero/name-child.component';
import { NameParentComponent } from './hero/name-parent.component';
import { VersionChildComponent } from './hero/version-child.component';

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
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
