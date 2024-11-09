import { TestBed } from '@angular/core/testing';

import { productService } from '../productservice/productservice.service';

describe('productserviceservice', () => {
  let service: productService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
