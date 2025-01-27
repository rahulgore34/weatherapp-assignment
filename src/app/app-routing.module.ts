import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitydetailsComponent } from './citydetails/citydetails.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
     path: 'details/:id', component: CitydetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
