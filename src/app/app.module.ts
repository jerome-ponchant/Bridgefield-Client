import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { HttpInterceptorService } from 'src/client/services/interceptor/http-interceptor.service';
import { ModalErrorComponent } from './components/modal/modal-error.component';
import { PageRegistrationComponent } from './pages/page-registration/page-registration.component';
import { AddressComponent } from './components/business/address/address.component';
import { UserDetailComponent } from './components/business/user-detail/user-detail.component';
import { OrganizationDetailComponent } from './components/business/organization-detail/organization-detail.component';
import { PrincipalDetailComponent } from './components/business/principal-detail/principal-detail.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ImageCropperComponent,  } from './components/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PageTestComponent } from './pages/page-test/page-test.component';
import { PageValidationPrincipalComponent } from './pages/page-validation-principal/page-validation-principal.component';
import { PageCropperComponent } from './pages/page-cropper/page-cropper.component';
import { CityComponent } from './components/business/city/city.component';
import { PageMailSentComponent } from './pages/page-mail-sent/page-mail-sent.component';
import { PageExplanationComponent } from './pages/page-explanation/page-explanation.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkInProgressComponent } from './components/business/work-in-progress/work-in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageHomeComponent,
    MenuComponent,
    MenuItemComponent,
    ModalErrorComponent,
    PageRegistrationComponent,
    PrincipalDetailComponent,
    AddressComponent,
    UserDetailComponent,
    OrganizationDetailComponent,
    PhotoComponent,
    ImageCropperComponent,
    PageTestComponent,
    PageValidationPrincipalComponent,
    PageCropperComponent,
    CityComponent,
    PageMailSentComponent,
    PageExplanationComponent,
    HeaderComponent,
    WorkInProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    ImageCropperModule
  ],
  providers: [
    HttpInterceptorService,
    NgbActiveModal,
    NgbModal

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
