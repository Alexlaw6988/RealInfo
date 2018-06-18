import { TestBed, inject } from '@angular/core/testing';

import { AppGetService } from './appGet.service';

describe('AppGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGetService]
    });
  });

  it('should be created', inject([AppGetService], (service: AppGetService) => {
    expect(service).toBeTruthy();
  }));
});
