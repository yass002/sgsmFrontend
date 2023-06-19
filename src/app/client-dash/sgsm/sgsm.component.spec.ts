import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgsmComponent } from './sgsm.component';

describe('SgsmComponent', () => {
  let component: SgsmComponent;
  let fixture: ComponentFixture<SgsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
