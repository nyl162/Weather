import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addNewCity(data){
    if(!(this.citylist.some(x => x === data.value.city)) && data.value.city.length>0 ){
      this.citylist.push(data.value.city);
      data.reset();
    }

    console.log(this.citylist);
  }

  selectCity(dest:string){
    
    console.log(dest);
    this.router.navigate(['/Weather', dest]);
  }

}
