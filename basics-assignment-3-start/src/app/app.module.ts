import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Seg1Component } from './seg1/seg1.component';
import { SubSeg1Component } from './seg1/sub-seg1/sub-seg1.component';

@NgModule({
  declarations: [
    AppComponent,
    Seg1Component,
    SubSeg1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
