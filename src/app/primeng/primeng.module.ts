import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ChartModule,MenubarModule,AvatarModule,BadgeModule,InputTextModule,CardModule,MenuModule,
    ToastModule,FileUploadModule
  ],
  exports:[ChartModule,MenubarModule,AvatarModule,BadgeModule,InputTextModule,CardModule,MenuModule,
    ToastModule,FileUploadModule
  ],providers:[MessageService]
})
export class PrimengModule { }
