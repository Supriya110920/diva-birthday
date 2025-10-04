import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celebrate } from './celebrate';

describe('Celebrate', () => {
  let component: Celebrate;
  let fixture: ComponentFixture<Celebrate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Celebrate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celebrate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
