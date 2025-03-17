import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {path:'',redirectTo:'view',pathMatch:'full'},
  {path:'view',component:ProductDetailsComponent},
  {path:'add',component:ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
