import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullChemicalInfoComponent } from './full-chemical-info.component';

describe('FullChemicalInfoComponent', () => {
  let component: FullChemicalInfoComponent;
  let fixture: ComponentFixture<FullChemicalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullChemicalInfoComponent]
    });
    fixture = TestBed.createComponent(FullChemicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
