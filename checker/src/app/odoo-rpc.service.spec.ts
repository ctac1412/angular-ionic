import { TestBed } from '@angular/core/testing';

import { OdooRpcService } from './odoo-rpc.service';

describe('OdooRpcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdooRpcService = TestBed.get(OdooRpcService);
    expect(service).toBeTruthy();
  });
});
