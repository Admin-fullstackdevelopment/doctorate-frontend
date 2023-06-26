import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'; // dialog
import { DialogComponent } from '../dialog/dialog.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from '../doctorService/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {

  displayedColumns: string[] = ['vorname', 'nachname', 'email', 'fach', 'adresse', 'stadt', 'telefonnummer', 'sprache', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  // Click dialog open
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllDoctors();
      }
    })
  }

  getAllDoctors() {
    this.doctorService.getDoctor()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert('Error while fetching (get) the Records!!');
        }
      })
  }
  editDoctor(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => { // After Close
      if (val === 'update') {
        this.getAllDoctors();
      }
    })
  }

   deleteDoctor(row: any) {
    console.log(row._id)
    this.doctorService.deleteDoctor(row._id)
      .subscribe({
        next: (res) => {
          alert('Delete Successfully')
          console.log(row)
          this.getAllDoctors();
        },
        error: () => {
          alert('Error while deleting the Doctor');
        }
      })
  }

  // this Methode will be worked the Filter 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
