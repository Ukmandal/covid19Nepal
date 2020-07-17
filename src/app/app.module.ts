import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  

import { AppComponent } from './app.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  
import { HttpClientModule } from '@angular/common/http';  
import { MatCardModule } from '@angular/material/card';  
import { MatSelectModule } from '@angular/material/select';  
import { DatePipe } from '@angular/common';
import { NepalDataComponent } from './nepal-data/nepal-data.component';
import { Covid19npService } from './services/covid19np.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({  
  declarations: [  
    AppComponent, 
    NepalDataComponent  
  ],  
  imports: [  
    BrowserModule,  
    BrowserAnimationsModule,  
    HttpClientModule,  
    MatCardModule,  
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MDBBootstrapModule.forRoot()
  ],  
  providers: [DatePipe, Covid19npService],  
  bootstrap: [AppComponent]  
})  

export class AppModule { }  