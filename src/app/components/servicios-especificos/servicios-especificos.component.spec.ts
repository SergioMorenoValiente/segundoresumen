import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEspecificosComponent } from './servicios-especificos.component';

describe('ServiciosEspecificosComponent', () => {
  let component: ServiciosEspecificosComponent;
  let fixture: ComponentFixture<ServiciosEspecificosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosEspecificosComponent]
    });
    fixture = TestBed.createComponent(ServiciosEspecificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
