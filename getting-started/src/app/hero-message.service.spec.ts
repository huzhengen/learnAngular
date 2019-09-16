import { TestBed } from '@angular/core/testing';

import { HeroMessageService } from './hero-message.service';

describe('HeroMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroMessageService = TestBed.get(HeroMessageService);
    expect(service).toBeTruthy();
  });
});
