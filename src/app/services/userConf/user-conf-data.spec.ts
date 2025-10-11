import { TestBed } from '@angular/core/testing';

import { UserConfData } from './user-conf-data';

describe('UserConfData', () => {
  let service: UserConfData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserConfData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
