import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {WeatherData} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city): Observable<any>{
    return this.http.get<any>(`${environment.openweather_url}${city}&units=${environment.system}&APPID=${environment.openweather_api_key}`);
  }

}
