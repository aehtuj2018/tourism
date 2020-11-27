import { Injectable, Component } from '@angular/core';
import {CitiesInfo} from  './../component/cities/cities-info-data';
import {cityInfo} from  './../component/cities/cities-info';

@Injectable({
  providedIn: 'root',

})

export class GetcitiesService {

  getCities(): cityInfo[] {
    return CitiesInfo;

  }

  constructor() { }
}
