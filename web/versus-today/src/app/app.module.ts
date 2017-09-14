import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MdGridListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { ArgumentComponent } from './argument/argument.component'
import { MdIconModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    ArgumentComponent
  ],
  imports: [
    BrowserModule,
    MdGridListModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }