import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAscComponent } from './add-asc.component';

describe('AddAscComponent', () => {
  let component: AddAscComponent;
  let fixture: ComponentFixture<AddAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
