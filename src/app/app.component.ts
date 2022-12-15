import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home'},
    { title: 'Assignment', url:'/folder/Assignment', icon:'link'},
    { title: 'Activities', url: '/folder/Activities', icon: 'baseball' },
    { title: 'Groups', url: '/folder/Groups', icon: 'people' },
    { title: 'Camp Leaders', url: '/folder/Camp Leaders', icon: 'person'},
    { title: 'About', url:'/folder/About', icon:'finger-print'}
  ];

  language = 1; // 1 es español, 0 es inglés porque mi aplicación consiste en un campamento de verano en Málaga
  constructor(
    private translate: TranslateService
  ) {
    this.translate. setDefaultLang('es');
  }
  onLanguage(){
    this.language = (this.language+1)%2;
    switch(this.language){
      case 0:
        this.translate.setDefaultLang('en');
        break;
      case 1:
        this.translate.setDefaultLang('es');
        break;
    }
  }

  
}
