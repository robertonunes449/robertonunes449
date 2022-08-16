import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componet2Component } from './componet2.component';

describe('Componet2Component', () => {
  let component: Componet2Component;
  let fixture: ComponentFixture<Componet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
