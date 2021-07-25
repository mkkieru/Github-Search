import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repos', component: RepoComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }