import { Injectable } from '@angular/core';
import { PhotoDto } from '../entity/PhotoDto';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient, private config: RuntimeConfigService) {
    this.create = this.create.bind(this)
  }


  get(id: number):Promise<PhotoDto>{
    return firstValueFrom(this.httpClient.get(
      this.config.getConfig(AuthenticationService.ROOT_REST_KEY)+"/brr/sandbox/photos/id/"+id
    ) as Observable<PhotoDto>)
  }

  create(photo : PhotoDto) : Promise<PhotoDto>{
    return firstValueFrom(this.httpClient.post(
      this.config.getConfig('rootRestUrl')+"/brr/sandbox/photos",
      photo
    ) as Observable<PhotoDto>);
  }

}
