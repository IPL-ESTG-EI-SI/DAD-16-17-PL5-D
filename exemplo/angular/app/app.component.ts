import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Teste</h1>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
