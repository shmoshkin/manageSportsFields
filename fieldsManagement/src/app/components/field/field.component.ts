import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize'
import { Field } from './field';
import{$} from 'jquery'
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit{
  
  field: Field;
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(){
    this.field = {
      id : 1,
      name : 'מגרש 1',
      location : 'רבין',
      isAvailable : true,
      type : 1
    };
   
  }    
  
  ngOnInit(): void {
    
    
  }
  
  onOpenField(){    
    
    //  this.modalActions.emit({action:"modal",params:['open']});
    //   setTimeout(function() {
    //       $('.datepicker').pickadate({
    //       selectMonths: true, // Creates a dropdown to control month
    //       selectYears: 15, // Creates a dropdown of 15 years to control year,
    //       today: 'Today',
    //       clear: 'Clear',
    //       close: 'Ok',
    //       closeOnSelect: false // Close upon selecting a date,
    //     });

    //      $('.timepicker').pickatime({
    //       default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    //       fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    //       twelvehour: false, // Use AM/PM or 24-hour format
    //       donetext: 'OK', // text for done-button
    //       cleartext: 'Clear', // text for clear-button
    //       canceltext: 'Cancel', // Text for cancel-button
    //       autoclose: false, // automatic close timepicker
    //       ampmclickable: true, // make AM PM clickable
    //       aftershow: function(){} //Function for after opening timepicker
    //     });
    //   }, 1000)
    
  }

  onCancelInvitation(){

  }

  onAgreeInvitation(){

  }
}
