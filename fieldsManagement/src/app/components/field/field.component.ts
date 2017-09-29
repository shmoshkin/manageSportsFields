import { Injectable, Component, OnInit } from '@angular/core';
import { Field } from './field';
import { FieldService } from './field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit {
  
  field: Field;

  constructor(private _fieldService: FieldService){} 

  ngOnInit() {
    this._fieldService.getField(1).subscribe(
      (field: Field) => {
      this.field = field;
    });
  }
}
