import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageValidationPrincipalComponent } from './page-validation-principal.component';

describe('PageValidationPrincipalComponent', () => {
  let component: PageValidationPrincipalComponent;
  let fixture: ComponentFixture<PageValidationPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageValidationPrincipalComponent]
    });
    fixture = TestBed.createComponent(PageValidationPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
