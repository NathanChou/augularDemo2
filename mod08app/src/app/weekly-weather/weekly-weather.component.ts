import { Component, inject } from '@angular/core';
import { Cities, CityBy7Days } from '../service/city-by7-days';
import { CwbodService } from '../service/cwbod.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styles: [
  ]
})
export class WeeklyWeatherComponent {
  weatherData: CityBy7Days[] | null =null;
  cities = Cities;
  searchCity: string = "";
  service =inject(CwbodService) ;


  searchChanged(city:string) {
   this.service.get7Days(city).subscribe(
    result=> this.weatherData=result
   );
  }
}
