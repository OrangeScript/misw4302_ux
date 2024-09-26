import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-device-detail-dialog',
  templateUrl: './device-detail-dialog.component.html',
  styleUrls: ['./device-detail-dialog.component.css']
})
export class DeviceDetailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeviceDetailDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
