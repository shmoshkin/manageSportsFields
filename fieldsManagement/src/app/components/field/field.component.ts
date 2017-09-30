import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Field } from './field';
import { FieldService } from './field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit {
  
  @Input() field: Field;

  constructor(private _fieldService: FieldService){} 

  ngOnInit() {
  }
}
