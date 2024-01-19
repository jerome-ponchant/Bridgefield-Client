import { AuthenticationService } from 'src/client/services/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import { OrganizationDto } from 'src/client/entity/OrganizationDto';
import { UserDto } from 'src/client/entity/UserDto';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';
import { PrincipalType } from 'src/client/entity/PrincipalType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  principalType? : PrincipalType = PrincipalType.Principal;
  organization? : OrganizationDto;
  user?: UserDto;

  @Input()
  principal?: PrincipalDto;

  toDisplay = 1

  constructor( private authentication :AuthenticationService){}

  ngOnInit(): void {
    this.principalType=this.principal?.principalType;
    switch(this.principalType){
      case PrincipalType.User:
        this.user= this.principal as UserDto;
        this.toDisplay=2
        break;
      case PrincipalType.Organization:
        this.organization = this.principal as OrganizationDto;
        this.toDisplay=3
        break;
      }
  }

}
