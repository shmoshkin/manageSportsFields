import { Injectable, Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Field } from './field';
import { FieldService } from './field.service';
import {MaterializeAction} from 'angular2-materialize';
import {InvitationDetailsComponent} from '../invitation-details/invitation-details.component'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit {
  
  @Input() field: Field;
  modalActions;
  model1Params;

  constructor(private _fieldService: FieldService)
  {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
    this.model1Params = [
    {
      dismissible: false,
      complete: function() { console.log('Closed'); }
    }
  ]
  } 

  ngOnInit() {
    
  }   

  onOpenFIeld() {
    this.modalActions.emit({action:"modal",params:['open']});       
  }  
}
