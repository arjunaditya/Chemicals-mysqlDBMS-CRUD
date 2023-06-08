import { Component } from '@angular/core';

export interface chemicalType {
  name: string;
  url: string;
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chemicals';
}
