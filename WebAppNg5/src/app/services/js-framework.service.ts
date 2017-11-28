import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class JsFrameworkService {

  constructor( private http: Http) {}

  GetJsFrameWork(){
    let uri = "http://localhost:5000/api/Values";
    return this.http.get(uri).map((res: Response) => { return res.json() });
  }
}
