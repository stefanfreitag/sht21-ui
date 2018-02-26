import { TestBed, inject } from '@angular/core/testing';

import { SensorServiceS } from './sensor.service';

describe('SensorServiceS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorServiceS]
    });
  });

  it('should be created', inject([SensorServiceS], (service: SensorServiceS) => {
    expect(service).toBeTruthy();
  }));
});
