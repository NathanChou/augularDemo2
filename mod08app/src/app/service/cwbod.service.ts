import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { CityBy7Days } from './city-by7-days';

@Injectable({
  providedIn: 'root'
})
export class CwbodService {
  url = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/';
  apiKey = 'CWA-E9ABE3A5-E86E-4EEE-A9D0-83BF408D111A'; // <-- Enter your own key here!
  constructor(private http: HttpClient) { }

  paddingLeft(str: string, lenght: number): string {
    if (str.length >= lenght)
      return str;
    else
      return this.paddingLeft("0" + str, lenght);
  }
  private getMinT(element: any, days: string[], cityBy7Days: CityBy7Days[], city: string) {
    // console.log("最低溫度");
    element.time.forEach((time: any) => {
      // console.log(time);
      let d = time.startTime.toString().substr(0, 10);
      let t = time.startTime.toString().substr(11, 10);
      let w = days[(new Date(d)).getDay()];
      let c7days = cityBy7Days.find(c => c.City == city && c.Date == d);
      // console.log(`d:${d}, t:${t}, w:${w}`);
      // console.log(c7days);
      if (!c7days) {
        c7days = new CityBy7Days(city, d, w);
        cityBy7Days.push(c7days);
      }
      if (t.substr(0, 2) == "06" || t.substr(0, 2) == "12") {
        // console.log("白天");
        c7days.AMMinT = time.elementValue[0].value;
      }
      if (t.substr(0, 2) == "18") {
        // console.log("晚上");
        c7days.PMMinT = time.elementValue[0].value;
      }
    });
  }
  private getMaxT(element: any, days: string[], cityBy7Days: CityBy7Days[], city: any) {
    // console.log("最高溫度");
    element.time.forEach((time: any) => {
      let d = time.startTime.toString().substr(0, 10);
      let t = time.startTime.toString().substr(11, 10);
      let w = days[(new Date(d)).getDay()];
      let c7days = cityBy7Days.find(c => c.Date == d);
      if (!c7days) {
        c7days = new CityBy7Days(city, d, w);
        cityBy7Days.push(c7days);
      }
      if (t.substr(0, 2) == "06" || t.substr(0, 2) == "12") {
        // console.log("白天");
        c7days.AMMaxT = time.elementValue[0].value;
      }
      if (t.substr(0, 2) == "18") {
        // console.log("晚上");
        c7days.PMMaxT = time.elementValue[0].value;
      }
    });
  }
  private getWx(element: any, days: string[], cityBy7Days: CityBy7Days[], city: any) {
    // console.log("天氣現象");
    let wxBaseURL =
      "https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/";
    element.time.forEach((time: any) => {
      let d = time.startTime.toString().substr(0, 10);
      let t = time.startTime.toString().substr(11);
      let w = days[(new Date(d)).getDay()];
      let c7days = cityBy7Days.find(c => c.City == city && c.Date == d);
      if (!c7days) {
        c7days = new CityBy7Days(city, d, w);
        cityBy7Days.push(c7days);
      }
      let v1 = time.elementValue[0].value;
      if (t.substr(0, 2) == "06" || t.substr(0, 2) == "12") {
        // console.log("白天");
        let v2 = wxBaseURL + "day/" +
          this.paddingLeft(time.elementValue[1].value, 2) +
          ".svg";
        c7days.AMWX = v1;
        c7days.AMWXValue = v2;
        // console.log(`${c7days.AMWX} , ${c7days.AMWXValue}`)
      }
      if (t.substr(0, 2) == "18") {
        // console.log("晚上");
        c7days.PMWX = v1;
        let v2 = wxBaseURL + "night/" +
          this.paddingLeft(time.elementValue[1].value, 2) +
          ".svg";
        c7days.PMWXValue = v2;
        // console.log(`${c7days.PMWX} , ${c7days.PMWXValue}`)
      }
    });
  }
  get7Days(city: string) {
    let cityBy7Days: CityBy7Days[] = [];
    let url = `${this.url}F-D0047-091?Authorization=${this.apiKey}&locationName=${city}&elementName=MinT,MaxT,Wx`;
    return this.http.get(url).pipe(
      map(result => {
       return this.mapToCityBy7Days(cityBy7Days, result);
      })
    );

  }
  getAllCity() {

  }
  mapToCityBy7Days(cityBy7Days: CityBy7Days[], result: any) {
    let days: string[] = ["日", "一", "二", "三", "四", "五", "六"];
    let location = (result as any).records.locations[0].location;

    location.forEach((location: any) => {
      let city = location.locationName;
      console.log(city);
      let weatherElement = location.weatherElement;
      weatherElement.forEach((element: any) => {
        switch (element.elementName) {
          case "MinT":
            this.getMinT(element, days, cityBy7Days, city);
            break;
          case "MaxT":
            this.getMaxT(element, days, cityBy7Days, city);
            break;
          case "Wx":
            this.getWx(element, days, cityBy7Days, city);
            break;
        }
      });
    });
    return cityBy7Days;
  }
}
