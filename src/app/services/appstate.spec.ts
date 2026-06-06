import { TestBed } from '@angular/core/testing';

import { Appstate } from './appstate';

describe('Appstate', () => {
  let service: Appstate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appstate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
