import { Component,OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit{
  result: any;

  constructor(private userService:UsersService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('id');
     this.getUser(email) 

  }

  getUser(email:any){
    this.userService.get_user(email).subscribe({next:result=>{

      this.result=result
    },error:error=>{
      console.log(error)
    }})
  }


}
