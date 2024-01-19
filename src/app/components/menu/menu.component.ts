import { Component, Input } from '@angular/core';
import { Menu } from './Menu';
import { PrincipalDto } from 'src/client/entity/PrincipalDto';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuProperties: Array<Menu> = [{
    id: 1,
    title: 'Dashboard',
    icon: 'fas fa-chart-line',
    url: '',
    subMenu: [{
      id:12,
      title:'Users',
      icon: 'fa-solid fa-person',
      url:'wip',
      subMenu:[]
    }]
  },
  {
    id:2,
    title:'Assets',
    icon: 'fa-solid fa-house',
    url:'',
    subMenu: [{
      id:21,
      title:'Search',
      icon:'fa-solid fa-magnifying-glass',
      url:'wip',
      subMenu:[]
    },
    {
      id:22,
      title:'register',
      icon:'fa-solid fa-feather-pointed',
      url:'wip',
      subMenu:[]
    }
    ]
  },
  {
    id:3,
    title:'You',
    icon:'fa-solid fa-user',
    url:'wip',
    subMenu:[
      {
        id:31,
        title:'Pofile',
        icon:'fa-regular fa-file',
        url:'wip',
        subMenu:[]
      },
      {
        id:32,
        title:'Rents',
        icon:'fa-solid fa-house',
        url:'wip',
        subMenu:[]
      }
    ]
  }
  ];

  @Input()
  principal? :PrincipalDto;
}
