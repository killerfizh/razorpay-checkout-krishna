import { TestBed, async, inject } from '@angular/core/testing';

import { LinkRazorpayGuard } from './link-razorpay.guard';

describe('LinkRazorpayGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkRazorpayGuard]
    });
  });

  it('should ...', inject([LinkRazorpayGuard], (guard: LinkRazorpayGuard) => {
    expect(guard).toBeTruthy();
  }));
});
