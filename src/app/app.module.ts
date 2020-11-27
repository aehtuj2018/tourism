import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { CitiesComponent } from './component/cities/cities.component';
import { WeatherComponent } from './component/weather/weather.component';
import { TechIdeasComponent } from './component/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './component/weather-details/weather-details.component';
import { ImportantTextDirective } from './directive/important-text.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    TechIdeasComponent,
    WeatherDetailsComponent,
    ImportantTextDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
