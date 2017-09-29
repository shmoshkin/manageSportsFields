import {Injectable, Component, OnInit } from '@angular/core';
import {materialize, Materialize} from 'materialize-css'
import { Field } from './field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit {
  
  field: Field;

  constructor(){} 

  ngOnInit() {
  
  }

  

  onAddField(){    
    
    // Add some code for open card
  }
}
