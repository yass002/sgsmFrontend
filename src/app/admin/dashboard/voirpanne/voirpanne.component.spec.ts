import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirpanneComponent } from './voirpanne.component';

describe('VoirpanneComponent', () => {
  let component: VoirpanneComponent;
  let fixture: ComponentFixture<VoirpanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirpanneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirpanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
