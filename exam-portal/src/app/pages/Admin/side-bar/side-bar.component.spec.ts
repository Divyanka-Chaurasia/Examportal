import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBArComponent } from './side-bar.component';

describe('SideBArComponent', () => {
  let component: SideBArComponent;
  let fixture: ComponentFixture<SideBArComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBArComponent]
    });
    fixture = TestBed.createComponent(SideBArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
