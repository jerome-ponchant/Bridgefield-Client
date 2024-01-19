import { PrincipalService } from 'src/client/services/principal.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuntimeConfigService } from 'src/app/shared/runtime-config.service';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';

@Component({
  selector: 'app-page-validation-principal',
  templateUrl: './page-validation-principal.component.html',
  styleUrls: ['./page-validation-principal.component.scss']
})
export class PageValidationPrincipalComponent implements OnInit{

  @Input('id')
  principalId : number = -1;

  principal? : any;

  constructor(private principalService: PrincipalService,private route : ActivatedRoute){
    console.log("Validation Component Construction");
  }

 async  ngOnInit() {
    this.principalId  = Number(this.route.snapshot.paramMap.get('id'));
    this.principal = await this.principalService.validate(this.principalId);
    console.log('Validation Component Constructed');
  }
}
