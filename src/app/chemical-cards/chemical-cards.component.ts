import { Component } from '@angular/core';
import { chemicalType } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chemical-cards',
  templateUrl: './chemical-cards.component.html',
  styleUrls: ['./chemical-cards.component.css']
})
export class ChemicalCardsComponent {
  allChemicals: chemicalType[] = [
    {
      name: 'Hydrazine',
      url: 'some Url',
      id: '1',
    },
    {
      name: 'Sulphuric acid',
      url: 'another url',
      id: '2',
    }
  ]
  constructor(private router: Router) {}

  getFullChemicalInfo = (id: string) => {
    const navigationDetails: string[] = ['/chemical'];
    if(id.length) {
      navigationDetails.push(id);
    }
    this.router.navigate(navigationDetails);
  }

}
