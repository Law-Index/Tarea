import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDOSComponent } from './pantalla-dos.component';

describe('PantallaDOSComponent', () => {
  let component: PantallaDOSComponent;
  let fixture: ComponentFixture<PantallaDOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
