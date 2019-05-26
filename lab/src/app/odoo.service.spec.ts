import { TestBed } from '@angular/core/testing';

import { Odoo } from './odoo.service';

describe("Odoo", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: Odoo = TestBed.get(Odoo);
    expect(service).toBeTruthy();
  });
});
