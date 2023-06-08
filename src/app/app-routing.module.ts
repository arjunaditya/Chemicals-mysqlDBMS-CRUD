import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullChemicalInfoComponent } from './full-chemical-info/full-chemical-info.component';
import { ChemicalCardsComponent } from './chemical-cards/chemical-cards.component';

const routes: Routes = [
  {
    path:'',
    component: ChemicalCardsComponent
  },
  {
    path: 'chemical/:id',
    component: FullChemicalInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
