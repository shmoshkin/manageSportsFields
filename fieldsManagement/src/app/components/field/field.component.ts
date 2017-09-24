import { Component, OnInit } from '@angular/core';
import {materialize, Materialize} from 'materialize-css'  
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

  onAddField(){
    debugger;
    Materialize.toast('I am a toast', 4000,'',function(){
      alert('Your toast was dismissed')
    })
  }
}
