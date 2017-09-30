import { Component, OnInit } from '@angular/core';
import { FieldService } from '../field/field.service';
import { Field } from '../field/field';

@Component({
  selector: 'app-fields-display',
  templateUrl: './fields-display.component.html',
  styleUrls: ['./fields-display.component.scss']
})
export class FieldsDisplayComponent implements OnInit {

  constructor(private _fieldService: FieldService) { }

  fields: Field[];

  ngOnInit() {
    this._fieldService.getFields().subscribe((fields) => {
      this.fields = fields;
    });
  }

}
