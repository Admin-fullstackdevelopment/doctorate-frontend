import { Component } from '@angular/core';
import { DoctorService } from 'src/app/admin/add-doctor/doctorService/doctor.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  data: any = []

  img = './assets/public/doctor/anderea.jpg';

/*   
   imgx: any = [
    {id: 1, img: './assets/public/doctor/anderea.jpg'},
    {id: 2, text: ''},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
]; */

  constructor(private _doctorService: DoctorService) { }

  ngOnInit(): void {
    this._doctorService.getDoctor()
    .subscribe(
      res => this.data = res,
    )
  }
}
