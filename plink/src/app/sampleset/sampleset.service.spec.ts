import { TestBed, inject } from '@angular/core/testing';

import { SamplesetService } from './sampleset.service';

describe('SamplesetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesetService]
    });
  });

  it('should be created', inject([SamplesetService], (service: SamplesetService) => {
    expect(service).toBeTruthy();
  }));
});
