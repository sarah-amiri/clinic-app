import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicDetailComponent } from './clinics/clinic-detail/clinic-detail.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    {
        path: 'doctors', children: [
            { path: '', component: DoctorsComponent, pathMatch: 'full' },
            { path: ':id', component: DoctorDetailComponent }
        ]
    },
    {
        path: 'clinics', component: ClinicsComponent, children: [
            { path: ':name', component: ClinicDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}