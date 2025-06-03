import { TestBed } from '@angular/core/testing';

import { AppComponentHtml } from './app.component.html';

describe('AppComponentHtml', () => {
  let service: AppComponentHtml;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppComponentHtml);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
