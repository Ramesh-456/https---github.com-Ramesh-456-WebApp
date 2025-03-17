import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [ProductCreateComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,ReactiveFormsModule,PrimengModule
  ]
})
export class ProductModule { }
