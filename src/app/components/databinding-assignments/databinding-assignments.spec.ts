import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingAssignments } from './databinding-assignments';

describe('DatabindingAssignments', () => {
  let component: DatabindingAssignments;
  let fixture: ComponentFixture<DatabindingAssignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingAssignments],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabindingAssignments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
