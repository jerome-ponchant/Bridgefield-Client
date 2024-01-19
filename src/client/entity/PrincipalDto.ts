import { AuthorityDto } from "./AuthorityDto";
import { PrincipalType } from "./PrincipalType";

export class PrincipalDto {
	id:number =-1;

  username:string = "";

	authorities: AuthorityDto[]=[];

  password: string = "";

  principalType : PrincipalType = PrincipalType.Principal;
}
