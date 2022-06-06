import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaTresComponent } from './pantalla-tres.component';

describe('PantallaTresComponent', () => {
  let component: PantallaTresComponent;
  let fixture: ComponentFixture<PantallaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
