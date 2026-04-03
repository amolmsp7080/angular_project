import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { uploadvideoGuard } from './uploadvideo-guard';

describe('uploadvideoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => uploadvideoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
