import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingDemo } from './databinding-demo';

describe('DatabindingDemo', () => {
  let component: DatabindingDemo;
  let fixture: ComponentFixture<DatabindingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabindingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
