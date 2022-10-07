import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpComponent } from './component/post-login/emp/emp.component';
import { HomeComponent } from './component/post-login/home/home.component';



const routes: Routes = [

  { path: 'emp', component: EmpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
