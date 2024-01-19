import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCropperComponent } from './page-cropper.component';

describe('PageCropperComponent', () => {
  let component: PageCropperComponent;
  let fixture: ComponentFixture<PageCropperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCropperComponent]
    });
    fixture = TestBed.createComponent(PageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
