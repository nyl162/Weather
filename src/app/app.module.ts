import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatModule} from './material.module';
import { FormsModule } from '@angular/forms';
import { CityInputComponent } from './city-input/city-input.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { RoutingModule } from './routing.modules';



@NgModule({
  declarations: [
    AppComponent,
    CityInputComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
