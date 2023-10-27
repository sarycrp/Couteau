import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneroPService {

  name:string="";
  constructor(public _http: HttpClient) { 

  }

  getData<T>(url: string){
    return this._http.get<T[]>('https://api.genderize.io/?name='+this.name);
  }
}
