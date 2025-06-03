import { TestBed } from '@angular/core/testing';

import { LivroTs } from './livro.ts';

describe('LivroTs', () => {
  let service: LivroTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
