import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonComponent } from './salon.component';

describe('SalonComponent', () => {
  let component: SalonComponent;
  let fixture: ComponentFixture<SalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
