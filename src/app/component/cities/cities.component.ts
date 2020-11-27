import { GetcitiesService } from './../../services/getcities.service';
import { Component, OnInit } from '@angular/core';
import { CitiesInfo } from './cities-info-data';
import { cityInfo } from './cities-info';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  Cities;
  color;

  constructor(private _cities:GetcitiesService) { }

  ngOnInit() {
    this.Cities=this._cities.getCities();
    this.color=this.colorit();

  }
colorit()
{
  for(var i=0;i<this.Cities.length;i++)
  {
if(this.Cities[i].attractions.length < 3)
return false;
  }
  return true;
}

}
