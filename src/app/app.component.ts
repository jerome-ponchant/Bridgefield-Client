import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Payroll-Client';

  constructor( private modalService : NgbModal){}

  showError(){
    
  }
}
