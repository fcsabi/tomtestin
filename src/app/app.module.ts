/*
* File:
* Author: Farkas Csaba
* Copyright: 2023, Farkas CSaba
* Group: Szoft I/N
* Date: 2023-02-07
* Github: https://github.com/fcsabi/
* Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TomegComponent } from './tomeg/tomeg.component';

@NgModule({
  declarations: [
    AppComponent,
    TomegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
