import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styles: [
  ]
})
export class Demo4Component {
  time: any;
  rptTime:any;
  asyncTime: Observable<string> | any;
  readonly rootUrl = "https://mod08api01.azurewebsites.net";
  constructor(private http: HttpClient){

  }
 start117() {
    // this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' })
    // .subscribe(
    //   (t)=> this.time= t
    // );

    // this.asyncTime = this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' });

    this.rptTime = interval(1000)
      .subscribe((t) => {
        this.asyncTime = this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' });
      });


 }

}
