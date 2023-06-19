import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTechComponent } from './ajout-tech.component';

describe('AjoutTechComponent', () => {
  let component: AjoutTechComponent;
  let fixture: ComponentFixture<AjoutTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
