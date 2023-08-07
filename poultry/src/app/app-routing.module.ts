import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'portal',component:PortalComponent,children:[
    {path:'users',component:UsersComponent}
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
