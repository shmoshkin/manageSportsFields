import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  constructor() { }

  id: number;
  location: string;
  name: string;
  type: number;
  imgUrl: string;
  available: boolean;

  ngOnInit() {

  }

}
