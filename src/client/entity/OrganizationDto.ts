import { AddressDto } from "./AddressDto";
import { PhotoDto } from "./PhotoDto";
import { PrincipalDto } from "./PrincipalDto";

export class OrganizationDto extends PrincipalDto{

	name? : string;
	code? : string;
	contactMail? : string;
	phoneNumber? : string;
	address?: AddressDto;
  preferredLocale?: string;
  logo?: PhotoDto;
}
