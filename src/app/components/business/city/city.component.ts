import { CityService } from './../../../../client/services/city.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { CityDto } from 'src/client/entity/CityDto';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements AfterViewInit{


  allCities: CityDto[] = [];

  @ViewChild('cityDropdown')
  dropDown!: ElementRef;

  dropDownEl :any;

  @Input()
  id : string = 'cityDropDown';

  isDropDownDisplayed=false;


  cities : CityDto[] = [];

  @Input()
  city: CityDto = {zip:'',name2:''};

  @Output()
  onChange = new EventEmitter<CityDto>()


  constructor(private cityService :CityService){
    this.ngAfterViewInit=this.ngAfterViewInit.bind(this);
  }

  async ngAfterViewInit() {
    this.allCities = await this.cityService.findAll()
    console.log('DropDown : '+this.dropDown);
  }



change(city: CityDto) {
  this.city = city;
  this.onChange.emit(city);
  this.isDropDownDisplayed=false;
}

show(){
  this.isDropDownDisplayed=true;
}

hide(){
  this.isDropDownDisplayed=false;
}



search( event : any) {
  let max = 100;
  let count = 0;
  this.isDropDownDisplayed=false,
  this.cities = this.allCities.filter(
    (c: CityDto) => {
      if(count < max){
      if (this.city.zip!="" &&  ! c.zip?.startsWith(this.city.zip ?? '')){
        return false;
      }
      if(this.city.name2!="" && ! c.name2?.startsWith(this.city.name2?.toUpperCase() ?? '')){
        return false;
      }
      if(this.city.country!='' && ! c.country?.startsWith(this.city.country?.toUpperCase() ?? '')){
        return false;
      }
        count ++
        return true;
      }
      else return false;
    }
  );
  if(this.cities.length>0){
    this.show();
    event.target.focus();
  }
  this.onChange.emit(this.city);
}

}
