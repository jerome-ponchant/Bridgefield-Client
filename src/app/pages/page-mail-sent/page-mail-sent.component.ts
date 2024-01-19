import { OrganizationDto } from 'src/client/entity/OrganizationDto';
import { UserDto } from './../../../client/entity/UserDto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrincipalType } from 'src/client/entity/PrincipalType';
import { Location } from '@angular/common';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';

@Component({
  selector: 'app-page-mail-sent',
  templateUrl: './page-mail-sent.component.html',
  styleUrls: ['./page-mail-sent.component.scss']
})
export class PageMailSentComponent implements OnInit{


  constructor( private location : Location, )
  {}

  eMail: string = '';


  ngOnInit(): void {
    let state : any;
    state  = this.location.getState();
    this.eMail = state.email;
  }
}
