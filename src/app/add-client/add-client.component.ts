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
  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }}
    keyPressNumbersWithDecimal(event: { which: any; keyCode: any; preventDefault: () => void; }) {
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      }
      return true;
    }

}
