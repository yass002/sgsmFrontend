import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerpanneComponent } from './declarerpanne.component';

describe('DeclarerpanneComponent', () => {
  let component: DeclarerpanneComponent;
  let fixture: ComponentFixture<DeclarerpanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarerpanneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerpanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
