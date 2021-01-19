import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {appId, citids } from './constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCitiesData(): Observable<any> {
    let s = ''+[...citids];
    return this.http.get(`${environment.baseUrl}group?id=${s}&appid=${appId}`);
  }

  getForecastData(id: any) {
    return this.http.get(`${environment.baseUrl}forecast?id=${id}&appid=${appId}`)
  }
}
