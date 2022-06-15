import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { catchError, map, Observable, retry } from 'rxjs';
import { Portfolio } from '../Models/portfolio';

const baseUrl = 'http://localhost:3000/Portfolio' ;

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  http!: HttpClient;

  constructor(private httpClient : HttpClient) {}

  findAllClients(): Observable<Portfolio[]>{
    let Portfolios : Portfolio [];
    return this.httpClient.get<Portfolio[]>( baseUrl ).
    pipe(
      map(data=>
       {Portfolios=data;
        return Portfolios}  
      )
     ) ;
  
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl);
  }

  findByID(PORTFOLIONO: any): Observable<Portfolio> {
    
    return this.httpClient.get<Portfolio>( baseUrl + '/' + PORTFOLIONO ).pipe(retry(1));
  }  



}
