import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicsListComponent } from './clinics/clinics-list/clinics-list.component';
import { ClinicDetailComponent } from './clinics/clinic-detail/clinic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorListComponent ,
    DoctorDetailComponent ,
    DashboardComponent,
    ClinicDetailComponent,
    ClinicsListComponent,
      ClinicsComponent,
    ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
