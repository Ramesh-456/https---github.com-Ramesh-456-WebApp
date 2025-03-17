import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic/login/login.component';
import { ErrorPageComponent } from './basic/error-page/error-page.component';
import { SlickgridComponent } from './slickgrid/slickgrid.component';

const routes: Routes = [
  //  {path:'',component:SlickgridComponent,pathMatch:'full'},
  {
    path: '',
    loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)
  },
  {path:'login',component:LoginComponent},
  
  
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
