import { Component,ViewChild,OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  user_table: any;
  constructor(private usersService: UsersService
  
) { }


@ViewChild(ModalComponent) modal!: ModalComponent;



ngOnInit(): void {
  this.getUsers()
}

displayedColumns: string[] = ['email', 'username','first_name','last_name','address','country','enabled','...']


dataSource:any;
getUsers(){
  this.usersService.get_users().subscribe({next:users=>{

    this.user_table=users

    this.dataSource = new MatTableDataSource<any>(this.user_table);
    console.log(this.dataSource)
  },
error:error=>{
  console.log(error)
}
})
}

// ---------------------- OPEN THE MODAL -------------------------------

openModal(): void {
  this.modal.openModal();
}

}
