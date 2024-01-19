import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDetailComponent } from './principal-detail.component';

describe('PrincipalDetailComponent', () => {
  let component: PrincipalDetailComponent;
  let fixture: ComponentFixture<PrincipalDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalDetailComponent]
    });
    fixture = TestBed.createComponent(PrincipalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
