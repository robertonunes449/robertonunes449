import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesComponent } from './on-changes.component';

describe('OnChangesComponent', () => {
  let component: OnChangesComponent;
  let fixture: ComponentFixture<OnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
