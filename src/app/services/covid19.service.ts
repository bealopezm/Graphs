import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  url: string = 'https://api.covid19api.com/total/country/'
  constructor(private httpClient: HttpClient) { }

  getCountry(pCountry: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.url + pCountry))
  }
  getAllCountry(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>('https://api.covid19api.com/summary'))
  }
}
