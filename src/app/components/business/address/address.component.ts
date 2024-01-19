import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressDto } from 'src/client/entity/AddressDto';
import { CityDto } from 'src/client/entity/CityDto';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {


  @Input()
  address: AddressDto = { city:{ zip:'', name:'', country:''}};

  @Output()
  onChange = new EventEmitter<AddressDto>();

  change(){
    this.onChange.emit();
  }
  setCity(city: CityDto) {
    this.address.city=city;
  }
}
