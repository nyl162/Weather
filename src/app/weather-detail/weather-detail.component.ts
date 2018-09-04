import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeatherService } from '../services/current-weather.service';

export interface WeatherData {
  coord: {lat: number,lon:number};
  main: {humidity:number, temp:number};
  name: string;
}

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})



export class WeatherDetailComponent implements OnInit {

  WeatherResult : WeatherData;

  constructor(private Weather: CurrentWeatherService) { }

  ngOnInit() {
    this.Weather.getWeather('Singapore')
    .subscribe((data: WeatherData) => {
      this.WeatherResult = data;
      console.log(this.WeatherResult);
      //weather code http://openweathermap.org/img/w/10d.png
    })
  }

}

