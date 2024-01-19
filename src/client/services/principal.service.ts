import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';
import { PrincipalDto } from '../entity/PrincipalDto';
import { AuthenticationService } from './authentication.service';
import { Observable, firstValueFrom } from 'rxjs';
import { SuccessDto } from '../entity/SuccessDto';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient, private config: RuntimeConfigService) {
    // For some Reason, Load is not called at RuntimeConfigService construction
    config.load();
    console.log('Principal Service Construction');
    this.register = this.register.bind(this);
    this.validate = this.validate.bind(this);
  }


  /******************************************
   * No need for authentication
   * TODO : Some Captcha
   */
  async register( principal : any){
    let url = '';
    url += await this.config.getConfig(AuthenticationService.ROOT_REST_KEY);
    url += await this.config.getConfig(AuthenticationService.SECURITY_BASE_KEY);

    let response = await firstValueFrom(this.http.post(
      url + "/register",
      principal));
      console.log(response);
  }

     async validate(principalId: number) {
      console.log('Principal Start validate');

      let url = '';
      url += await this.config.getConfig(AuthenticationService.ROOT_REST_KEY);
      url += await this.config.getConfig(AuthenticationService.SECURITY_BASE_KEY);
      url += "/principals/validate/"+principalId;
      let response =   await firstValueFrom(this.http.get<PrincipalDto>(url ));
      return response;
   }
}
