import { TestBed } from '@angular/core/testing';

import { ChemicalDataService } from './chemical-data.service';

describe('ChemicalDataService', () => {
  let service: ChemicalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemicalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
