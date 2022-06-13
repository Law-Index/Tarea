import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPadreComponent } from './output-padre.component';

describe('OutputPadreComponent', () => {
  let component: OutputPadreComponent;
  let fixture: ComponentFixture<OutputPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
