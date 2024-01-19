import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExplanationComponent } from './page-explanation.component';

describe('PageExplanationComponent', () => {
  let component: PageExplanationComponent;
  let fixture: ComponentFixture<PageExplanationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageExplanationComponent]
    });
    fixture = TestBed.createComponent(PageExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
