import { TestBed } from '@angular/core/testing';

import { SuccessMessageService } from './success-message.service';

describe('HelloWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuccessMessageService = TestBed.get(SuccessMessageService);
    expect(service).toBeTruthy();
  });
});
