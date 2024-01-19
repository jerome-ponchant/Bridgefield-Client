import { Component, Input, OnInit } from '@angular/core';
import { AddressDto } from 'src/client/entity/AddressDto';
import { OrganizationDto } from 'src/client/entity/OrganizationDto';
import { PhotoDto } from 'src/client/entity/PhotoDto';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent {


  @Input()
  organization : OrganizationDto = new OrganizationDto();

  address = new AddressDto()

  data:any;

  changePhoto(img: any) {
    let photo = new PhotoDto();
    this.data = img;
    photo.data = img;
    this.organization.logo=photo;
}

  addressChange(){
    this.organization.address=this.address;
  }

}
