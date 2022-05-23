import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  login(user:string, password:string) {
    return this.httpClient.post<{access_token:  string}>('endpoint', {user, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}))
}

register(user:string, password:string) {
  return this.httpClient.post<{access_token: string}>('endpoint', {user, password}).pipe(tap(_res => {
  this.login(user, password)
}))
}
logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}
