import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorService } from '../doctorService/doctor.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  doctorForm !: FormGroup;
  /*   save: any; */
  actionBtn: string = 'save'

  constructor(private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      email: ['', Validators.required],
      fach: ['', Validators.required],
      adresse: ['', Validators.required],
      stadt: ['', Validators.required],
      telefonnummer: ['', Validators.required],
      sprache: ['', Validators.required],
    });
    console.log(this.editData);
    if (this.editData) {
      this.actionBtn = 'Update';
      this.doctorForm.controls['vorname'].setValue(this.editData.vorname);
      this.doctorForm.controls['nachname'].setValue(this.editData.nachname);
      this.doctorForm.controls['email'].setValue(this.editData.email);
      this.doctorForm.controls['fach'].setValue(this.editData.fach);
      this.doctorForm.controls['adresse'].setValue(this.editData.adresse);
      this.doctorForm.controls['stadt'].setValue(this.editData.stadt);
      this.doctorForm.controls['telefonnummer'].setValue(this.editData.telefonnummer);
      this.doctorForm.controls['sprache'].setValue(this.editData.vornspracheame);
    }
  }
  addDoctor() {
    console.log(this.doctorForm.value);
    if (!this.editData) {
      if (this.doctorForm.valid) {
        this.doctorService.addDoctor(this.doctorForm.value)
          .subscribe({
            next: (res) => {
              alert('Doctor added successfully')
              this.doctorForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('Error while adding Doctors!')
            }
          })
      }
    } else {
      this.updateDoctor();
    }
  }
  updateDoctor() {
    this.doctorService.putDoctor(this.doctorForm.value, this.editData._id)
      .subscribe({
        next:(res) => {
          alert('Doctor Updated Successfully');
          this.doctorForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('Eroor while Updating the Doctor');
        }
      })
  }

}