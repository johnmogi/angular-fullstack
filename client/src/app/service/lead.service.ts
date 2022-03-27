import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../models/Lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  public myApi = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.myApi + "leads");
  }

}
