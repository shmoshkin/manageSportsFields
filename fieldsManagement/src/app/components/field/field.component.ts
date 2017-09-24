import {Injectable, Component, OnInit } from '@angular/core';
import {materialize, Materialize} from 'materialize-css'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
@Injectable()
export class FieldComponent implements OnInit {
  
  private id: number;
  private location: string;
  private name: string;
  private type: number;
  private imgUrl: string;
  private available: boolean;
  private description: string
  
  constructor() {} 

  ngOnInit() {

  }

  onAddField(){    
    
    // Add some code for open card
  }
}
