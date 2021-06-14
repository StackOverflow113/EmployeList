import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployeComponent } from './count-employe.component';

describe('CountEmployeComponent', () => {
  let component: CountEmployeComponent;
  let fixture: ComponentFixture<CountEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
