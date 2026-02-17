import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  imports: [PanelMenuModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/header'
    },
    {
      label: 'MFE',
      icon: 'pi pi-globe',
      routerLink: '/mfe'
    }
  ];
}
