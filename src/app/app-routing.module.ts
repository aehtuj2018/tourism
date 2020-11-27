import { WeatherDetailsComponent } from './component/weather-details/weather-details.component';
import { TechIdeasComponent } from './component/tech-ideas/tech-ideas.component';
import { WeatherComponent } from './component/weather/weather.component';
import { CitiesComponent } from './component/cities/cities.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'techideas', component: TechIdeasComponent},
  {path: 'weather/:name/:SringN/:SpringM/:SummerM/:SummerN/:SummerM/:WinterN/:WinterM/:AutumnN/:AutumnM/:visitFrom/:visitTo', component: WeatherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
