import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeatherService } from '../services/current-weather.service';
import {WeatherData} from '../model/model';

//import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})



export class WeatherDetailComponent implements OnInit {

  WeatherResult : any;

  constructor(private Weather: CurrentWeatherService) { }
  //constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.http.get<any>(`${environment.openweather_url}Singapore&units=${environment.system}&APPID=${environment.openweather_api_key}`)
    this.Weather.getWeather('Singapore')
    .subscribe((data: any) => {
      
      this.WeatherResult = data;
      console.log(this.WeatherResult);
      //weather code http://openweathermap.org/img/w/10d.png
    })
  }

}

