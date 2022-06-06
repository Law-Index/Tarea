import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUnoComponent } from './pantalla-uno.component';

describe('PantallaUnoComponent', () => {
  let component: PantallaUnoComponent;
  let fixture: ComponentFixture<PantallaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
