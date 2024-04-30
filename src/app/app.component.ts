import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { RouterOutlet } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import { HeaderComponent } from './header/header.component';


import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HostBinding } from '@angular/core';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule, NgbNavItem, MatToolbarModule, MatSliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bookshop';
}
