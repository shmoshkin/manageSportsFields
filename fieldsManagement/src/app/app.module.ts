import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FieldComponent } from './components/field/field.component';
import { FieldsDisplayComponent } from './components/fields-display/fields-display.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from '../api-mocks/api-mocks';
import { FieldService } from './components/field/field.service';
import { InvitationDetailsComponent } from './components/invitation-details/invitation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FieldComponent,
    FieldsDisplayComponent,
    InvitationDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule
  ],
  providers: [InMemoryService, FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
