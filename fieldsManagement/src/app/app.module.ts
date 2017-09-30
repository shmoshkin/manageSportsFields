import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FieldComponent } from './components/field/field.component';
import { FieldsDisplayComponent } from './components/fields-display/fields-display.component';
import { InvitationDetailsComponent } from './components/invitation-details/invitation-details.component';

import { InMemoryService } from '../api-mocks/api-mocks';
import { FieldService } from './components/field/field.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../environments/environment';

// development dependencies
let devImportsOnly = [];
if (environment.dataMocking) {
  devImportsOnly = [
    InMemoryWebApiModule.forRoot(InMemoryService, { passThruUnknownUrl: true }) 
  ];
}

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
    ...devImportsOnly
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
