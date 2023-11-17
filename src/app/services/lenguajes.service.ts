import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string = "https://apirest-23fde-default-rtdb.firebaseio.com/v1/topList1.json";

  constructor(private http: HttpClient) { }
  getLenguajes(): Observable<any>
  {
    return this.http.get(this.url);
  }
}
