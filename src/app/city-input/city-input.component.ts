import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {

  citylist: string[] = [
    'Singapore',
    'Kuala Lumpur',
    'Tokyo',
    'Hong Kong',
    'Beijing'
  ]

  constructor() { }

  ngOnInit() {
  }
  addNewCity(data){
    if(!(this.citylist.some(x => x === data.value.city)) && data.value.city.length>0 ){
      this.citylist.push(data.value.city);
    }

    console.log(this.citylist);
  }

}
