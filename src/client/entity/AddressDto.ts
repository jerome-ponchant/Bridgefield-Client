import { CityDto } from "./CityDto";

export class AddressDto{

  id? : number;
	address1?: string;
	address2? : string;
	city : CityDto={};
}
