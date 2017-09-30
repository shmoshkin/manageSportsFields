import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';
import '../../rxjs-operators';
import { Field } from './field';

@Injectable()
export class FieldService {

  constructor(private _http: Http) { }

  getFields() {
      return this._http.get('api/fields')
        .map((response: Response) => response.json().data);
  }

  getField(id: number): Observable<any> {
      return this._http.get(`api/fields/${id}`)
      .map((response: Response) => response.json().data);
  }
}
