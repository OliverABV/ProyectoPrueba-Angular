import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Declaracion de url falsa
  private userUrl = 'api/user';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl).pipe();
  }

  save(user: User){
    console.log('Usuario a guardar', user)
    return this.http.post<User>(this.userUrl, user).pipe();
  }
}
