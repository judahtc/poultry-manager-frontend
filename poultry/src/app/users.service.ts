import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
base_url='http://localhost:8080/api/users'
  constructor(private http:HttpClient) { }

  get_users(){
    return this.http.get<any>(this.base_url)
    }
  }


