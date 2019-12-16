import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { TimesComponent } from './times/times.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table';
import { ScrambleComponent } from './scramble/scramble.component'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimesComponent,
    ScrambleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
