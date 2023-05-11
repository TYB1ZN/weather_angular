import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/invironment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
   }
   getWeatherData(nameCity: string){
    this.http.get(environment.weatherApiBaseUrl,{headers: new  HttpHeaders()
    .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
    .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)})
   }
}
