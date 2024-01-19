import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent {
  title = 'angular-image-uploader';

    imageChangedEvent: any = '';
    croppedImage: any = '';

    private _ref?: NgbModalRef;

    public get ref(): NgbModalRef| undefined {
        return (this._ref ?? undefined);
    }
    public set ref(value: NgbModalRef | undefined) {
        this._ref = value;
    }


    @Output()
    onClose = new EventEmitter<string>()


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    close(){
      this.onClose.emit(this.croppedImage);
      this.ref?.close(this.croppedImage);
    }
}
