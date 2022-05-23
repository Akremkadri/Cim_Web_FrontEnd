import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { clients } from '../Models/clients';

const baseUrl = 'http://localhost:3000/Clients' ;

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http: any;

  constructor(private httpClient : HttpClient) {}
  findAllClients(): Observable<clients[]>{

    return this.httpClient.get<clients[]>( baseUrl ) ;

  }
}
