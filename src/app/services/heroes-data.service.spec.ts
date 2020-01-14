import { TestBed } from '@angular/core/testing';

import { HeroesDataService } from './heroes-data.service';

describe('HeroesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesDataService = TestBed.get(HeroesDataService);
    expect(service).toBeTruthy();
  });
});
