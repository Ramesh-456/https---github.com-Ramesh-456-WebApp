import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpBackend } from '@angular/common/http';
import { TranslatorService } from '../services/translator.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule
   
  ],providers:[TranslatorService]
})
export class HomeModule { }
export function HttpLoaderFactory(_http: HttpBackend): MultiTranslateHttpLoader {
  // return new TranslateHttpLoader(http, './assets/i18n/parent/', '.json');
  return new MultiTranslateHttpLoader(_http,[ './assets/i18n/home/']);
}