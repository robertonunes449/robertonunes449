import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercpitingComponent } from './intercpiting.component';

describe('IntercpitingComponent', () => {
  let component: IntercpitingComponent;
  let fixture: ComponentFixture<IntercpitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercpitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercpitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
