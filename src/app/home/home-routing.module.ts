import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const child_routes:Routes=[
  {
    path:'',
   redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'profile',
  component:ProfileComponent
}
,
]
const routes: Routes = [
  {path:'',component:HomeComponent,children:child_routes},
  
   
  
 
  // {path:'login',component:HomeComponent},
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
  // {path:'**',component:ErrorPageComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
