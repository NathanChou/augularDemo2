import { Component } from '@angular/core';
import { DeviceInfo, BatteryInfo, DeviceId, LanguageTag, Device } from '@capacitor/device';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {
  info!:DeviceInfo;
  bInfo!:BatteryInfo;
  lang!:LanguageTag;
  id!:DeviceId;



  async ngOnInit():Promise<void> {
    this.info = await Device.getInfo();
    this.bInfo = await Device.getBatteryInfo();
    this.lang = await Device.getLanguageTag();
    this.id = await Device.getId();
  }
}
