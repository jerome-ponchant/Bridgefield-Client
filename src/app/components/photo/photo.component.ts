import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{



ngOnInit(): void {
  console.log('Initialized !')
}

@Output()
onChange: EventEmitter<ArrayBuffer | string | null>= new EventEmitter<ArrayBuffer | string | null>();

@Input()
source : ArrayBuffer | string | null ='assets/img/product.png';

@Input()
uniqueElementId:string='fileInput5'

inputRef?:any;

file?:File | null | undefined;


constructor( private modal:NgbModal,){

}


async click(){
  let ref =this.modal.open(ImageCropperComponent);
  let imageCropper = ref.componentInstance as ImageCropperComponent;
  imageCropper.ref = ref;
  this.source = await (ref.result) as string;
  console.log(this.source);
  this.onChange.emit(this.source)
}

ngAfterViewInit(){
  this.inputRef = document.getElementById(this.uniqueElementId)
}


/*photoChange() {
  this.file = (this.inputRef as HTMLInputElement).files?.item(0)
  if (this.file) {
    var fr = new FileReader();
    fr.readAsDataURL(this.file);
    fr.onload = (event) => {

      this.source = fr.result;
      console.log(this.source);
      this.onChange.emit(this.file as File);
    }
  }
}*/


}
