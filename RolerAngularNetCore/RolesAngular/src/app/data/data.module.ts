import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[DataComponent]
})
export class DataModule { }
