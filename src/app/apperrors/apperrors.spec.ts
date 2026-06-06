import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apperrors } from './apperrors';

describe('Apperrors', () => {
  let component: Apperrors;
  let fixture: ComponentFixture<Apperrors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apperrors],
    }).compileComponents();

    fixture = TestBed.createComponent(Apperrors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
