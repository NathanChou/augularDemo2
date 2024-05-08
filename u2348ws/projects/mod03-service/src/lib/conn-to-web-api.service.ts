import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnToWebAPIService {

  constructor(private http: HttpClient) { }
  readonly rootUrl = "https://mod08api01.azurewebsites.net";
  Get117(): Observable<string> {
    return this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' });
    //  this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' })
    // .subscribe(
    //   {
    //     next: resp => console.log(resp),
    //     error: error => console.log(error)
    //   }
    // );

  }

  public GetWeatherForecast() {
    return this.http.get<WeatherForecast[]>(`${this.rootUrl}/WeatherForecast`);
  }

  public GetUser(id: number) : Observable<User> {
    return this.http.get<User>(`${this.rootUrl}/WeatherForecast/${id}`);
  }
  GetUserByOptions(id: number, observe: string) {
    let options: any;
    switch (observe) {
      case "body":
        options = { observe: 'body' as 'body', responseType: 'text' as 'text' };
        break;
      case "response":
        options = { observe: 'response' as 'response', responseType: 'text' as 'text' };
        break;
      default:
        options = {};
    }
    return this.http.get(`${this.rootUrl}/WeatherForecast/${id}`,
      options);
  }
  POSTUser(user: User) {
    return this.http.post(`${this.rootUrl}/WeatherForecast/`,
      user, { responseType: 'text' });
  }
  GetDownload(file: string){
    return this.http.get(`${this.rootUrl}/WeatherForecast/download/${file}`,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob'
      });
  }
}
export interface WeatherForecast {
  "date": Date,
  "temperatureC": number,
  "temperatureF": number,
  "summary": string
}
export class User {
  constructor(
      public id: number,
      public name: string) { }
}