import { Component, ViewChild, inject } from '@angular/core';
import { Cities, CityBy7Days } from '../service/city-by7-days';
import { CwbodService } from '../service/cwbod.service';
import { MatSelect } from '@angular/material/select';
import { MapServiceService } from '../service/map-service.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styles: [
  ]
})
export class WeeklyWeatherComponent {
  @ViewChild(MatSelect) citySelect!:MatSelect;

  weatherData: CityBy7Days[] | null =null;
  cities = Cities;
  local!:string;
  code!:string;

  searchCity: string = "";
  // service =inject(CwbodService);

  constructor(private service: CwbodService, private map: MapServiceService) {

  }


  searchChanged(city:string) {
   this.service.get7Days(city).subscribe(
    result=> this.weatherData=result
   );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.map.GetCity().then((r => r.subscribe((city) => {
      this.code = city.fullName;
      this.local = city.name;
      this.citySelect.value = this.local;
      this.searchChanged(this.local);
    })));
  }
}
