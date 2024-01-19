import { Component, OnInit } from '@angular/core';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';
import { AuthenticationService } from 'src/client/services/authentication.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit{

  principal? : PrincipalDto;

  constructor( private authentication :AuthenticationService){}

  ngOnInit(): void {
    this.principal = this.authentication.getConnectedPrincipal();
  }

}
