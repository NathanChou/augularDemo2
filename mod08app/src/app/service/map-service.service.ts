import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(private http:HttpClient) { }

  async GetCity() {
    let pos = await Geolocation.getCurrentPosition();
    let coords = pos.coords.latitude + "," + pos.coords.longitude;
    console.log(coords);

    return of({ fullName: coords, name: "臺北市"});
  }
}
