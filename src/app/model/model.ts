export class WeatherData {
    
    constructor(

    public coord: {lat: number,lon:number},
    public main: {humidity:number, temp:number},
    public name: string
    ){}
  }