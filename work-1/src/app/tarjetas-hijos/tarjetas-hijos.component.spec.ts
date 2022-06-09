import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasHijosComponent } from './tarjetas-hijos.component';

describe('TarjetasHijosComponent', () => {
  let component: TarjetasHijosComponent;
  let fixture: ComponentFixture<TarjetasHijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasHijosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
