import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface chemicalType {
  description: string;
  name: string;
  url: string;
  id: string;
  attribution?: string;
  modified?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chemicals';

  constructor(private router: Router) {}


  redirectToAddNew() {
    this.router.navigate(['/add-new-chemical']);
  }
  redirectToHome() {
    this.router.navigate(['/']);
  }
}
