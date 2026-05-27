import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalon } from './add-salon';

describe('AddSalon', () => {
  let component: AddSalon;
  let fixture: ComponentFixture<AddSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
