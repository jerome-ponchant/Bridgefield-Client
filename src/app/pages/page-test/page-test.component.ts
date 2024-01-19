import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CityDto } from 'src/client/entity/CityDto';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.scss']
})
export class PageTestComponent implements OnInit{




city: CityDto={};
Cities: string = "cities";
cities: CityDto[] =[];

  constructor(private httpClient : HttpClient,){}

  async ngOnInit() {



  }



}
