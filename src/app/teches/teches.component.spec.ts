import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechesComponent } from './teches.component';

describe('TechesComponent', () => {
  let component: TechesComponent;
  let fixture: ComponentFixture<TechesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
