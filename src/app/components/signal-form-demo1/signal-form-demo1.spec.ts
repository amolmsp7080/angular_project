import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFormDemo1 } from './signal-form-demo1';

describe('SignalFormDemo1', () => {
  let component: SignalFormDemo1;
  let fixture: ComponentFixture<SignalFormDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFormDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalFormDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
