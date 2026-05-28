import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDetails } from './salon-details';

describe('SalonDetails', () => {
  let component: SalonDetails;
  let fixture: ComponentFixture<SalonDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalonDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SalonDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
