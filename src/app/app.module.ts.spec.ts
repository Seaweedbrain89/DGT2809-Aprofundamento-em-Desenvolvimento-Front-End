import { TestBed } from '@angular/core/testing';

import { AppModuleTs } from './app.module.ts';

describe('AppModuleTs', () => {
  let service: AppModuleTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppModuleTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
