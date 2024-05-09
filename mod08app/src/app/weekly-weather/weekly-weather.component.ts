import { Component, ViewChild, inject } from '@angular/core';
import { Cities, CityBy7Days } from '../service/city-by7-days';
import { CwbodService } from '../service/cwbod.service';
import { MatSelect } from '@angular/material/select';
import { MapServiceService } from '../service/map-service.service';
import { ConnectionStatus, Network } from '@capacitor/network';

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

  connected: boolean = false;
  connType: string = "";

  ChangeNetStatus(status: ConnectionStatus) {
    this.connected = status.connected;
    this.connType = status.connectionType.toString();
  }

  constructor(private service: CwbodService, private map: MapServiceService) {

  }


  searchChanged(city:string) {
   this.service.get7Days(city).subscribe(
    result=> this.weatherData=result
   );
  }

  async ngOnInit():Promise<void> {
    let status = await Network.getStatus();
    this.ChangeNetStatus(status);
    Network.addListener('networkStatusChange', status => {
      this.ChangeNetStatus(status);
    });
  }

  ngAfterViewInit() {
    this.map.GetCity().then((r => r.subscribe((city) => {
      this.code = city.fullName;
      this.local = city.name;
      this.citySelect.value = this.local;
      this.searchChanged(this.local);
    })));
  }
}
