import { Component, Input, OnInit } from '@angular/core';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';

@Component({
  selector: 'app-principal-detail',
  templateUrl: './principal-detail.component.html',
  styleUrls: ['./principal-detail.component.scss']
})
export class PrincipalDetailComponent implements OnInit{


  @Input()
  principal: PrincipalDto = new PrincipalDto();

  password1Ref: HTMLInputElement = document.getElementById('password1Id') as HTMLInputElement;
  password2Ref :HTMLInputElement = document.getElementById('password2Id') as HTMLInputElement;

password1: any;
password2: any;


ngOnInit(): void {
  this.password1Ref = document.getElementById('password1Id') as HTMLInputElement;
  this.password2Ref = document.getElementById('password2Id') as HTMLInputElement;

  }

checkEqualityPassword(){
    if(this.password1 != this.password2){
      this.password1Ref.className+='b-2';
      this.password2Ref.className+='b-2';
      this.password1Ref.style.borderColor='red';
      this.password2Ref.style.borderColor='red';
      console.log(this.password2Ref.style ?? 'No way !')
    }
    else{
      this.password1Ref.className+='b-2';
      this.password2Ref.className+='b-2';
      this.password1Ref.style.borderColor='rgb(0, 255, 13)';
      this.password2Ref.style.borderColor='rgb(0, 255, 13)';
      this.principal.password = this.password1;
    }
  }
}
