import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {prohibited} from './../CustomValidator/prohibited'

import { GetCityNamesService } from './../../services/get-city-names.service';
@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {

  //cities=["Aswan","Cairo","Luxor","Sharm El-Sheikh"];
  cities;
  techIdeasForm; //:any[]=[];

  constructor(private _cityname:GetCityNamesService, private formB:FormBuilder) { }

  ngOnInit(): void {


    this.cities=this._cityname.getNames();

    this.techIdeasForm = this.formB.group({

      name:["",[Validators.required, Validators.minLength(2),prohibited(/tourist/i)]],
      age:[""],
      email:["",[Validators.required]],
      city:["",[Validators.required]],
      brief:["",[Validators.required, Validators.minLength(100),prohibited(/nothing/i)]]
    });

  }

  get name(){
    return this.techIdeasForm.get('name');
  }

  onClick()
  {
    console.log(this.techIdeasForm.controls.brief.value)
    this.techIdeasForm.reset();
  }
}
