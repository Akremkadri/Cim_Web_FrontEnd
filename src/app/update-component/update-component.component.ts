import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  picker1: any

  constructor( public dialogRef: MatDialogRef<UpdateComponentComponent> ) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}
               