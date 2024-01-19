import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';
import { Component } from '@angular/core';
import { AuthReqDto } from 'src/client/entity/AuthReqDto';
import { AuthenticationService } from '../../../client/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDto } from 'src/client/entity/ErrorDto';
import { PageBase } from '../page-base';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent extends PageBase {

  auth: AuthReqDto = { userName: "", password: "" };

  constructor(private authenticationService: AuthenticationService, private router: Router,
  private config : RuntimeConfigService,) {
    super();
  }

  async onClick() {
    try {
      let a = await this.authenticationService.login(this.auth);
      this.router.navigate(['home']);
    }
    catch (e) {
      this.displayError([e]);
    }

  }

  async loginAsGuest() {
    let auth : AuthReqDto = new AuthReqDto();
    auth.userName= await this.config.getConfig(AuthenticationService.FR_BRIDGEFIELD_GUEST_USER_NAME);
    auth.password="";
    let a = await this.authenticationService.login(auth);
    this.router.navigate(['home']);
  }
}

