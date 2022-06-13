import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCincoComponent } from './pantalla-cinco.component';

describe('PantallaCincoComponent', () => {
  let component: PantallaCincoComponent;
  let fixture: ComponentFixture<PantallaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
