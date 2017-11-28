import { TestBed, inject } from '@angular/core/testing';

import { JsFrameworkService } from './js-framework.service';

describe('JsFrameworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsFrameworkService]
    });
  });

  it('should be created', inject([JsFrameworkService], (service: JsFrameworkService) => {
    expect(service).toBeTruthy();
  }));
});
