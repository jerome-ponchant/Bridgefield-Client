import { PageRegistrationComponent } from './pages/page-registration/page-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ApplicationGuardService } from 'src/client/services/guard/application-guard.service';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { PageTestComponent } from './pages/page-test/page-test.component';
import { PageValidationPrincipalComponent } from './pages/page-validation-principal/page-validation-principal.component';
import { PageCropperComponent } from './pages/page-cropper/page-cropper.component';
import { PageMailSentComponent } from './pages/page-mail-sent/page-mail-sent.component';
import { PageExplanationComponent } from './pages/page-explanation/page-explanation.component';
import { WorkInProgressComponent } from './components/business/work-in-progress/work-in-progress.component';

const routes: Routes = [
  {path: '', component: PageLoginComponent},
  {path: 'test', component: PageTestComponent},
  {path: 'registration', component: PageRegistrationComponent},
  {path: 'validation/:id', component: PageValidationPrincipalComponent},
  {path: 'cropper', component : PageCropperComponent},
  {path: 'mailSent', component : PageMailSentComponent},
  {path: 'explanation', component: PageExplanationComponent},
  {path:'home', component: PageHomeComponent,canActivate: [ApplicationGuardService],children:[
      {path:'wip',component: WorkInProgressComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
