import { PrincipalDto } from "./PrincipalDto";

export class AuthRespDto {
  accessToken: string = "";
  principal: PrincipalDto= new PrincipalDto();
}
