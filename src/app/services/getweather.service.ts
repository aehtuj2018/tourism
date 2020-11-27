import { Injectable } from '@angular/core';

import {CitiesWeather} from  './../component/weather/city-info-data';



@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  getWeather(): any[] {
    return CitiesWeather;
  }

  constructor() { }
}
