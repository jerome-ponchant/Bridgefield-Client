import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMailSentComponent } from './page-mail-sent.component';

describe('PageMailSentComponent', () => {
  let component: PageMailSentComponent;
  let fixture: ComponentFixture<PageMailSentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMailSentComponent]
    });
    fixture = TestBed.createComponent(PageMailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
