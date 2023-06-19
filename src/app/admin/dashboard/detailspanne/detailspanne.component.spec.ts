import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspanneComponent } from './detailspanne.component';

describe('DetailspanneComponent', () => {
  let component: DetailspanneComponent;
  let fixture: ComponentFixture<DetailspanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspanneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
