import { Observable, firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { CityDto } from '../entity/CityDto';
import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor( private httpClient: HttpClient, private config : RuntimeConfigService){}

  async searchByZipAndName2(zip: string, name2: string): Promise<CityDto[]>{
    let httpParams : HttpParams =new HttpParams();
    httpParams = httpParams.append('zip',zip);
    httpParams = httpParams.append('name2', name2);

    let url  =  await this.config.getConfig("rootRestUrl");
    url += await this.config.getConfig('api_public');
    url += '/cities/findByZipAndName2/';

    let response =  firstValueFrom(this.httpClient.get<CityDto[]>(url,{params: httpParams}));

    return response;
  }

  async findAll(){
    let url  =  await this.config.getConfig("rootRestUrl");
    url += await this.config.getConfig('api_public');
    url += '/cities/findAll/';

    let response =  firstValueFrom(this.httpClient.get<CityDto[]>(url));

    return response;
  }
}
