import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroRHandlingComponent } from './erro-rhandling.component';

describe('ErroRHandlingComponent', () => {
  let component: ErroRHandlingComponent;
  let fixture: ComponentFixture<ErroRHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroRHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroRHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
