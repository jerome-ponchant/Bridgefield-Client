import { AuthRespDto } from "../entity/AuthRespDto";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { AuthReqDto } from 'src/client/entity/AuthReqDto';
import { PrincipalDto } from "../entity/PrincipalDto";
import { ErrorDto } from "../entity/ErrorDto";
import { RuntimeConfigService } from "src/app/shared/runtime-config.service";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static ACCESS_TOKEN_KEY = "access_token";
  static CONNECTED_USER_KEY = "connected_user";
  static ROOT_REST_KEY :string = "rootRestUrl";
  static SECURITY_BASE_KEY : string  = "api_auth";
  static FR_BRIDGEFIELD_GUEST_USER_NAME="fr.bridgefield.guestUserName";

  constructor(private http: HttpClient, private config: RuntimeConfigService) {
    this.login.bind(this);
  }

  async login(auth: AuthReqDto)  {
    console.log(this.config.getEnv('env') );

    let url = '';
    url += await this.config.getConfig(AuthenticationService.ROOT_REST_KEY);
    url += await this.config.getConfig(AuthenticationService.SECURITY_BASE_KEY);

    let response: AuthRespDto = await firstValueFrom(this.http.post( url + "/login", auth)) as AuthRespDto;

    localStorage.setItem(AuthenticationService.ACCESS_TOKEN_KEY, response.accessToken);
    localStorage.setItem(AuthenticationService.CONNECTED_USER_KEY, JSON.stringify(response.principal));
  }

  isUserConnected(): boolean {
    var u = localStorage.getItem(AuthenticationService.CONNECTED_USER_KEY);
    return (u ? u.length > 0 : false);
  }

  getConnectedPrincipal(): PrincipalDto {
    let u : PrincipalDto = JSON.parse(localStorage.getItem(AuthenticationService.CONNECTED_USER_KEY)?? "") as PrincipalDto;
    if(u) return u;
    throw {localizedMessage: 'No user connected.'} as ErrorDto
  }

}
