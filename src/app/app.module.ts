import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './basic/login/login.component';
import { ErrorPageComponent } from './basic/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpBackend,  HttpClientModule } from '@angular/common/http';
import { CustomHttpInterceptor } from './httpInterceptor/custom-httpInterceptor';
import { LoaderComponent } from './basic/loader/loader.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
        }
        
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(_http: HttpBackend): MultiTranslateHttpLoader {
  // return new TranslateHttpLoader(http, './assets/i18n/parent/', '.json');
  return new MultiTranslateHttpLoader(_http,[ './assets/i18n/auth/']);
}
