import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.css',
  ],
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openAddServiceDialog(event: MouseEvent): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddServiceDialogComponent, {
      width: '70%',
      height: '50%',
      maxHeight: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  ngOnInit() {
  }

}
