import { TestBed } from '@angular/core/testing';

import { DeactivateGuard } from './deactivate.guard';

describe('AlunosDeactivateGuard', () => {
  let guard: DeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
