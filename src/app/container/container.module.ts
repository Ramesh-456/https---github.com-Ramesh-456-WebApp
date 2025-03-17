import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpBackend } from '@angular/common/http';
import { TranslatorService } from '../services/translator.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PrimengModule } from '../primeng/primeng.module';
import { FooterComponent } from '../home/footer/footer.component';
import { LeftMenuComponent } from '../home/left-menu/left-menu.component';
import { HeaderComponent } from '../home/header/header.component';
import { ChatComponent } from '../home/chat/chat.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authGuard } from '../authGuard/auth.guard';

const child_routes:Routes=[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate: [authGuard],

  },
  {
    path: 'products',
    loadChildren: () => import('../product/product.module').then(m => m.ProductModule)
  },
]

const routes:Routes = [

  {path:'',component:ContainerComponent, children:child_routes},

]


@NgModule({
  declarations: [FooterComponent,LeftMenuComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileComponent,
    ContainerComponent,
    ChatComponent],
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    PrimengModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
        }
        
      })
  ],providers:[TranslatorService]
})
export class ContainerModule { }

export function HttpLoaderFactory(_http: HttpBackend): MultiTranslateHttpLoader {
  // return new TranslateHttpLoader(http, './assets/i18n/parent/', '.json');
  return new MultiTranslateHttpLoader(_http,[ './assets/i18n/home/']);
}
