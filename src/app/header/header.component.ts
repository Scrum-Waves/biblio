//import { initMDB,Collapse, Dropdown } from 'mdb-angular-ui-kit';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSliderModule, MatToolbarModule, NgbNavItem],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
