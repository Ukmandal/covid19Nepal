import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NepalData } from '../models/nepal-data';
import { NepalDistrictData } from '../models/nepal-district-data';
import { NepalHospitalData } from '../models/nepal-hospital-data';
import { AllworldData } from '../models/allworld-data';
import { Allworld } from '../models/allworld';
import { NepaltimelineData } from '../models/nepaltimeline-data';

@Injectable({
  providedIn: 'root'
})
export class Covid19npService {
 
  readonly APIUrl = 'https://nepalcorona.info/api/v1/data';
  readonly APIdistrictData = 'https://data.nepalcorona.info/api/v1/';
  readonly APIHospitals = 'https://nepalcorona.info/api/v1';
  readonly APItimeline = 'https://data.nepalcorona.info/api/v1/covid';
  readonly APIWorld = 'https://data.nepalcorona.info/api';
  readonly APIWorldData = 'https://nepalcorona.info/api/v1/data';
  
  constructor(private http: HttpClient,) { }

  getCovid19npList(): Observable<any> {
    return this.http.get<NepalData>(this.APIUrl + '/nepal');
  }

  getCovid19DistrictList(): Observable<any> {
    return this.http.get<NepalDistrictData>(this.APIdistrictData + '/districts');
  }

  getHospitalsnpList(): Observable<any> {
    return this.http.get<NepalHospitalData>(this.APIHospitals + '/hospitals');
  }

  gettimelinenpList(): Observable<any> {
    return this.http.get<NepaltimelineData>(this.APItimeline + '/timeline');
  }
  
  getWorldList(): Observable<any> {
    return this.http.get<Allworld>(this.APIWorld + '/v1/world');
  }
  
  getWorldDataList(): Observable<any> {
    return this.http.get<AllworldData>(this.APIWorldData + '/world');
  }
}
