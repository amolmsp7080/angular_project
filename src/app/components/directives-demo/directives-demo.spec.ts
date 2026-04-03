import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDemo } from './directives-demo';

describe('DirectivesDemo', () => {
  let component: DirectivesDemo;
  let fixture: ComponentFixture<DirectivesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
