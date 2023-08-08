import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
base_url='http://localhost:8080/api/users'
base_url1='http://localhost:8080/api/user'
  constructor(private http:HttpClient) { }

  get_users(){
    return this.http.get<any>(this.base_url)
    }  
    
    get_user(email:any)
    {
      let link=this.base_url1+'/'+email
      return this.http.get<any>(link)
    }


  }


