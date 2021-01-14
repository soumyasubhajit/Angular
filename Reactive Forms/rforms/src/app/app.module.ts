import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}from "@angular/forms";
import { AppComponent } from './app.component';
import {CardformComponent}from '../app/cardform/cardform.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
//import { IConfig, NgxMaskModule}from 'ngx-mask';

//export const options: Partial<IConfig>|(()=>Partial<IConfig>)={};

@NgModule({
  declarations: [
    AppComponent,CardformComponent, InputComponent, CardComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,//NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
