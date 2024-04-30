import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuizComponentComponent } from './load-quiz-component.component';

describe('LoadQuizComponentComponent', () => {
  let component: LoadQuizComponentComponent;
  let fixture: ComponentFixture<LoadQuizComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadQuizComponentComponent]
    });
    fixture = TestBed.createComponent(LoadQuizComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
