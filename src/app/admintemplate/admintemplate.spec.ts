import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admintemplate } from './admintemplate';

describe('Admintemplate', () => {
  let component: Admintemplate;
  let fixture: ComponentFixture<Admintemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admintemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(Admintemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
