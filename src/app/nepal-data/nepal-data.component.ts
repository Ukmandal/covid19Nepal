import { Component, OnInit } from '@angular/core';
import { Covid19npService } from '../services/covid19np.service';
import { NepalData } from '../models/nepal-data';
import { NepalDistrictData } from '../models/nepal-district-data';
import { NepalHospitalData } from '../models/nepal-hospital-data';
import { NepaltimelineData } from '../models/nepaltimeline-data';
import { AllworldData } from '../models/allworld-data';
import { Allworld } from '../models/allworld';

@Component({
  selector: 'app-nepal-data',
  templateUrl: './nepal-data.component.html',
  styleUrls: ['./nepal-data.component.css']
})
export class NepalDataComponent implements OnInit {
  nepalData: NepalData;
  nepalDistrictsData: NepalDistrictData;
  nepalHospitalData: NepalHospitalData;
  nepaltimelineData: NepaltimelineData;
  allWorld: Allworld;
  allworldData: AllworldData;
  public now: Date = new Date();
  constructor(private service: Covid19npService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit(): void {
    this.getNepalData(); 
    this.getNepalDistrictsData(); 
    this.getNepalHospitalsData();
    this.getNepaltimelineData(); 
    this.getWorldsData(); 
    this.getAllworldsData(); 
  }

  getNepalData(){
    this.service.getCovid19npList().subscribe(response=> {
      this.nepalData = response;
     })
  }

  getNepalDistrictsData(){
    this.service.getCovid19DistrictList().subscribe(response=> {
      this.nepalDistrictsData = response;
     })
  }
  getNepalHospitalsData(){
    this.service.getHospitalsnpList().subscribe(response=> {
      this.nepalHospitalData = response;
     })
  }
  
  getNepaltimelineData(){
    this.service.gettimelinenpList().subscribe(response=> {
      this.nepaltimelineData = response;
     })
  }
  getWorldsData(){
    this.service.getWorldList().subscribe(response=> {
      this.allWorld = response;
     })
  }
  getAllworldsData(){
    this.service.getWorldDataList().subscribe(response=> {
      this.allworldData = response;
     })
  }

}
