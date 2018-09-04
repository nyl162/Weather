import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeatherService } from '../services/current-weather.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})



export class WeatherDetailComponent implements OnInit {

  WeatherResult : any;

  constructor(private Weather: CurrentWeatherService, private activatedRoute:ActivatedRoute, private router: Router) { }
  //constructor(private http: HttpClient) { }

  ngOnInit() {
    const cityID: string = this.activatedRoute.snapshot.params.RouteCityID;
    console.log(cityID);
    //this.http.get<any>(`${environment.openweather_url}Singapore&units=${environment.system}&APPID=${environment.openweather_api_key}`)
    this.Weather.getWeather(cityID)
    .subscribe((data: any) => {
      
      this.WeatherResult = data;
      console.log(this.WeatherResult);
      //weather code http://openweathermap.org/img/w/10d.png
    })
  }
  goBack(){
    
    console.log('Go Back');
    this.router.navigate(['/']);
  }
}

