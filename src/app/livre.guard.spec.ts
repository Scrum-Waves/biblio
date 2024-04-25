import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { livreGuard } from './livre.guard';

describe('livreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => livreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
