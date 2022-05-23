import { Component, OnInit ,OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { clients } from '../Models/clients'; 
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit , OnDestroy   {
  Clients : clients [] = []
 
  constructor(private clientservice: ClientService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void { 
    this.clientservice.findAllClients().subscribe((res: clients [])=>{
    console.log(res);
    this.Clients = res;
  })
  }

}
