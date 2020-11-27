import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetweatherService } from './../../services/getweather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

Name;
  SummerM;
  SummerN;
  WinterM;
  WinterN;
  SpringM;
  SpringN;
  AutumnM;
  AutumnN;
  visitTo;
  visitFrom;




  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private _weatherService:GetweatherService)  {
  }


  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => {
     this.Name = params.get('name');
     this.SpringN = params.get('SringN');
     this.SpringM = params.get('SpringM');
     this.SummerM = params.get('SummerM');
     this.SummerN = params.get('SummerN');
     this.WinterN = params.get('WinterN');
     this.WinterM = params.get('WinterM');
     this.AutumnM = params.get('AutumnM');
     this.AutumnN = params.get('AutumnN');
     this.visitTo = params.get('visitTo');
     this.visitFrom = params.get('visitFrom');


});


  }


  onBack(): void {
    this._router.navigate(['weather']);
 }
}
