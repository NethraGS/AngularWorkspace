import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Red } from './red';

describe('Red', () => {
  let component: Red;
  let fixture: ComponentFixture<Red>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Red]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Red);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
