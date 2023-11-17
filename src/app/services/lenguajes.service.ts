import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string = "https://apirest-23fde-default-rtdb.firebaseio.com/v1/topList.json"

  constructor(private http: HttpClient) { }
  
  getListLanguges(): Observable<any>
  {
    return this.http.get(this.url);
  }

  postLanguage(body:any): Observable<any>
  {
    return this.http.post(this.url, body)
  }

}
