import { AddressDto } from "./AddressDto";
import { PhotoDto } from "./PhotoDto";
import { PrincipalDto } from "./PrincipalDto";

export class UserDto extends PrincipalDto{
  eMail?:string;
  address?: AddressDto;
	firstName?:string;
	lastName?:string;
  photo? : PhotoDto;
	pseudo?:string;
	preferredLocale?:string;
	dateOfBirth?: string;
}
