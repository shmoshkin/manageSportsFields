import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FieldComponent } from './components/field/field.component';
import { FieldsDisplayComponent } from './components/fields-display/fields-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FieldComponent,
    FieldsDisplayComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
