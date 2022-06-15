import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { clients } from '../Models/clients';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit , OnDestroy {
  searchText: any;
  public Clients : clients [] = []
  constructor(private clientservice: ClientService ,public dialogRef: MatDialogRef<SearchClientComponent> ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  

  ngOnInit(): void {
    this.clientservice.findAllClients().subscribe((res: clients [])=>{
      console.log(res);
      this.Clients = res;
  })}
  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}
