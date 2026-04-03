import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAssignments } from './directive-assignments';

describe('DirectiveAssignments', () => {
  let component: DirectiveAssignments;
  let fixture: ComponentFixture<DirectiveAssignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveAssignments],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveAssignments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
