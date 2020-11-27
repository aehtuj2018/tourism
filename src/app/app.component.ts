import { cityInfo } from './component/cities/cities-info';
import { HomeComponent } from './component/home/home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myname:string = 'Abdi T. Novemebr 2020, Edmonton, AB CANADA';
  cityInfo: cityInfo[];

}
