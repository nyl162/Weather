import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from "@angular/core";
import { CityInputComponent } from "./city-input/city-input.component";
import { WeatherDetailComponent } from "./weather-detail/weather-detail.component";

const appRoutes :Routes = [

    {path: '' , component: CityInputComponent},
  //  {path: '/Weather/:CityID' , component: WeatherDetailComponent},
    {path: '**' , redirectTo: '/', pathMatch: 'full'}

];



@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
  })

export class RoutingModule {}