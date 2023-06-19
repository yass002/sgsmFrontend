import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirmespannesComponent } from './voirmespannes.component';

describe('VoirmespannesComponent', () => {
  let component: VoirmespannesComponent;
  let fixture: ComponentFixture<VoirmespannesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirmespannesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirmespannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
