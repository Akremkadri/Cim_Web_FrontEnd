import { Component, OnInit ,OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { clients } from '../Models/clients'; 
import { ClientService } from '../Services/client.service';
import { MenuItem } from 'primeng/api/menuitem';
import {MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { UpdateComponentComponent } from '../update-component/update-component.component';
 
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit , OnDestroy   {
  searchText: any;
  public Clients : clients [] = []
  items: MenuItem[] | undefined;

  constructor(private clientservice: ClientService , private matDialog: MatDialog) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void { 
    this.clientservice.findAllClients().subscribe((res: clients [])=>{
    console.log(res);
    this.Clients = res;
  })
  }
  openDialogAdd() {
     const diagref = this.matDialog.open(AddClientComponent, {
      width: '1000px',
      height: '1000px',
      disableClose: true} )
  }
  openDialogUpdate() {
    const diagref = this.matDialog.open(UpdateComponentComponent, {
     width: '1000px',
     height: '1000px',
     disableClose: true} )
 }
 public doFilter = (value: string) => {
}

}
