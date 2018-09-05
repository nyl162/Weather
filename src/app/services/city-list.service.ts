import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  private citylistS: string[] = [];

  constructor() {
    this.citylistS = [
      'Singapore',
      'Kuala Lumpur',
      'Tokyo',
      'Hong Kong',
      'Beijing'
    ]
   }
   
   AddCityS(n:string){
    this.citylistS.push(n);
   }

   ReadCityS(){
     return this.citylistS;
   }
}
