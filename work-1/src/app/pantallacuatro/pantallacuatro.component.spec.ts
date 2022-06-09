import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallacuatroComponent } from './pantallacuatro.component';

describe('PantallacuatroComponent', () => {
  let component: PantallacuatroComponent;
  let fixture: ComponentFixture<PantallacuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallacuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallacuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
