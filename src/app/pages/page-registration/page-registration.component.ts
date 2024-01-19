import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationDto } from 'src/client/entity/OrganizationDto';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';
import { PrincipalType } from 'src/client/entity/PrincipalType';
import { UserDto } from 'src/client/entity/UserDto';
import { AuthenticationService } from 'src/client/services/authentication.service';
import { PageBase } from '../page-base';
import { PrincipalService } from 'src/client/services/principal.service';
import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.scss']
})
export class PageRegistrationComponent extends PageBase {

   USER_TYPE = PrincipalType.User;
   ORGANIZATION_TYPE = PrincipalType.Organization;

  principalType? :PrincipalType;

  principal: PrincipalDto = new PrincipalDto();
  user: UserDto = new UserDto();
  organization : OrganizationDto = new OrganizationDto();

  constructor(private principalService: PrincipalService, private router: Router, private activatedRoute :ActivatedRoute,
    private rcs : RuntimeConfigService) {
      super();
    }


  onClick() {
    let email = '';
    try{
    switch (this.principalType){
      case PrincipalType.User:
        this.user.id = this.principal.id;
        this.user.username = this.principal.username;
        this.user.password = this.principal.password;
        this.user.principalType=PrincipalType.User;
        this.principalService.register(this.user);
        email=this.user.eMail ?? '';
        break;
      case PrincipalType.Organization:
        this.organization.id = this.principal.id;
        this.organization.username = this.principal.username;
        this.organization.password = this.principal.password;
        this.organization.principalType=PrincipalType.Organization;
        this.principalService.register(this.organization);
        email = this.organization.contactMail ?? '';
        break;
      default :
        this.principalService.register(this.principal);
    }
    this.router.navigate(['mailSent'],{relativeTo: this.activatedRoute.parent, state:{email: email} });
  }catch(e){
    this.displayError([e]);
  }

    }


    onChange(p: PrincipalType) {
     this.principalType=p;
      switch(p){
      case PrincipalType.Organization:

        break;
      case PrincipalType.User:
        this.user.id = this.principal.id;
        this.user.username = this.principal.username;
        this.user.principalType = PrincipalType.User;
        this.user.password = this.principal.password;
        this.user.principalType=PrincipalType.User;
        break;
      default :
        this.principal = new PrincipalDto()
     }
      }
}
