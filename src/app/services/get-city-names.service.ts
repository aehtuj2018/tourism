import { GetweatherService } from './getweather.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {
arrayWeather;
arrayNames:any[]=[];

  constructor(private _getW:GetweatherService) { }
  getNames()
  {
    this.arrayWeather=this._getW.getWeather();

   for(var i=0;i<this.arrayWeather.length;i++)
    {

      this.arrayNames.push( this.arrayWeather[i].name );

    }


    return this.arrayNames;
  }
}
