import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDemo1 } from './template-form-demo1';

describe('TemplateFormDemo1', () => {
  let component: TemplateFormDemo1;
  let fixture: ComponentFixture<TemplateFormDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFormDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
