import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-invitation-details',
  templateUrl: './invitation-details.component.html',
  styleUrls: ['./invitation-details.component.scss']
})
export class InvitationDetailsComponent implements OnInit {
  
  toastActions = new EventEmitter<string|MaterializeAction>();
  
  constructor() { }

  ngOnInit() {
  }

  onCancelInvitation(){

  }

  onAgreeInvitation(){
    
    this.toastActions.emit('toast')
  }
}
