import { Component, OnInit } from '@angular/core';

import { DoctorService } from './../../shared/services/doctor.service';
import { Doctor } from './../../shared/models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
    doctors: Doctor[];

    constructor(private doctorService: DoctorService) { }

    ngOnInit() {
        this.loadDoctors();
    }

    public numToDay(nums: number[]) {
      const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
      let result = '';
      for(let n of nums) {
        result += days[n] + '، ';
      }
      let len = result.length;
      result = result.substring(0, len - 2);
      return result;
    }

    private loadDoctors() {
        this.doctorService.getDoctors()
            .subscribe(
            (data: Doctor[]) => this.doctors = data
            );
    }

}
