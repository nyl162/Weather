import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CityListService} from '../services/city-list.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {

  citylist: string[];

 // console.log('main' ,test[2]++);

  constructor(private router:Router,private CityListC: CityListService) { 

  this.citylist = CityListC.ReadCityS();
  }


  ngOnInit() {

  }
  addNewCity(data){
    if(!(this.citylist.some(x => x === data.value.city)) && data.value.city.length>0 ){
      //this.citylist.push(data.value.city);
      this.CityListC.AddCityS(data.value.city);
      
    }
    data.reset();
    console.log(this.citylist);
  }

  selectCity(dest:number){
    
    console.log(dest);
    this.router.navigate(['/Weather', dest]);
  }

}
