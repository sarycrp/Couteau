import { TestBed } from '@angular/core/testing';

import { GeneroPService } from './genero-p.service';

describe('GeneroPService', () => {
  let service: GeneroPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
