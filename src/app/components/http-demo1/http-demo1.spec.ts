import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo1 } from './http-demo1';

describe('HttpDemo1', () => {
  let component: HttpDemo1;
  let fixture: ComponentFixture<HttpDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
