import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { FromsModule } from '@angular/forms';

import { AppComponent } from './app.component'; //this is so type scriture can find it for bundeling
import { ServerComponent } from './server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
   // FromsModule,
   // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
