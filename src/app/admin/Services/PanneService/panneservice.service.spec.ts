import { TestBed } from '@angular/core/testing';

import { PanneserviceService } from './panneservice.service';

describe('PanneserviceService', () => {
  let service: PanneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
