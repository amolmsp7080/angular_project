import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heavy } from './heavy';

describe('Heavy', () => {
  let component: Heavy;
  let fixture: ComponentFixture<Heavy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heavy],
    }).compileComponents();

    fixture = TestBed.createComponent(Heavy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
