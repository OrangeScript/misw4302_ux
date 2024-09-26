import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDetailDialogComponent } from './device-detail-dialog/device-detail-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDeviceDetailDialog(): void {
    const dialogRef = this.dialog.open(DeviceDetailDialogComponent, {
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
