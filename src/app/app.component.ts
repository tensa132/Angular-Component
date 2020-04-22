import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor (private router : Router) {}
  LOGIN() {
    this.router.navigate(['/login']);
  }
  Homepass() {
    this.router.navigate(['/home', 3]);
  }
}
