import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  public useLanguage(language: string): void {
    this.translate.use(language);
  }

  public get currentLanguage(): string {
    return this.translate.currentLang;
  }

  public instant(key: string): string {
    return this.translate.instant(key);
  }
}
