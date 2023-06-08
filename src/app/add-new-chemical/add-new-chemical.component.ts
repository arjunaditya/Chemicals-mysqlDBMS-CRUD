import { Component } from '@angular/core';
import { ChemicalDataService } from '../service/chemical-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-chemical',
  templateUrl: './add-new-chemical.component.html',
  styleUrls: ['./add-new-chemical.component.css']
})
export class AddNewChemicalComponent {

  newChemical:any;
  constructor(private service:ChemicalDataService,private router: Router) {}
  addNewChemical(data: any) {
    const body = {
      ...data,
      id: Math.floor(Math.random()*10000000),
      modified: new Date(),
    }
    this.service.addNewChemical(body).subscribe((data) =>{
      this.router.navigate(['/'])
    } )
  }

}
