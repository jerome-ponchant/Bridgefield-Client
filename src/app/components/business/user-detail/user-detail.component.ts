import { Component, Input } from '@angular/core';
import { AddressDto } from 'src/client/entity/AddressDto';
import { PhotoDto } from 'src/client/entity/PhotoDto';
import { UserDto } from 'src/client/entity/UserDto';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input()
  refId: any;

@Input()
  user: UserDto = new UserDto()

  address: AddressDto = new AddressDto();

  data:any;



changePhoto(img: any) {
  let photo = new PhotoDto();
  this.data = img;
  photo.data = img;
  this.user.photo=photo;
}

addressChange(){
  this.user.address=this.address;
}

}
