import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Genero', url: '/generos', icon: 'gender' },
    { title: 'Edad', url: '/edad', icon: 'gender' },
    { title: 'Pais', url: '/pais', icon: 'gender' }
  ];
}
