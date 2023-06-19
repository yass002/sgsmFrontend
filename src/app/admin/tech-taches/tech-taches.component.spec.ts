import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTachesComponent } from './tech-taches.component';

describe('TechTachesComponent', () => {
  let component: TechTachesComponent;
  let fixture: ComponentFixture<TechTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
