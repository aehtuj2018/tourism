import { Component, OnInit } from '@angular/core';
import { GetweatherService } from './../../services/getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weatherData;
  constructor(private _weatherData:GetweatherService) { }

  ngOnInit(): void {
    this.weatherData=this._weatherData.getWeather();
  }

}
