import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChemicalDataService } from '../service/chemical-data.service';
import { chemicalType } from '../app.component';

@Component({
  selector: 'app-chemical-cards',
  templateUrl: './chemical-cards.component.html',
  styleUrls: ['./chemical-cards.component.css']
})
export class ChemicalCardsComponent {
  allChemicals: any =[];
  totalLength:any;
  page:number = 1;



  constructor(private router: Router, private service: ChemicalDataService) {
    this.getAll();
  }

  getAll() {
    this.service.getAllChemicals().subscribe((data: chemicalType[]) => {
      this.totalLength = data.length;
      this.allChemicals = data;
    })
  }

  getFullChemicalInfo = (id: string) => {
    console.log('log', id);
    const navigationDetails: string[] = ['/chemical'];
      navigationDetails.push(id);
    console.log('nav', navigationDetails);
    this.router.navigate(navigationDetails);
  }

}
