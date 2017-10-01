import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-invitation-details',
  templateUrl: './invitation-details.component.html',
  styleUrls: ['./invitation-details.component.scss']
})
export class InvitationDetailsComponent implements OnInit {
  
  fieldName: string;
  times: string;
  location: string;
  toastActions = new EventEmitter<string|MaterializeAction>();
  maxLength = 20;

  constructor() 
  {
    this.times = "10 - 12 am, 12 march 2017";
    this.fieldName = "rabin - field 1";
    this.location = "hapashosh street 54"
  }

  ngOnInit() {
  }

  onCancelInvitation(){
    
  }

  onAgreeInvitation(){
    
    this.toastActions.emit('toast')
  }
}
