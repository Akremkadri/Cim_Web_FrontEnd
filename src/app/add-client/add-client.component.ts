import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddClientComponent> ) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}
