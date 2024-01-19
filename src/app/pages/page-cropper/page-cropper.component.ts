import { PhotoDto } from './../../../client/entity/PhotoDto';
import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PhotoService } from 'src/client/services/photo-service';

@Component({
  selector: 'app-page-cropper',
  templateUrl: './page-cropper.component.html',
  styleUrls: ['./page-cropper.component.scss']
})
export class PageCropperComponent {

  imageCropped : PhotoDto = {
    id: -1,
    url: ''
  };
src: any;

  constructor(private photoService : PhotoService,){}

  async setImage(event: any) {
    this.imageCropped.data= event;
    this.imageCropped = await this.photoService.create(this.imageCropped);
    this.src = (await this.photoService.get(this.imageCropped.id)).data;
    console.log(this.imageCropped)
}

}
